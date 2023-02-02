import { React, useState, useEffect } from "react";
import { GetAllStates } from "../../utils/getAllStates";
import "../styles/Filter.css";

function Filter() {
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
        <h2 className="filtre_title"> Choose the state</h2>
      </div>
      <div className="date_body">
        <form>
          <fieldset>
            <input
              className="input_state"
              type="radio"
              id="0"
              name="state_filter"
              value="0"
            />
            <label htmlFor="0">Tous</label>
            {states.map((state) => (
              <div>
                <input
                  className="input_state"
                  type="radio"
                  id={state.id}
                  name="state_filter"
                  value={state.id}
                />
                <label htmlFor={state.id}>{state.condition}</label>
              </div>
            ))}
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Filter;
