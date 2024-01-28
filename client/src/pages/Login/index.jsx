import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You might want to send username and password to Auth0 for authentication
    // This is a basic example, typically you would not handle passwords directly
    loginWithRedirect({
      redirectUri: window.location.origin + "/home",
      // Add additional parameters as needed for Auth0 authentication
    })
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.error("Authentication failed: ", error);
      });
  };

  return (
    <>
      <div className="bg-gray-300 flex font-inter mx-auto relative w-full h-screen">
        {/* Left Side */}
        <div
          className="bg-cover bg-no-repeat flex flex-col justify-center md:px-5 w-[85%]"
          style={{ backgroundImage: "url('images/img_left.png')" }}
        >
          <div className="flex flex-col items-center  my-[130px] w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
              size="txtInterBold30"
            >
              Hello!
            </Text>
            <Text
              className="mt-3.5 text-sm text-white-A700"
              size="txtInterMedium14"
            >
              Don’t have an account yer?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold min-w-[220px] mt-[30px] rounded-[29px] text-center text-sm"
              onClick={() => navigate("/signup")}
              color="indigo_A200"
              size="xl"
              variant="fill"
            >
              Create an account
            </Button>
          </div>
        </div>
        {/* Right Side */}
        <div className="bg-white-A700_7e rounded-md w-[0.5%] self-center h-64 mx-[-40px]"></div>
        <div className="flex flex-row justify-end my-auto w-[50%]">
          <div className="bg-white-A700 flex flex-col sm:px-5 rounded-bl-[32px] rounded-tl-[32px] w-[80%]">
            <div className="flex flex-col gap-[18px] items-start justify-start mx-10 mt-10 mb-5">
              <Img
                className="h-16 w-16"
                src="images/pigeon.png"
                alt="question"
              />
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterBold22"
              >
                Welcome Back!{" "}
              </Text>
              <Text
                className="text-gray-500 text-sm"
                size="txtInterMedium14Gray500"
              >
                Sign in to continue{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-center justify-start mx-10 my-5  md:w-full">
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12"
                >
                  Username
                </Text>
                {/* <Input
                  name="username"
                  placeholder="Enter your username"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm"
                  wrapClassName="flex w-full"
                  type="username"
                  shape="round"
                  color="gray_500_6c"
                  variant="outline"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                /> */}
                <input
                  name="username"
                  placeholder="Enter your username"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm"
                  type="text" // changed type to 'text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="text-gray-900 text-xs tracking-[1.00px] uppercase"
                  size="txtInterBold12"
                >
                  Password
                </Text>
                {/* <Input
                  name="password"
                  placeholder="Enter your password"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm"
                  wrapClassName="flex w-full"
                  type="password"
                  shape="round"
                  color="gray_500_6c"
                  variant="outline"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                /> */}
                <input
                  name="password"
                  placeholder="Enter your password"
                  className="font-medium p-0 placeholder:text-gray-500 text-left text-sm"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <Button
              className="common-pointer cursor-pointer font-bold min-w-[350px] mx-10 mb-5 rounded-[29px] text-center text-sm"
              onClick={handleLogin}
              color="indigo_A200"
              size="xl"
              variant="fill"
            >
              Login
            </Button>
            {/* <div className="flex flex-col justify-center items-center gap-3">
              <Text className="text-gray-500 text-xs" size="txtInterRegular12">
                Or connect with socials
              </Text>
              <div className="flex flex-col items-center justify-start w-full mb-5">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[350px] rounded-[29px]"
                  leftIcon={<Img src="images/img_google.svg" alt="google" />}
                  color="gray_500_66"
                  size="xl"
                  variant="outline"
                >
                  <div className="font-bold text-sm">Connect with Google+</div>
                </Button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
