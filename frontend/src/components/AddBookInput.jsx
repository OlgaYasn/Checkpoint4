import PropTypes from "prop-types";
import React from "react";
import "../styles/AddBookInput.css";

function AddBookInput({
  id,
  label,
  type,
  name,
  placeholder,
  value,
  className,
  addNewBook,
  setAddNewBook,
}) {
  const handleChange = (e) => {
    setAddNewBook({
      ...addNewBook,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div key={id} className="input_block">
      <label htmlFor={name} className="input_label">
        {" "}
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
}

AddBookInput.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  addNewBook: PropTypes.func.isRequired,
  setAddNewBook: PropTypes.func.isRequired,
};

export default AddBookInput;
