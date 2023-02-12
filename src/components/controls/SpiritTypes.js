import React, { useState } from "react";
import "./SpiritTypes.css";

const SpiritTypes = (props) => {
  const [selectedSpirit, setSelectedSpirit] = useState("");
  const handleSelect = (event) => {
    event.preventDefault();
    setSelectedSpirit(event.target.value);
    props.setSelected(event.target.value);
  };

  return (
    <select
      className="type-select form-select"
      value={selectedSpirit}
      onChange={handleSelect}
    >
      <option value="">Please Select Type</option>
      <option value="whiskey">Whiskey</option>
      <option value="beer">Beer</option>
      <option value="brandy">Brandy</option>
      <option value="gin">Gin</option>
    </select>
  );
};

export default SpiritTypes;
