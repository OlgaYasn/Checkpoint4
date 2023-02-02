import { React, useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
import StateFilter from "../components/StateFilter";
import Bookcard from "../components/Bookcard";
import PageBox from "../components/PageBox";
import { GetAllBooks } from "../../utils/getAllBooks";
import "../styles/FindYourBook.css";

function FindYourBook() {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState(0);

  const listAllBooks = async () => {
    setBooks(await GetAllBooks());
  };

  useEffect(() => {
    listAllBooks();
  }, []);

  return (
    <div className="findbook_page">
      <div className="filters">
        <CategoryFilter />
        <StateFilter />
        <PageBox pages={pages} setPages={setPages} />
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
