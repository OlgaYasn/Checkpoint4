import React from "react";
import PropTypes from "prop-types";
import ImgCard from "./ImgCard";

function Bookcard({ book }) {
  return (
    <div>
      <h2>{book.title}</h2>
      <h3>
        by {book.authorfirstname} {book.authorlastname}
      </h3>
      <h3>{book.description}</h3>
      <h3>Genre: {book.type}</h3>
      <h3>Number of pages: {book.pages}</h3>
      <h3>Condition: {book.condition}</h3>
      <h3>
        Owner: {book.firstname} {book.lastname}
      </h3>
      <div>
        <ImgCard image={book.image} />
      </div>
    </div>
  );
}
Bookcard.propTypes = {
  book: PropTypes.string.isRequired,
};
export default Bookcard;
