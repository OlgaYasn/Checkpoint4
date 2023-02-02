import React from "react";
import PropTypes from "prop-types";

function PageBox({ pages, setPages }) {
  return (
    <div className="pages_box">
      <div className="pages_titleblock">
        <h2 className="pages_title"> Nombre des pages</h2>
      </div>
      <div className="pages_body">
        <label htmlFor="pages"> </label>
        <input
          type="range"
          min="0"
          max="1000"
          value={pages}
          onChange={(e) => setPages(Number(e.target.value))}
        />{" "}
        <h3>
          {" "}
          <span>Nombre des pages </span>
          <span>{pages} </span>
        </h3>
      </div>
    </div>
  );
}

export default PageBox;

PageBox.propTypes = {
  pages: PropTypes.number.isRequired,
  setPages: PropTypes.number.isRequired,
};
