import React from 'react';
import './App.css';

function Pics({ searchTerm }) {
  const books = [
    { 
      id: 2, 
      title: "Book Title 2", 
      author: "Author 2", 
      cover: "/rebook-images/blink.png",
      link: "/books/book-title-2"
    },
    { 
      id: 3, 
      title: "Book Title 3", 
      author: "Author 3", 
      cover: "/rebook-images/hold.png",
      link: "/books/book-title-3"
    },
    { 
      id: 4, 
      title: "Book Title 4", 
      author: "Author 4", 
      cover: "/rebook-images/slow.png",
      link: "/books/book-title-4"
    },
    { 
      id: 5, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 5, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 6, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 7, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 8, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 9, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 10, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },
    { 
      id: 11, 
      title: "Book Title 5", 
      author: "Author 5", 
      cover: "/rebook-images/solitaire.png",
      link: "/books/book-title-5"
    },

  ];

  // Filter books based on search term
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div>
      <div className="px-2">
        <div className="flex items-center mb-2">
          <h2 className="text-2xl font-bold">Popular Books</h2>
        </div>
        <div className="min-w-[300px] max-w-full overflow-x-auto scroll-hide scroll-ms-6 snap-start flex space-x-10 p-2">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <a key={book.id} href={book.link} className="flex-shrink-0 text-center bg-white p-2 rounded-md hover:shadow-2xl transition-shadow duration-900">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="object-cover h-24 rounded-md" 
                />
                <h3 className="mt-2 text-sm font-bold">{book.title}</h3>
                <p className="text-xs">{book.author}</p>
              </a>
            ))
          ) : (
            <div className="flex justify-center items-center min-h-[100px] w-full">
              <p className="text-center text-gray-500">No books found.</p>
            </div>
          )}
        </div>
      </div>
      
     
            
      </div>
    
  );
}

export default Pics;
