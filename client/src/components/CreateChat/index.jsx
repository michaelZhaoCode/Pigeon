import React, { useState } from "react";

const CreateChat = ({ isVisible, onClose }) => {
  const [chatRoomName, setChatRoomName] = useState("");
  const [members, setMembers] = useState("");

  const handleCreateChatRoom = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/create_chatroom/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usernames: members.split(","), // Assuming members are entered as comma-separated values
          chatroom_name: chatRoomName,
        }),
      });
      if (response.ok) {
        // Handle successful response
        onClose(); // Close the modal on success
      } else {
        // Handle errors
        console.error("Error creating chat room");
      }
    } catch (error) {
      console.error("Error making request", error);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <form onSubmit={handleCreateChatRoom}>
          <input
            type="text"
            className="my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Chat Room Name"
            value={chatRoomName}
            onChange={(e) => setChatRoomName(e.target.value)}
          />
          <input
            type="text"
            className="my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
            placeholder="Add members (comma-separated)"
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
          <button
            type="submit"
            className="flex h-12 w-full items-center justify-center self-end bg-stone-300 my-2 shape-round color-green_400 size-md variant-fill rounded-3xl"
          >
            Create
          </button>
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center self-end bg-stone-300 my-2 shape-round color-green_400 size-md variant-fill rounded-3xl"
            onClick={onClose}
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateChat;
