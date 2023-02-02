import React from "react";
import PropTypes from "prop-types";
import "../styles/PageBox.css";

function PageBox({ pages, setPages }) {
  return (
    <div className="pages_box">
      <div className="pages_titleblock">
        <h4 className="pages_title"> Number of pages</h4>
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
          <span>Number : </span>
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
