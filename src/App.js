import React, { useState } from "react";
import SpiritTable from "./components/tables/SpiritTable";
import AddSpiritForm from "./components/forms/SpiritForm";
import "./App.css";

function App() {
  const spiritData = [{ id: null, name: "", country: "", type: "" }];
  const [spirits, setSpirits] = useState(spiritData);
  const [lastId, setLastId] = useState(0);
  const addSpirit = (spirit) => {
    setSpirits([...spirits, spirit]);
    setLastId(lastId + 1);
  };

  return (
    <div className="container">
      <h1>Spirit App</h1>
      <div className="inner">
        <h2>Add Spirit</h2>
        <AddSpiritForm addSpirit={addSpirit} lastId={lastId} />
        <h2>View Spirit</h2>
        <SpiritTable spirits={spirits} />
      </div>
    </div>
  );
}

export default App;
