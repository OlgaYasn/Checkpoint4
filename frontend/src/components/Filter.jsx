import React from "react";
import "../styles/Filter.css";

function Filter() {
  return (
    <div className="filter_box">
      <div className="filter_titleblock">
        <h2 className="filtre_title"> Genre</h2>
      </div>
      {/* <div className="date_body">
        <fieldset>
          {xxx.map((date) => (
            <div>
              <input
                className="input_date"
                type="radio"
                id={yyy.id}
                name={yyy.name}
                value={yyy.value}
                onChange={(e) => handleDate(e)}
              />
              <label htmlFor={yyy.id}>{yyy.value}</label>
            </div>
          ))}
        </fieldset>
      </div> */}
    </div>
  );
}

export default Filter;
