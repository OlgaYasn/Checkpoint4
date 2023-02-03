import { React, useState } from "react";
import PropTypes from "prop-types";
import ImgCard from "./ImgCard";
import { DeleteBook } from "../../utils/deleteBook";
import { GetAllBooks } from "../../utils/getAllBooks";
import FicheBookUpdate from "./FicheBookUpdate";
import "../styles/Bookcard.css";

function Bookcard({ book, setBooks }) {
  const [showFicheUpdate, setShowFicheUpdate] = useState(false);
  const listAllBooks = async () => {
    setBooks(await GetAllBooks());
  };

  const handleClick = () => {
    DeleteBook(book.id)
      .then(() => listAllBooks())
      .catch((err) => console.warn(err));
  };

  const handleOpen = () => {
    setShowFicheUpdate(!showFicheUpdate);
  };

  return (
    <div className="book_card">
      <div className="bookcover">
        <ImgCard image={book.image} />
      </div>
      <div className="book_information">
        <div className="modify_delete_buttons">
          <button
            type="button"
            className="button_book_modify"
            onClick={handleOpen}
          >
            {" "}
            Modifier
          </button>
          <button
            type="button"
            className="button_book_delete"
            onClick={handleClick}
          >
            {" "}
            Supprimer
          </button>
        </div>
        <h2 className="bookcard_title">{book.title}</h2>
        <h3 className="bookcard_author">
          by {book.authorfirstname} {book.authorlastname}
        </h3>
        <div className="book_properties">
          <p>{book.description}</p>
          <div className="other_properties">
            <p>
              <span className="other_properties_title">Genre: </span>{" "}
              {book.type}
            </p>
            <p>
              <span className="other_properties_title">Number of pages: </span>{" "}
              {book.pages} pages
            </p>
            <p>
              <span className="other_properties_title">Condition: </span>
              {book.condition}
            </p>
            <p>
              <span className="other_properties_title">Owner:</span>{" "}
              {book.firstname} {book.lastname}
            </p>
          </div>
        </div>
        <div className="book_card_button_container">
          <button type="button" className="book_card_button">
            Book this book
          </button>
        </div>
      </div>
      {showFicheUpdate && (
        <FicheBookUpdate
          book={book}
          showFicheUpdate={showFicheUpdate}
          setShowFicheUpdate={setShowFicheUpdate}
        />
      )}
    </div>
  );
}
Bookcard.propTypes = {
  book: PropTypes.string.isRequired,
  setBooks: PropTypes.func.isRequired,
};
export default Bookcard;
