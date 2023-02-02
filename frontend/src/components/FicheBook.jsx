import { React, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import AddBookInput from "./AddBookInput";
import dataFicheBook from "../../utils/dataFicheBook";
import booklogo from "../assets/images/booklogo.svg";
import close from "../assets/images/annuler.png";
import "../styles/FicheBook.css";

function FicheBook({ showFiche, setShowFiche }) {
  const [message, setMessage] = useState(false);
  const [addNewBook, setAddNewBook] = useState({
    title: null,
    pages: null,
    description: null,
  });

  const postbook = (event) => {
    event.preventDefault();
    if (
      addNewBook.title === null &&
      addNewBook.pages === null &&
      addNewBook.description === null
    ) {
      // eslint-disable-next-line no-alert
      alert("Please complete all the information");
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}book/createbook`, {
          title: addNewBook.title,
          pages: addNewBook.pages,
          description: addNewBook.description,
        })
        .then(() => {
          setAddNewBook({
            title: null,
            pages: null,
            description: null,
          });
        })
        .catch((err) => console.warn(err));
    }
  };

  const handleClick = () => {
    setShowFiche(!showFiche);
  };

  const showMessage = () => {
    setMessage(!message);
  };

  return (
    <div className="fiche_book_container">
      <div className="fiche_book_header">
        <h2> New book</h2>
        <div
          onClick={handleClick}
          onKeyDown={handleClick}
          role="button"
          tabIndex={0}
        >
          <img src={close} alt="close" className="close_fiche_book" />
        </div>
      </div>
      <div className="fiche_book_body">
        <div className="book_image_container">
          <img src={booklogo} alt="booklogo" className="book_logo_image" />
          <button type="button" className="button_change_image">
            {" "}
            Change picture{" "}
          </button>
        </div>

        <form className="fiche_book_form" onSubmit={postbook}>
          <div className="book_information_inputs">
            {dataFicheBook.map((data) => (
              <AddBookInput
                key={data.id}
                id={data.id}
                label={data.label}
                type={data.type}
                name={data.name}
                placeholder={data.placeholder}
                value={addNewBook[data.name] || ""}
                className={data.className}
                addNewBook={addNewBook}
                setAddNewBook={setAddNewBook}
              />
            ))}
          </div>

          <div className="fiche_book_footer">
            {message && (
              <h3 className="popup_notification">
                {" "}
                This book was sucessfully added{" "}
              </h3>
            )}
            <button
              type="submit"
              className="button_save_book"
              onClick={showMessage}
            >
              SAVE{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

FicheBook.propTypes = {
  showFiche: PropTypes.bool.isRequired,
  setShowFiche: PropTypes.func.isRequired,
};

export default FicheBook;
