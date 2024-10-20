import React, { useState, useRef } from 'react';
import Pics from './Pics';
import { FaSearch, FaTimes, FaChevronDown } from 'react-icons/fa';

const latestBooksData = [
  { id: 2, title: "Book Title 2", author: "Author 2", cover: "/rebook-images/blink.png", rating: 4.5, status: "Available" },
  { id: 3, title: "Book Title 3", author: "Author 3", cover: "/rebook-images/hold.png", rating: 4.0, status: "Checked Out" },
  { id: 4, title: "Book Title 4", author: "Author 4", cover: "/rebook-images/slow.png", rating: 3.8, status: "Available" },
  { id: 5, title: "Book Title 5", author: "Author 5", cover: "/rebook-images/solitaire.png", rating: 4.7, status: "Available" },
];

const Landing = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(scrollRef.current.scrollTop);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    scrollRef.current.scrollTop = scrollTop - deltaY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className=" bg-teal-100 p-6">
      <div className=" ">
        {/* Search Bar and Categories Dropdown */}
        <div className="flex justify-between items-center  max-w-2xl mb-2 space-x-4">
          <div className="flex items-center border border-gray-300 rounded-full p-2 bg-white flex-1">
            <FaSearch className="text-black mr-2" />
            <input
              type="text"
              placeholder="Search by title or author..."
              className="outline-none flex-1"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <FaTimes className="text-black cursor-pointer ml-2" onClick={clearSearch} />
            )}
          </div>

          {/* Categories Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md flex items-center">
              <span className="pr-2">Categories</span>
              <FaChevronDown className={`text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <div className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-md mt-1 w-48">
                <ul className="space-y-2 p-2">
                  <li className="p-2 bg-gray-100 rounded hover:bg-teal-600 hover:text-white cursor-pointer">Fiction</li>
                  <li className="p-2 bg-gray-100 rounded hover:bg-teal-600 hover:text-white cursor-pointer">Non-Fiction</li>
                  <li className="p-2 bg-gray-100 rounded hover:bg-teal-600 hover:text-white cursor-pointer">Science</li>
                  <li className="p-2 bg-gray-100 rounded hover:bg-teal-600 hover:text-white cursor-pointer">History</li>
                  <li className="p-2 bg-gray-100 rounded hover:bg-teal-600 hover:text-white cursor-pointer">Mystery</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <Pics searchTerm={searchTerm} />
      </div>
      <h2 className="text-2xl font-bold p-4">Latest</h2>
      <div className="relative bg-white p-1 rounded-md shadow-lg h-48">
        <div
          className="overflow-y-scroll h-full"
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="p-4 border-b border-gray-300">Cover Image</th>
                <th className="p-4 border-b border-gray-300">Title</th>
                <th className="p-4 border-b border-gray-300">Rating</th>
                <th className="p-4 border-b border-gray-300">Author</th>
                <th className="p-4 border-b border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {latestBooksData.map((book) => (
                <tr key={book.id}>
                  <td className="p-4 border-b border-gray-200">
                    <img src={book.cover} alt={book.title} className="h-16 w-16 object-cover rounded-md" />
                  </td>
                  <td className="p-4 border-b border-gray-200">{book.title}</td>
                  <td className="p-4 border-b border-gray-200">{book.rating}</td>
                  <td className="p-4 border-b border-gray-200">{book.author}</td>
                  <td className={`p-4 border-b border-gray-200 ${book.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>
                    {book.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Landing;
