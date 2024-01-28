import React from "react";

import { useNavigate } from "react-router-dom";
import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import MyProfilePage from "pages/MyProfile";
import { Button, Img, Input, Line, List, Text, Choose } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const DirectMessagePage = () => {
  const navigate = useNavigate();
  const { showProfile, profileRef } = useProfileVisibility();

  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-sfprodisplay items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-[52px] items-center justify-between w-full">
          {/* Right Side */}
          <div className="flex flex-col font-inter items-start justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-row gap-[15px] items-center justify-between w-[30%] md:w-full">
                <div className="flex flex-col gap-3 items-start justify-start">
                  <Text
                    className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                    size="txtInterBold22"
                  >
                    {/* Chatroom name OR username if 1:1 */}
                    Marriet Miles
                  </Text>
                </div>
              </div>
              <Img
                className="h-[25px] ml-10 md:ml-[0] w-[25px]"
                src="images/img_overflowmenu.svg"
                alt="overflowmenu"
              />
            </div>
            {/* Friend */}
            <div className="flex flex-col items-start justify-start mt-[70px] w-[43%] md:w-full">
              <List
                className="flex flex-col gap-10 mt-[49px] w-[84%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] w-[84%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-[79%]">
                    <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[72%] md:w-full">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterBold14"
                      >
                        Marriet Miles
                      </Text>
                      <Text
                        className="ml-[5px] text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterRegular14Gray500"
                    >
                      Yes, I saw his post yesterday
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            {/* You */}
            <div className="flex flex-col items-end justify-start mt-[70px] w-[43%] md:w-full">
              <List
                className="flex flex-col gap-10 mt-[49px] w-[84%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[15px] items-start justify-start mt-[49px] pb-[3px] pr-[3px] w-[84%] md:w-full">
                  <div className="flex flex-col gap-3.5 items-start justify-start mb-1.5 w-[79%]">
                    <div className="flex flex-row items-start justify-start pr-0.5 py-0.5 w-[72%] md:w-full">
                      <Text
                        className="text-gray-900 text-sm"
                        size="txtInterBold14"
                      >
                        You
                      </Text>
                      <Text
                        className="ml-[5px] text-gray-500 text-xs"
                        size="txtInterRegular12"
                      >
                        4min
                      </Text>
                    </div>
                    <Text
                      className="text-gray-500 text-sm"
                      size="txtInterRegular14Gray500"
                    >
                      Yes, I saw his post yesterday
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between mt-[45px] w-full">
              <Button
                className="flex h-12 items-center justify-center md:mt-0 my-[5px] w-12"
                shape="round"
                color="indigo_A200"
                size="md"
                variant="fill"
              >
                <Img
                  className="h-[22px]"
                  src="images/img_minimize_48X48.svg"
                  alt="minimize"
                />
              </Button>
              <Input
                name="Field"
                placeholder="Start typing…"
                className="font-medium p-0 placeholder:text-gray-500 text-left text-sm w-full"
                wrapClassName="flex md:flex-1 rounded-[12px] md:w-full"
                suffix={
                  <Img
                    className="h-[18px] ml-[35px] mr-5 my-5"
                    src="images/img_user_14X14.svg"
                    alt="user"
                  />
                }
                color="gray_100"
                size="2xl"
              ></Input>
            </div>
          </div>
          ;
        </div>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
    </>
  );
};

export default DirectMessagePage;
