import React from "react";

function Filter() {
  return (
    <div className="publication_date_box">
      <div className="date_titleblock">
        <h2 className="date_title"> Genre</h2>
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
