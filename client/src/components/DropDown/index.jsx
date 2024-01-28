import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ items, onItemSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (item) => {
    if (onItemSelect) {
      onItemSelect(item);
    }
    setIsOpen(false);
  };

  return (
    <div
      className="hs-dropdown relative inline-flex bg-stone-300 rounded-3xl"
      ref={dropdownRef}
    >
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={toggleDropdown}
      >
        <img
          className="w-8 h-auto rounded-full mx-1"
          src="./images/cohere.png"
          alt="Dropdown"
        />
        <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-gray-400">
          Writing Style
        </span>
        <svg
          className={`hs-dropdown-open:rotate-0 w-4 h-4 mr-2 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className={`hs-dropdown-menu transition-[opacity,margin] duration-300  bg-stone-300 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        } min-w-[15rem] bg-white shadow-md rounded-lg p-2 absolute bottom-full mb-2 dark:bg-gray-800 dark:border dark:border-gray-700`}
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        {items.map((item, index) => (
          <a
            key={index}
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            href="#"
            onClick={() => handleItemClick(item)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
