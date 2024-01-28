// ChooseChat.jsx
import React from "react";
import { Text } from "components";

const ChooseChat = ({
  senderName,
  messagePreview,
  timestamp,
  onClick,
  chatId,
}) => {
  return (
    <div
      className="common-pointer flex flex-row items-start justify-between w-full hover:shadow-lg transition"
      onClick={() => onClick(chatId)}
    >
      <div className="flex flex-col gap-1.5 items-start justify-start]">
        <Text
          className="text-gray-900 text-sm m-2"
          size="txtInterMedium14Gray900"
        >
          {senderName || "Sender Name"}
        </Text>
        <Text
          className="text-gray-500 text-sm mx-2 mb-2"
          size="txtInterRegular14Gray500"
        >
          {messagePreview || "Preview of the message..."}
        </Text>
      </div>
      <div className="flex flex-col items-end justify-start mt-[3px] pl-1 pt-1 w-1/4">
        <Text className="text-gray-500 text-xs" size="txtInterRegular12">
          {timestamp || "Time"}
        </Text>
      </div>
    </div>
  );
};

export default ChooseChat;
