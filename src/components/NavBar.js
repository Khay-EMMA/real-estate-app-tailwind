import React, { useState } from "react";

import logo from "../img/logo.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className=" bg-gray-900">
        <header className="px-4 py-3 bg-gray-900 flex items-center justify-between">
          <div>
            <img className="h-10 " src={logo} alt={logo} />
          </div>
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="block text-gray-500 hover:text-white  focus:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </header>
        <div className={isOpen ? "px-2 pt-2 pb-4" : "hidden"}>
          <button
            className="px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded"
            type="button"
          >
            List your properties
          </button>
          <button
            className="mt-1 px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded"
            type="button"
          >
            Trips
          </button>
          <button
            className="mt-2 px-2 py-1 block text-white font-semibold hover:bg-gray-700 rounded"
            type="button"
          >
            Messages
          </button>
        </div>
      </header>
    </div>
  );
}
