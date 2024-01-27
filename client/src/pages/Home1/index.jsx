import React from "react";

import { useNavigate } from "react-router-dom";

// import { Button, Img, Input, List, Text } from "components";
import Sidebar1 from "components/Sidebar1";

// import { CloseSVG } from "../../assets/images";

const Home1Page = () => {
  const navigate = useNavigate();

  const [frameonevalue, setFrameonevalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-0 mt-10 md:px-5 w-full">
          <div className="flex flex-col gap-10 items-center justify-start w-full"></div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;