import React, { useState, useEffect } from "react";
import { useProfileVisibility } from "pages/MyProfile/userProfileVisibility";
import Sidebar1 from "components/Sidebar1";
import PostCard from "components/PostCard";
import MyProfilePage from "pages/MyProfile";
import CreatePostCard from "components/CreatePostCard";
import { Button, Img, Input, List, Text } from "components";

const HomePage = () => {
  const { showProfile, profileRef } = useProfileVisibility();
  const [postcards, setPostcards] = useState([]);
  const [isCreatePostCardVisible, setCreatePostCardVisible] = useState(false);

  const toggleCreatePostCardVisible = () => {
    setCreatePostCardVisible(!isCreatePostCardVisible);
  };

  useEffect(() => {
    const fetchPostcards = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/view_postcards/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: "Michael" }),
        });

        if (response.ok) {
          const data = await response.json();
          setPostcards(data.output);
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPostcards();
  }, []);

  return (
    <>
      <div className="bg-gray-100 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar1 className="!sticky !w-[165px] flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-end md:ml-[0] ml-[65px] md:mt-0 mt-10 md:px-5 w-full">
          <div className="flex flex-col gap-5 items-center justify-center w-[50%]">
            <PostCard imageUrl={"./images/img_5.png"}></PostCard>
            <PostCard imageUrl={"./images/pigeon.png"}></PostCard>
            {postcards.map((postcard, index) => (
              <PostCard
                key={index}
                sender={postcard.sender}
                recipient={postcard.recipient}
                content={postcard.text}
                imageUrl={postcard.image_link}
                time={postcard.time}
              />
            ))}
          </div>
        </div>
        <Button
          className="flex h-12 items-center justify-center m-6 w-12"
          shape="round"
          color="green_400"
          size="md"
          variant="fill"
          onClick={toggleCreatePostCardVisible}
        >
          <Img className="h-6" src="images/img_mail.svg" alt="mail" />
        </Button>
      </div>
      <MyProfilePage ref={profileRef} isVisible={showProfile} />
      <CreatePostCard
        isVisible={isCreatePostCardVisible}
        onClose={toggleCreatePostCardVisible}
      ></CreatePostCard>
    </>
  );
};

export default HomePage;
