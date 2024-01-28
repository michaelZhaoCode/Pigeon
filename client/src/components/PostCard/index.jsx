import React from "react";
import { Img } from "components";

const PostCard = ({ sender, recipient, content, imageUrl, time }) => {
  const paperStyle = {
    background: "#fdf6e3",
    color: "#6b6b6b",
    fontFamily: "'Courier New', monospace",
    fontSize: "1rem",
    padding: "20px",
    borderLeft: "0.3rem solid #f3d19c",
  };

  const lineStyle = {
    borderBottom: "2px dashed #dcdcdc",
    paddingBottom: "30%",
    textDecoration: "1px underline dashed #dcdcdc",
  };

  // Ensure content is not undefined before splitting
  const contentLines = content
    ? content.split("\n")
    : [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequatur, illo quae id possimus perferendis dolorum dolore animi quibusdam ducimus rerum non? Eum quaerat possimus nisi facere, repellat fugit illum.",
      ];

  return (
    <div className="bg-white border rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-auto flex hover:shadow-xl transition">
      {/* Left Image */}
      <div className="flex w-1/2 rounded-l-xl justify-center items-center">
        {/* Set Img width to 100% of its container and remove margins */}
        <Img
          className="w-full h-auto" // Make the image fill the div exactly
          src={imageUrl}
          alt={"DalleImage"}
        />
      </div>
      {/* Right Information */}
      <div className="flex-1 flex flex-col rounded-r-xl" style={paperStyle}>
        {/* <h3 className="font-bold mb-1">{title || "Title"}</h3> */}
        <div className="mb-1">
          {`Sent by ${sender || "Vincent"} to ${recipient || "Vincent2"}`}
        </div>
        <div className="mb-4">{` ${time || "2024-01-27 07:00 PM"}`}</div>
        <div>
          {contentLines.map((line, index) => (
            <div key={index} style={lineStyle}>
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
