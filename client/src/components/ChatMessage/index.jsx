import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Text } from "components";

const ChatMessage = ({ senderName, messagePreview, timestamp }) => {
  const navigate = useNavigate();
  const lineStyle = {
    textDecoration: "1px underline dashed #dcdcdc",
  };

  return (
    <div className="flex flex-row items-start justify-between w-full bg-amber-100 border border-amber-300 rounded-lg shadow p-4 my-2">
      <div className="flex flex-col gap-1.5 items-start justify-start">
        <Text
          className="text-gray-900 text-sm font-handwriting"
          size="txtInterMedium14Gray900"
        >
          {senderName || "Vincent"}
        </Text>
        <Text
          className="text-gray-700 text-sm mb-2 font-handwriting"
          style={lineStyle}
          size="txtInterRegular14Gray500"
        >
          {messagePreview || "Preview Message Preview Message Preview Message "}
        </Text>
      </div>

      <Text className="text-gray-500 text-xs" size="txtInterRegular12">
        {timestamp || "2024-01-27 07:00 PM"}
      </Text>
    </div>
  );
};

export default ChatMessage;
