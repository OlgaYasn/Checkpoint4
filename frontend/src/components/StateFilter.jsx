import { React, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GetAllStates } from "../../utils/getAllStates";
import "../styles/Filter.css";

function StateFilter({ setFilterState }) {
  const [states, setStates] = useState([]);

  const listAllStates = async () => {
    setStates(await GetAllStates());
  };
  useEffect(() => {
    listAllStates();
  }, []);
  return (
    <div className="filter_box">
      <div className="filter_titleblock">
        <h4 className="filtre_title"> Choose the state</h4>
      </div>
      <div className="filter_body">
        <form>
          <fieldset>
            <input
              className="input_category"
              type="radio"
              id="0"
              name="state_id"
              value="0"
              onChange={(e) => setFilterState(e.target.id)}
            />
            <label className="input_label" htmlFor="0">
              All
            </label>
            {states.map((state) => (
              <div>
                <input
                  className="input_category"
                  type="radio"
                  id={state.id}
                  name="state_id"
                  value={state.id}
                  onChange={(e) => setFilterState(e.target.id)}
                />
                <label className="input_label" htmlFor={state.id}>
                  {state.condition}
                </label>
              </div>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
}
StateFilter.propTypes = {
  setFilterState: PropTypes.func.isRequired,
};

export default StateFilter;
