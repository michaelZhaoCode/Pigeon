import React, { useContext } from "react";
import { Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Button, Img } from "components";
import { ProfileContext } from "pages/MyProfile/profileContext";

const Sidebar1 = (props) => {
  const navigate = useNavigate();
  const { showProfile, setShowProfile } = useContext(ProfileContext);
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <div className="flex flex-row">
      <Sidebar className={`overflow-y-auto ${props.className} `}>
        <div className="bg-yellow-700 flex flex-col items-center justify-start p-5 md:px-10 w-full h-full">
          <Img className="h-12 w-12" src="images/pigeon.png" alt="settings" />
          <Button
            className={`flex h-12 items-center justify-center mt-6 w-12 hover:bg-amber-400 hover:shadow-lg transition`}
            shape="round"
            color="white_A700_33"
            size="md"
            variant="fill"
            onClick={() => navigate("/home")}
          >
            <Img className="h-6" src="images/img_home_1.svg" alt="home" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-6 w-12 hover:bg-amber-400 hover:shadow-lg transition"
            shape="round"
            color="white_A700_33"
            size="md"
            variant="fill"
            onClick={() => navigate("/messages")}
          >
            <Img className="h-6" src="images/img_chat.svg" alt="chat" />
          </Button>
          <Button
            className="flex h-12 items-center justify-center mt-6 w-12 hover:bg-amber-400 focus:bg-amber-400 hover:shadow-lg transition"
            shape="round"
            color="white_A700_33"
            size="md"
            variant="fill"
            onClick={toggleProfile}
          >
            <Img className="h-6" src="images/img_user.svg" alt="user" />
          </Button>
          <Button
            className="absolute bottom-10 flex h-12 items-center justify-center my-4 w-12 hover:bg-amber-400 hover:shadow-lg transition"
            shape="round"
            color="white_A700_33"
            size="lg"
            variant="outline"
            onClick={() => navigate("/")}
          >
            <Img
              className="h-[18px]"
              src="images/img_arrowright.svg"
              alt="arrowright"
            />
          </Button>
        </div>
      </Sidebar>
    </div>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
