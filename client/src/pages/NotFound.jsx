import CreatePostCard from "components/CreatePostCard";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="text-blue-400">Opps! We ran out of code</h1>
      <CreatePostCard></CreatePostCard>
    </div>
  );
};

export default NotFound;
