import { React, useState, useEffect } from "react";
import CategoryFilter from "../components/CategoryFilter";
// import StateFilter from "../components/StateFilter";
import Bookcard from "../components/Bookcard";
import PageBox from "../components/PageBox";
import FicheBook from "../components/FicheBook";
import { GetAllBooks } from "../../utils/getAllBooks";
import "../styles/FindYourBook.css";

function FindYourBook() {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState(0);
  const [filterBook, setFilterBook] = useState("0");
  const [showFiche, setShowFiche] = useState(false);
  // const [filterState, setFilterState] = useState("0");

  const listAllBooks = async () => {
    setBooks(await GetAllBooks());
  };

  const handleClick = () => {
    setShowFiche(!showFiche);
  };

  useEffect(() => {
    listAllBooks();
  }, []);

  return (
    <div className="findbook_page">
      <div className="filters">
        <CategoryFilter setFilterBook={setFilterBook} />
        {/* <StateFilter setFilterState={setFilterState} /> */}
        <PageBox pages={pages} setPages={setPages} />
      </div>
      <div>
        <div className="add_book_button">
          <button type="button" onClick={handleClick}>
            Add new book
          </button>
        </div>
        <h2> Let's find a perfect match </h2>

        <div>
          {books
            .filter(
              (book) =>
                filterBook === "0" ||
                Number(book.category_id) === Number(filterBook)
            )
            .map((book) => (
              <Bookcard key={book.id} book={book} setBooks={setBooks} />
            ))}
        </div>
      </div>
      <FicheBook showFiche={showFiche} setShowFiche={setShowFiche} />
    </div>
  );
}

export default FindYourBook;
