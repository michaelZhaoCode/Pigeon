import React, { useEffect, useState } from "react";

import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import MyProfilePage from "pages/MyProfile";
import ChatMessage from "components/ChatMessage";
import Dropdown from "components/DropDown";
import { Button, Img, Input, Line, List, Text, Choose } from "components";

const DirectMessagePage = ({ chatroomId }) => {
  const { showProfile, profileRef } = useProfileVisibility();
  const [messageInput, setMessageInput] = useState("");
  const [styleIndex, setStyleIndex] = useState("");
  const [messages, setMessages] = useState([]);

  const dropdownItems = [
    "Medieval",
    "Renaissance",
    "Victorian Era",
    "Greatest Generation",
    "Silent Generation",
    "Baby Boomers",
    "Gen X",
    "Gen Z",
  ];

  const handleSelection = (index) => {
    setStyleIndex(index.toString());
  };

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/choose_chatroom/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatroom_id: chatroomId }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(data.output);
      } else {
        // Handle errors
        console.error("Failed to fetch messages");
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/send_chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "currentUser", // Replace with actual username
          chatroom_id: chatroomId,
          style: styleIndex,
          text: messageInput,
        }),
      });

      if (response.ok) {
        setMessageInput(""); // Reset input field
        fetchMessages(); // Refresh messages
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [chatroomId]);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay justify-start mx-auto w-full h-screen">
        <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-full">
          {/* Right Side */}
          <div className="flex flex-col font-inter items-start justify-start w-full">
            {/* Title */}
            <div className="w-full">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                {/* Chatroom name OR username if 1:1 */}
                Marriet Miles
              </Text>
            </div>
            {/* Chat Messages */}
            {/* <div className="self-start">
              <ChatMessage></ChatMessage>
            </div>
            <div className="self-end">
              <ChatMessage></ChatMessage>
            </div> */}
            <div>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`my-2 ${
                    message.username === "currentUser"
                      ? "self-end"
                      : "self-start"
                  }`}
                >
                  <ChatMessage
                    senderName={message.username}
                    messagePreview={message.text}
                    timestamp={message.time}
                    font={message.font}
                  />
                </div>
              ))}
            </div>

            {/* Bottom */}
            <div className=" absolute bottom-0 flex md:flex-col flex-row gap-[15px] items-center justify-start mt-[45px] w-full">
              <input
                type="text"
                name="Field"
                placeholder="Start writing..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                className="font-medium p-0 placeholder:text-gray-500 text-left text-sm bg-stone-300 h-9 rounded-xl w-full focus:outline-none focus:ring-0 w-[40%]"
              />

              <Dropdown items={dropdownItems} onItemSelect={handleSelection} />
              <Button
                onClick={sendMessage}
                className="flex h-12 items-center justify-center md:mt-0 my-[5px] w-12 mx-2"
                shape="round"
                color="indigo_A200"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[22px]"
                  src="images/send_icon.svg"
                  alt="minimize"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
    </>
  );
};

export default DirectMessagePage;
