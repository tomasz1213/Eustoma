import React from "react";

const SelectBox = (props) => (
  <div style={{ margin: "5px", cursor: "pointer" }} onClick={props.clicked}>
    {props.req ? (
      <input
        value={props.value}
        id={props.value}
        type="checkbox"
        defaultChecked
      />
    ) : (
      <input
        value={props.value}
        id={props.value}
        style={{ cursor: "pointer" }}
        type="checkbox"
      />
    )}
    <label
      style={{
        fontSize: "13px",
        fontWeight: "bold",
        paddingLeft: "2px",
        cursor: "pointer",
      }}
    >
      {props.value}
    </label>
  </div>
);
export default SelectBox;
