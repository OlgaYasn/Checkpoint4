import PropTypes from "prop-types";
import React from "react";
import "../styles/ImgCard.css";

function ImgCard({ image }) {
  return (
    <div className="">
      <img
        src={`http://localhost:5000/assets/images/${image}`}
        alt="book cover"
        className="bookcover_image"
      />
    </div>
  );
}

ImgCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImgCard;
