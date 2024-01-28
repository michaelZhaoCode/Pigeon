import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import ChooseChat from "components/ChooseChat";
import CreateChat from "components/CreateChat";
import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import Sidebar1 from "components/Sidebar1";
import MyProfilePage from "pages/MyProfile";
import { CloseSVG } from "../../assets/images";

const MessagesPage = () => {
  const navigate = useNavigate();
  const { showProfile, profileRef } = useProfileVisibility();
  const { roomMembers, setRoomMembers } = useState([]);
  const [isCreateChatVisible, setCreateChatVisible] = useState(false);

  const toggleCreateChatVisible = () => {
    setCreateChatVisible(!isCreateChatVisible);
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
                ></ChooseChat>
                <ChooseChat
                  senderName=""
                  mesasgePreview=""
                  timeStamp=""
                ></ChooseChat>
                <ChooseChat
                  senderName=""
                  mesasgePreview=""
                  timeStamp=""
                ></ChooseChat>
              </List>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex md:flex-1 md:flex-col flex-row items-center justify-between md:px-5 w-[65%] md:w-full">
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
          </div>
        </div>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
      <CreateChat
        isVisible={isCreateChatVisible}
        onClose={toggleCreateChatVisible}
      >
        <form>
          <input type="text" placeholder="Chat Name" />
          <input type="text" placeholder="Member Name" />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Create
          </button>
        </form>
      </CreateChat>
    </>
  );
};

export default MessagesPage;
