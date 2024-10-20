import React from 'react';
import { Link } from 'react-router-dom'; 

function Sidebar() {
  return (
    <div className="min-w-64 bg-teal-500 text-white h-full flex flex-col justify-between p-4">
      <div>
        <div className="p-4 flex items-center h-10">
          <a href="/components/Dashboard.jsx">
            <img 
              src="/rebook-images/image.png"
              alt="user"
              className="w-10 h-7 rounded-full mr-2"
            />
          </a>
          <h1 className="text-black text-sm mb-2 pt-3">
            Welcome, <span className="font-bold">Nicki</span>
          </h1>
        </div>
        <ul className="mt-0 text-gray-300">
          <li className="group rounded py-2 hover:bg-teal-200">
            <a href="#" className="flex items-center px-3 w-full group-hover:text-black">
              <img 
                src="/rebook-images/search-engine-1.png" 
                alt="Browse Books" 
                className="inline-block w-6 h-6 mr-2"
              />
              Browse Books
            </a>
          </li>
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <a href="#" className="flex items-center px-3 group-hover:text-black">
              <img 
                src="/rebook-images/Union.png" 
                alt="Borrow Books" 
                className="inline-block w-6 h-6 mr-2"
              />
              Borrow Books
            </a>
          </li>
          
          <hr className="border-black" />
          <li className="group rounded py-2 hover:bg-teal-200">
            <Link to="/History" className="flex items-center px-3 group-hover:text-black">
              <img 
                src="/rebook-images/clock1.png" 
                alt="History" 
                className="inline-block w-6 h-6 mr-2"
              />
              History
            </Link>
          </li>
          <hr className="border-black" />


          <li className="group rounded py-2 hover:bg-teal-200">
            <a href="#" className="flex items-center px-3 group-hover:text-black">
              <img 
                src="/rebook-images/sign-out-1.png" 
                alt="Log Out" 
                className="inline-block w-6 h-6 mr-2"
              />
              Log Out
            </a>
          </li>
          <hr className="border-black" />
        </ul>
      </div>
      <div className="p-0">
        <img 
          src="/rebook-images/bok1.png" 
          alt="bgbook"
          className="w-40 h-30 mt-auto"
        />
      </div>
    </div>
  );
}

export default Sidebar;
