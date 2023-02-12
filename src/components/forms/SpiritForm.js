import React, { useState } from "react";
import SpiritTypes from "../controls/SpiritTypes";
import "./SpiritForm.css";

const SpiritForm = (props) => {
  const initialSpirit = { id: null, name: "", country: "", type: "" };
  const [spirit, setSpirit] = useState(initialSpirit);
  const setSelected = (selected) => {
    setSpirit({ ...spirit, type: selected });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSpirit({ ...spirit, [name]: value });
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();
    if (!spirit.name || !spirit.country || !spirit.type) return;
    spirit.id = props.lastId;
    props.addSpirit(spirit);
    setSpirit({ ...initialSpirit });
  };

  return (
    <form onSubmit={handleSubmitForm} className="form-container">
      <label>Name</label>
      <input
        type="text"
        name="name"
        className="input-text form-control"
        onChange={handleInputChange}
        value={spirit.name}
      />
      <label>Country</label>
      <input
        type="text"
        name="country"
        className="input-text form-control"
        onChange={handleInputChange}
        value={spirit.country}
      />
      <label>Type</label>
      <SpiritTypes setSelected={setSelected} />
      <button className="add-button btn btn-primary">Add New Spirit</button>
    </form>
  );
};

export default SpiritForm;
