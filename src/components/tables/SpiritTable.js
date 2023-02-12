import React from "react";

const SpiritTable = (props) => (
  <table className="table table-striped table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Country</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {props.spirits.length > 0 ? (
        props.spirits.map((spirit) => (
          <tr key={spirit.id}>
            <td>{spirit.name}</td>
            <td>{spirit.country}</td>
            <td>{spirit.type}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Spirits</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default SpiritTable;
