import { IconBook2 } from "@tabler/icons-react";
import React, { useState, useEffect, useRef } from "react";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Button */}
      <button
        onClick={toggleMenu}
        className="bg-black text-white p-3 rounded-full shadow-lg focus:outline-none hover:bg-gray-800 transition-all flex flex-col items-center justify-center gap-[0.5]"
      >
        <svg xmlns="http://www.w3.org/2000/svg" height={25} width={40} viewBox="0 0 24 24">
          <g stroke="#ffffff" stroke-miterlimit="10">
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M.5 2v16A1.5 1.5 0 0 0 2 19.5h15L10.5.5H2A1.5 1.5 0 0 0 .5 2z"
            />
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5h10A1.5 1.5 0 0123.5 6v16a1.5 1.5 0 01-1.5 1.5h-8.5l-1.5-4M17 19.5l-3.5 4M3.5 8.5h7M4 8.5a3 3 0 116 0"
            />
            <circle cx="7" cy="5" r=".5" fill="#ffffff" />
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.5 12.5h7M3.5 15.5h7M13.579 9.5H20.5M14.605 12.5H20.5M15.632 15.5H20.5M16.658 18.5H20.5"
            />
          </g>
        </svg>
        MENU
      </button>

      {/* Modal Menu */}
      {isOpen && (
        <div ref={modalRef} className="absolute bottom-0 right-0 bg-black shadow-lg rounded-lg p-4 w-[70vw]">
          <ul className="space-y-2 text-white">
            <li className="hover:text-neutral-800 cursor-pointer">Items at 149</li>
            <li className="hover:text-neutral-600 cursor-pointer">Items at 199</li>
            <li className="hover:text-neutral-600 cursor-pointer">Recommended</li>
            <li className="hover:text-neutral-600 cursor-pointer">
              Today's Special Deals
            </li>
            <li className="hover:text-neutral-600 cursor-pointer">
              Hyderabadi Dum Biryanis
            </li>
            <li className="hover:text-neutral-600 cursor-pointer">
              Celebration Handi Biryanis
            </li>
            <li className="hover:text-neutral-600 cursor-pointer">New Launches</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FloatingMenu;