import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import ChooseChat from "components/ChooseChat";
import CreateChat from "components/CreateChat";
import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import Sidebar1 from "components/Sidebar1";
import MyProfilePage from "pages/MyProfile";
import { CloseSVG } from "../../assets/images";
import axios from "axios";
import DirectMessagePage from "pages/DirectMessage";

const MessagesPage = () => {
  const navigate = useNavigate();
  const { showProfile, profileRef } = useProfileVisibility();
  const [chatrooms, setChatrooms] = useState([]);
  const [isCreateChatVisible, setCreateChatVisible] = useState(false);
  const [showDirectMessage, setShowDirectMessage] = useState(false);

  useEffect(() => {
    const fetchChatrooms = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/view_chatrooms/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "YourUsername" }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setChatrooms(data.output);
      } catch (error) {
        console.error("Error fetching chatrooms:", error);
      }
    };

    fetchChatrooms();
  }, []);

  const toggleCreateChatVisible = () => {
    setCreateChatVisible(!isCreateChatVisible);
  };

  const handleChatSelect = () => {
    setShowDirectMessage(!showDirectMessage);
  };
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row items-center justify-between w-full">
          {/* Left Side Message List */}
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between w-[35%]">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full mx-5">
              {/* Header */}
              <div className="w-full flex justify-between items-center px-5 pt-5">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtSFProDisplayBold30"
                >
                  Letter Box
                </Text>
                <Button
                  className="flex h-12 items-center justify-center w-12 self-end"
                  shape="round"
                  color="green_400"
                  size="md"
                  variant="fill"
                  onClick={toggleCreateChatVisible}
                >
                  <Img
                    className="h-[22px]"
                    src="images/img_laptop_14X14.svg"
                    alt="laptop"
                  />
                </Button>
              </div>
              {/* List */}
              <List
                className="flex flex-col font-inter gap-5 items-center w-[98%] "
                orientation="vertical"
              >
                <ChooseChat
                  senderName=""
                  mesasgePreview=""
                  timeStamp=""
                  onClick={handleChatSelect}
                ></ChooseChat>
                <ChooseChat
                  senderName=""
                  mesasgePreview=""
                  timeStamp=""
                  onClick={handleChatSelect}
                ></ChooseChat>
                <ChooseChat
                  senderName=""
                  mesasgePreview=""
                  timeStamp=""
                  onClick={handleChatSelect}
                ></ChooseChat>
                {chatrooms.map((chatroom) => (
                  <ChooseChat
                    key={chatroom.chatroom_id}
                    senderName={chatroom.chatroom_name}
                    messagePreview={"Latest message or some placeholder text"}
                    timestamp={"Timestamp"}
                    onClick={handleChatSelect}
                    chatId={chatroom.chatroom_id}
                  />
                ))}
              </List>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex md:flex-1 md:flex-col flex-row items-center justify-between md:px-5 w-[65%] md:w-full">
            {!showDirectMessage && (
              <div className="flex flex-col gap-5 items-center justify-start w-full">
                <div className="bg-gray-100 h-40 md:h-[75px] p-[41px] md:px-10 sm:px-5 relative rounded-[50px] w-40">
                  <Img
                    className="absolute h-[75px] inset-[0] justify-center m-auto w-[49%]"
                    src="images/img_mail_75X78.svg"
                    alt="mail One"
                  />
                </div>
                <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-500"
                    size="txtInterBold30Gray500"
                  >
                    {/* TODO: Can add user custom font */}
                    <>Pigeons&#39; Mail Delivery</>
                  </Text>
                  <Text
                    className="text-gray-500 text-sm"
                    size="txtInterMedium14Gray500"
                  >
                    Pick a friend and send a mail
                  </Text>
                </div>
              </div>
            )}
            {showDirectMessage && <DirectMessagePage />}
          </div>
        </div>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
      <CreateChat
        isVisible={isCreateChatVisible}
        onClose={toggleCreateChatVisible}
      ></CreateChat>
    </>
  );
};

export default MessagesPage;
