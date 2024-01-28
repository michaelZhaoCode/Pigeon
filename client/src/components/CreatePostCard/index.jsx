import React, { useState } from "react";
import { Img } from "components";
import Dropdown from "components/DropDown";

const CreatePostCard = ({ isVisible, onClose }) => {
  const [sender, setSender] = useState("");
  const [recipient, setRecipient] = useState("");
  const [content, setContent] = useState("");

  const dropdownItems = [
    "Medieval",
    "Renaissance",
    "Victorian Era",
    "Greatest Generation",
    "Silent Generation",
    "Baby Boomers",
    "Gen X",
    "Gen Z",
  ];
  const handleSelection = (item) => {
    console.log("Selected item:", item);
    // Perform any action on item selection
  };

  if (!isVisible) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the API to send the postcard
    const response = await fetch("http://127.0.0.1:5000/send_postcard/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender,
        receiver: recipient,
        text: content,
      }),
    });

    if (response.ok) {
      alert("Postcard sent successfully!");
      // Optionally reset form or handle success further
    } else {
      alert("Failed to send postcard.");
      // Handle error
    }
  };

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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7] mx-auto flex hover:shadow-xl transition"
      >
        {/* Left Image */}
        <div className="flex w-1/2 rounded-l-xl justify-center items-center">
          <Img
            className="w-full h-auto"
            src={"./images/dalle3.png"} // Replace with a default image path if needed
            alt={"DalleImage"}
          />
        </div>
        {/* Right Information */}
        <div className="flex-1 flex flex-col rounded-r-xl" style={paperStyle}>
          <div className="flex flex-col p-4">
            <input
              type="text"
              placeholder="Sender"
              value={sender}
              onChange={(e) => setSender(e.target.value)}
              className="mb-2 p-2"
            />
            <input
              type="text"
              placeholder="Recipient"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              className="mb-2 p-2"
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mb-2 p-2"
            />
            <Dropdown items={dropdownItems} onItemSelect={handleSelection} />
            <button
              type="submit"
              className=" bg-stone-300 text-white p-2 rounded my-2"
            >
              Send Postcard
            </button>
            <button
              className=" bg-stone-300 text-white p-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreatePostCard;
