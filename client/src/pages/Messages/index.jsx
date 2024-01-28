import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Input, Line, List, Text } from "components";
import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import Sidebar1 from "components/Sidebar1";
import MyProfilePage from "pages/MyProfile";
import { CloseSVG } from "../../assets/images";

const MessagesPage = () => {
  const navigate = useNavigate();
  const { showProfile, profileRef } = useProfileVisibility();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-full">
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-start justify-between md:px-5 w-[41%] md:w-full">
            <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <div className="flex flex-row gap-[15px] items-center justify-between w-[98%] md:w-full">
                  <Input
                    name="Search"
                    placeholder="Search in social…"
                    value={searchvalue}
                    onChange={(e) => setSearchvalue(e)}
                    className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                    wrapClassName="flex rounded-[12px]"
                    prefix={
                      <Img
                        className="cursor-pointer h-[18px] ml-5 mr-[15px] my-5"
                        src="images/img_search.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#8f92a1"
                        className="cursor-pointer h-[18px] my-auto"
                        onClick={() => setSearchvalue("")}
                        style={{
                          visibility:
                            searchvalue?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={18}
                        width={18}
                        viewBox="0 0 18 18"
                      />
                    }
                    size="xl"
                  ></Input>
                  <Button
                    className="flex h-12 items-center justify-center my-[5px] w-12"
                    shape="round"
                    color="green_400"
                    size="md"
                    variant="fill"
                  >
                    <Img
                      className="h-[22px]"
                      src="images/img_laptop_14X14.svg"
                      alt="laptop"
                    />
                  </Button>
                </div>
                <div className="flex flex-col gap-10 items-start justify-start w-full">
                  <Text
                    className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtSFProDisplayBold30"
                  >
                    Inbox
                  </Text>
                </div>
              </div>
              <List
                className="flex flex-col font-inter gap-10 items-center w-[98%]"
                orientation="vertical"
              >
                <div
                  className="common-pointer flex flex-row items-start justify-between w-full"
                  onClick={() => navigate("/directmessage")}
                >
                  <div className="flex flex-row gap-[13px] items-end justify-between w-3/5">
                    <div className="h-12 relative w-1/4">
                      <Img
                        className="absolute h-12 inset-y-[0] left-[0] my-auto object-cover rounded-[12px] w-12"
                        src="images/img_avatar_28X28.png"
                        alt="Avatar"
                      />
                      <div className="absolute h-3 right-[0] top-[0] w-[30%]">
                        <div className="bg-gray-100 h-3 m-auto rounded-[7.58px] w-full"></div>
                        <div className="absolute bg-green-400 h-2.5 inset-x-[0] mx-auto rounded-[50%] top-[0] w-2.5"></div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start mb-[3px] mt-[7px]">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterMedium14Gray900"
                      >
                        Billy Green
                      </Text>
                      <Text
                        className="text-gray-500 text-sm"
                        size="txtInterRegular14Gray500"
                      >
                        Thank you for sharing
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start mt-[3px] pl-1 pt-1 w-1/4">
                    <Text
                      className="text-gray-500 text-xs"
                      size="txtInterRegular12"
                    >
                      2024-01-27 3:10 AM
                    </Text>
                    <Button
                      className="cursor-pointer font-bold font-sfprodisplay mt-0.5 rounded-md text-[10px] text-center tracking-[1.00px] uppercase w-[17px]"
                      color="red_A200"
                      size="xs"
                      variant="fill"
                    >
                      1
                    </Button>
                  </div>
                </div>
              </List>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex md:flex-1 md:flex-col flex-row gap-2.5 items-center justify-between md:px-5 w-[56%] md:w-full">
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
                  <>It&#39;s nice to chat with someone</>
                </Text>
                <Text
                  className="text-gray-500 text-sm"
                  size="txtInterMedium14Gray500"
                >
                  Pick a person from left menu and start your conversation
                </Text>
              </div>
            </div>
          </div>
        </div>
        <MyProfilePage isVisible={false}></MyProfilePage>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
    </>
  );
};

export default MessagesPage;
