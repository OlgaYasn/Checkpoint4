import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GetAllCategories } from "../../utils/getAllCategories";
import "../styles/Filter.css";

function CategoryFilter({ setFilterBook }) {
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
        <h4 className="filtre_title"> Choose your category</h4>
      </div>
      <div className="filtre_body">
        <form>
          <fieldset>
            <input
              className="input_category"
              type="radio"
              id="0"
              name="category_id"
              value="0"
              onChange={(e) => setFilterBook(e.target.id)}
            />
            <label className="input_label_category" htmlFor="0">
              All
            </label>
            {categories.map((category) => (
              <div>
                <input
                  className="input_category"
                  type="radio"
                  id={category.id}
                  name="category_id"
                  value={category.id}
                  onChange={(e) => setFilterBook(e.target.id)}
                />
                <label className="input_label_category" htmlFor={category.id}>
                  {category.type}
                </label>
              </div>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
CategoryFilter.propTypes = {
  setFilterBook: PropTypes.func.isRequired,
};
export default CategoryFilter;
