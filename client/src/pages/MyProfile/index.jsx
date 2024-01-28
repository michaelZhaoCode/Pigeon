import React, { useState, useRef, useEffect } from "react";
import { Button, Img, Input, List, Text } from "components";

const MyProfilePage = React.forwardRef(({ isVisible }, ref) => {
  const [editMode, setEditMode] = useState(false);
  const [aboutText, setAboutText] = useState(
    "Travel, Adventure & Lifestyle\nPhotographer & Digital Influencer\nNikon Ambassador\nLet's Work:\ned.ford@mail.com"
  );

  const textAreaRef = useRef(null);

  const handleButtonClick = () => {
    if (editMode) {
      // Save logic here
      setEditMode(false);
      // Call API to save the updated aboutText
      // Example: await saveProfileAboutAPI(aboutText);
    } else {
      setEditMode(true);
    }
  };

  const handleTextChange = (event) => {
    setAboutText(event.target.value);
    resizeTextArea();
  };

  const resizeTextArea = () => {
    const textArea = textAreaRef.current;
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  };

  useEffect(() => {
    if (editMode) {
      resizeTextArea();
    }
  }, [editMode]);

  if (!isVisible) return null;
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50">
        <div
          ref={ref}
          className="fixed inset-y-0 right-0 bg-gray-900 flex flex-col md:gap-10 gap-[85px] items-end justify-start p-[38px] sm:px-5 rounded-bl-[32px] rounded-tl-[32px]"
        >
          <div className="flex flex-col font-inter gap-[30px] items-center justify-start mb-[42px] w-[99%] md:w-full">
            {/* Information Display */}
            <div className="flex flex-col gap-2.5 items-center justify-start md:w-full">
              {/* <Img
                className="h-[108px] md:h-auto object-cover rounded-[36px] w-[108px]"
                src="images/img_avatar.png"
                alt="Avatar One"
              /> */}
              <Text className="text-3xl text-white-A700" size="txtInterBold30">
                Edward Ford
              </Text>
              <Text
                className="text-gray-500 text-sm"
                size="txtInterRegular14Gray500"
              >
                @edwardford
              </Text>
            </div>
            {/* Edit Button & About */}
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-center w-full">
                <Button
                  className="cursor-pointer font-bold min-w-[217px] rounded-[29px] text-center text-sm"
                  color="nostalgia"
                  size="xl"
                  variant="fill"
                  onClick={handleButtonClick}
                >
                  {editMode ? "Save" : "Edit Profile"}
                </Button>
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start my-10">
                <Text
                  className="text-white-A700 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12WhiteA700"
                >
                  About
                </Text>
                {editMode ? (
                  <textarea
                    ref={textAreaRef}
                    className="text-area-class"
                    value={aboutText}
                    onChange={handleTextChange}
                  />
                ) : (
                  <Text
                    className="leading-[22.00px] text-sm text-white-A700_cc"
                    size="txtInterRegular14WhiteA700cc"
                  >
                    {aboutText.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Text>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default MyProfilePage;
