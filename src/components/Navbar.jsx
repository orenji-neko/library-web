import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function Navbar({ toggleSidebar, isSidebarOpen }) {
  return (
    <div className="flex  justify-between bg-teal-200  p-4 border-b-2  border-gray-400">
      <div className="flex align-[3px] ">
        <button onClick={toggleSidebar} className="focus:outline-none flex flex-row justify-center items-center">
          <div 
            className={`h-6 w-1 bg-black transition-transform duration-300 ${isSidebarOpen ? 'rotate-0' : 'rotate-90'}`} 
          />
          <div 
            className={`h-6 w-1 bg-black mt-1 transition-opacity duration-300 ${isSidebarOpen ? 'rotate-0' : 'rotate-90'}`} 
          />
          <div 
            className={`h-6 w-1 bg-black mt-1 transition-transform duration-300 ${isSidebarOpen ? 'rotate-0' : '-rotate-90'}`} 
          />
        </button>
        <a href="/">
          <img 
            src="/rebook-images/Component2.png" 
            alt="ReBook Logo"
            className="ml-4 h-8" 
          />
        </a>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} className="text-black text-xl cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
