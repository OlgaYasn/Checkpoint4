import { React, useState, useEffect } from "react";
import { GetAllCategories } from "../../utils/getAllCategories";
import "../styles/Filter.css";

function Filter() {
  const [categories, setCategories] = useState([]);

  const listAllCategories = async () => {
    setCategories(await GetAllCategories());
  };
  useEffect(() => {
    listAllCategories();
  }, []);
  return (
    <div className="filter_box">
      <div className="filter_titleblock">
        <h2 className="filtre_title"> Choose your category</h2>
      </div>
      <div className="date_body">
        <form>
          <fieldset>
            <input
              className="input_category"
              type="radio"
              id="0"
              name="category_filter"
              value="0"
            />
            <label htmlFor="0">Tous</label>
            {categories.map((category) => (
              <div>
                <input
                  className="input_category"
                  type="radio"
                  id={category.id}
                  name="category_filter"
                  value={category.id}
                />
                <label htmlFor={category.id}>{category.type}</label>
              </div>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Filter;
