// Modal.jsx
import { Input, Button } from "components";
import React from "react";

const Modal = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <button onClick={onClose}>Close</button>
        <form>
          <input
            type="text"
            class="my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Chat Room Name"
          ></input>
          <input
            type="text"
            class="my-2 py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
            placeholder="Add members"
          ></input>
          {/* <button
            type="submit"
            className="bg-blue-500 text-white rounded px-4 py-2"
          >
            Create
          </button> */}
          <Button
            className="flex h-12 w-full items-center justify-center self-end"
            shape="round"
            color="green_400"
            size="md"
            variant="fill"
          >
            Create
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
