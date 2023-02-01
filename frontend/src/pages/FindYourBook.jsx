import React from "react";
import Filter from "../components/Filter";
import Bookcard from "../components/Bookcard";

function FindYourBook() {
  return (
    <div>
      <h2> Let's find a perfect match </h2>
      <div className="filters">
        <Filter />
      </div>
      <div>
        {" "}
        <Bookcard />
      </div>
    </div>
  );
}

export default FindYourBook;
