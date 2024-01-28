import React from "react";
import { Img } from "components";

const PostCard = ({ imageUrl, title, content, sender, receiver, time }) => {
  const paperStyle = {
    background: "#fdf6e3",
    color: "#6b6b6b",
    fontFamily: "'Courier New', monospace",
    fontSize: "1rem",
    padding: "20px",
    borderLeft: "0.3rem solid #f3d19c",
  };

  const lineStyle = {
    borderBottom: "1px dashed #dcdcdc",
    paddingBottom: "10em",
    marginBottom: "2em",
    textDecoration: "underline",
  };

  // Ensure content is not undefined before splitting
  const contentLines = content
    ? content.split("\n")
    : [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad consequatur, illo quae id possimus perferendis dolorum dolore animi quibusdam ducimus rerum non? Eum quaerat possimus nisi facere, repellat fugit illum.",
      ];

  return (
    <div className="bg-white border rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-auto flex">
      {/* Left Image */}
      <div className="flex w-1/2 rounded-l-xl justify-center items-center">
        <Img
          className="w-[50%] mx-10"
          src={imageUrl || "./images/pigeon.png"}
          alt={title || "DalleImage"}
        />
      </div>
      {/* Right Information */}
      <div className="flex-1 flex flex-col rounded-r-xl" style={paperStyle}>
        <h3 className="font-bold mb-4">{title || "Title"}</h3>
        <div className="mb-4">
          {`Sent by ${sender || "Vincent"} to ${receiver || "Vincent2"}`}
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
