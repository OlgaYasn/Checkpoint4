import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import close from "../assets/images/annuler.png";
import booklogo from "../assets/images/booklogo.svg";
import "../styles/FicheBook.css";

function FicheBookUpdate({ book, showFicheUpdate, setShowFicheUpdate }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [oneBook, setOneBook] = useState({});
  const [newBook, setNewBook] = useState({
    title: oneBook.title,
    pages: oneBook.pages,
    description: oneBook.description,
  });

  const updateBook = (e) => {
    e.preventDefault();
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}book/updatebook/${book.id}`,
        newBook
      )
      .then(() => navigate("/findyourbook"))
      .catch((err) => console.error(err));
  };

  const getBook = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/book/${book.id}`)
      .then((response) => setOneBook(response.data))
      .catch((err) => console.error(err));
  };

  const handleEdit = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    setShowFicheUpdate(!showFicheUpdate);
  };

  const showMessage = () => {
    setMessage(!message);
  };

  useEffect(() => {
    getBook();
  }, []);

  return (
    <div className="fiche_bookupdate_container">
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

        <form className="fiche_book_form" onSubmit={updateBook}>
          <div className="book_information_inputs">
            <div className="input_block">
              <input
                type="text"
                name="title"
                placeholder={`Title: ${oneBook.title}`}
                className="form_input_book"
                onChange={handleEdit}
              />
            </div>
            <div className="input_block">
              <input
                type="number"
                name="pages"
                placeholder={`Pages: ${oneBook.pages}`}
                className="form_input_book"
                onChange={handleEdit}
              />
            </div>
            <div className="input_block">
              <input
                type="text"
                name="description"
                placeholder={`Description: ${oneBook.description}`}
                className="form_input_book"
                onChange={handleEdit}
              />
            </div>
          </div>

          <div className="fiche_book_footer">
            {message && (
              <h3 className="popup_notification">
                {" "}
                This book was sucessfully updated{" "}
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
FicheBookUpdate.propTypes = {
  book: PropTypes.string.isRequired,
  showFicheUpdate: PropTypes.bool.isRequired,
  setShowFicheUpdate: PropTypes.func.isRequired,
};

export default FicheBookUpdate;
