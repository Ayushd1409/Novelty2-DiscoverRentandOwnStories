import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function BookDescription() {
  const { id } = useParams(); // Extract the `id` from the URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [categoryBooks, setCategoryBooks] = useState([]);
  const [nameBooks, setNameBooks] = useState([]);
  const [categoryNameBooks, setCategoryNameBooks] = useState([]);
  const [loading, setLoading] = useState(true);



  const [rentModalOpen, setRentModalOpen] = useState(false);
  const [rentalDays, setRentalDays] = useState(1);
  const [rentalPrice, setRentalPrice] = useState(0);

  const calculateRentalPrice = (days) => {
    if (days <= 15) {
      return Math.round((book.price * 20) / 100); // 20% of book price
    }
    return Math.round((book.price * 20) / 100 + (days - 15) * 10); // 10 per day after 15 days
  };

  const handleRentalDaysChange = (e) => {
    const days = parseInt(e.target.value, 10) || 1; // Ensure days is a number
    setRentalDays(days);
    setRentalPrice(calculateRentalPrice(days));
  };



  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const allBooks = res.data;
        console.log("Fetched Data:", allBooks);

        const foundBook = allBooks.find((item) => String(item.id) === id);
        setBook(foundBook);

        if (foundBook) {
          // Filter books by category
          const byCategory = allBooks.filter(
            (item) => item.category === foundBook.category && item.id !== foundBook.id
          );

          // Filter books by name (not author!)
          const byName = allBooks.filter(
            (item) => item.name === foundBook.name && item.id !== foundBook.id
          );

          // Filter books by both category and name
          const byCategoryAndName = allBooks.filter(
            (item) =>
              item.category === foundBook.category &&
              item.name === foundBook.name &&
              item.id !== foundBook.id
          );

          setCategoryBooks(byCategory);
          setNameBooks(byName);
          setCategoryNameBooks(byCategoryAndName);
        }
      } catch (error) {
        console.error("Error fetching book data:", error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found.</div>;
  }

  return (
    <>
      <Navbar />
      
      <div>
      {/* Book Details */}
      <div className="container px-5 mt-14 pb-4 mx-auto sm:py-24">
        <div className="flex flex-wrap items-center mx-auto lg:max-w-5xl">
          <img
            alt={book.title}
            className="object-cover object-center w-full rounded h-1/2 lg:w-1/4"
            src={book.image}
          />
          <div className="w-full mt-6 lg:w-2/3 lg:pl-10 lg:py-6 lg:mt-0">
            <h2 className="relative text-sm tracking-widest text-slate-500 title-font">
              {book.name}
            </h2>
            <h1 className="mb-1 text-3xl font-medium text-slate-800 title-font">
              {book.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-xs mr-3 font-semibold px-2.5 py-0.5 rounded bg-cyan-900 bg-opacity-80 text-slate-100">
                  {book.rating}
                </span>
                |<span className="ml-3 text-gray-600">{book.pages} Pages</span>
              </span>
            </div>
            <p className="leading-relaxed">{book.description}</p>
            <div className="flex items-baseline my-4 mt-16">
              <span className="text-2xl before:mr-1 before:content-['₹'] font-medium text-slate-800 title-font">
                {book.price - book.discount}
              </span>
              <span className="text-md ml-2 before:mr-1 line-through before:content-['₹'] font-medium text-gray-500 title-font">
                {book.price}
              </span>
              <button
                className="px-4 py-2 text-white bg-teal-600 rounded-md ml-8 w-full hover:bg-teal-700 focus:outline-none"
                onClick={() => setRentModalOpen(true)}
              >
                Rent
              </button>
              <Link to="/Buy" className="text-center px-4 py-2 text-white bg-teal-600 rounded-md ml-8 w-full hover:bg-teal-700 focus:outline-none">
                <button>Buy Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rent Modal */}
      {rentModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Rent Book</h2>
            <p className="text-gray-600 mb-4">
              Select the number of days you want to rent the book for it's been 20 % of Book's price:
            </p>
            <input
              type="number"
              min="1"
              className="w-full p-2 border rounded"
              value={rentalDays}
              onChange={handleRentalDaysChange}
            />
            <div className="mt-4">
              <p className="text-gray-700">
                Rental Price for {rentalDays} day(s):{" "}
                <span className="font-bold text-teal-600">
                  ₹{rentalPrice}
                </span>
              </p>
            </div>
            <div className="mt-6 flex justify-between">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={() => setRentModalOpen(false)}
              >
                Cancel
              </button>
              <Link to="/Buy" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700">
              <button >
                Confirm Rental
              </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>

      {/* Sections */}
      {[
        { title: "Similar Books in Category", books: categoryBooks },
        { title: `Books by Author: ${book.name}`, books: nameBooks },
        { title: "Books in Category and by Author", books: categoryNameBooks },
      ].map((section, index) => (
        <div key={index} className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
          <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl md:text-4xl p-6">
              {section.title}
              <span className="text-teal-600"> Here !!!</span>
            </h1>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
            {section.books.length > 0 ? (
              section.books.map((item) => (
                <div
                  key={item.id}
                  onClick={() => navigate(`/BookDescription/${item.id}`)}
                  className="p-4 border rounded-md cursor-pointer hover:shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded"
                  />
                  <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">{item.category}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No books found in this section.</p>
            )}
          </div>
        </div>
      ))}

      <Footer />
    </>
  );
}

export default BookDescription;
