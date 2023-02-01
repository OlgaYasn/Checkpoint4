import { React, useState, useEffect } from "react";
import Filter from "../components/Filter";
import Bookcard from "../components/Bookcard";
import { GetAllBooks } from "../../utils/getAllBooks";
import "../styles/FindYourBook.css";

function FindYourBook() {
  const [books, setBooks] = useState([]);

  const listAllBooks = async () => {
    setBooks(await GetAllBooks());
  };

  useEffect(() => {
    listAllBooks();
  }, []);

  return (
    <div className="findbook_page">
      <div className="filters">
        <Filter />
      </div>
      <div>
        <h2> Let's find a perfect match </h2>

        <div>
          {books.map((book) => (
            <Bookcard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FindYourBook;
