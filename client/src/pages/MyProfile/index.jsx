import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

import { CloseSVG } from "../../assets/images";

const MyProfilePage = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState("");

  return (
    <>
      <div className="flex md:flex-1 sm:flex-col flex-row font-sfprodisplay gap-2.5 items-center justify-between md:px-5 w-[27%] md:w-full">
        {/* <div className="bg-gray-500_7e h-32 sm:mt-0 my-[448px] rounded-sm w-[2%]"></div> */}
        <div className="bg-gray-900 flex flex-col md:gap-10 gap-[85px] items-end justify-start p-[38px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px]">
          <div className="flex flex-col font-inter gap-[30px] items-center justify-start mb-[42px] w-[99%] md:w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-[65%] md:w-full">
              <Img
                className="h-[108px] md:h-auto object-cover rounded-[36px] w-[108px]"
                src="images/img_avatar.png"
                alt="Avatar One"
              />
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInterBold30"
              >
                Edward Ford
              </Text>
              <Text
                className="text-gray-500 text-sm"
                size="txtInterRegular14Gray500"
              >
                @edwardford
              </Text>
            </div>
            {/* <div className="flex flex-row gap-[25px] items-center justify-center w-[71%] md:w-full">
              <div className="flex flex-row items-center justify-end pr-0.5 py-0.5 w-[41%]">
                <Text
                  className="text-base text-white-A700"
                  size="txtInterBold16WhiteA700"
                >
                  518
                </Text>
                <Text
                  className="ml-[5px] text-base text-gray-500"
                  size="txtInterBold16Gray500"
                >
                  Posts
                </Text>
              </div>
              <div className="flex flex-row items-start justify-end pb-0.5 pr-0.5 w-[47%]">
                <Text
                  className="mt-[3px] text-base text-white-A700"
                  size="txtInterBold16WhiteA700"
                >
                  22k
                </Text>
                <Text
                  className="ml-[3px] text-base text-gray-500"
                  size="txtInterBold16Gray500"
                >
                  Friends
                </Text>
              </div>
            </div> */}
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[217px] rounded-[29px] text-center text-sm"
                  color="green_400"
                  size="xl"
                  variant="fill"
                >
                  Edit Profile
                </Button>
                {/* <Button
                  className="flex h-12 items-center justify-center w-12"
                  shape="round"
                  color="gray_500_33"
                  size="md"
                  variant="outline"
                >
                  <Img
                    className="h-[22px]"
                    src="images/img_overflowmenu_2.svg"
                    alt="overflowmenu Two"
                  />
                </Button> */}
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start mt-[43px]">
                <Text
                  className="text-white-A700 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12WhiteA700"
                >
                  About
                </Text>
                <Text
                  className="leading-[22.00px] text-sm text-white-A700_cc"
                  size="txtInterRegular14WhiteA700cc"
                >
                  <>
                    Travel, Adventure & Lifestyle
                    <br />
                    Photographer & Digital Influencer
                    <br />
                    Nikon Ambassador
                    <br />
                    Let&#39;s Work:
                    <br />
                    ed.ford@mail.com
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfilePage;
