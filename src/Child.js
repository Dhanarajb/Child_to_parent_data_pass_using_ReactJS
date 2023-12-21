import React from "react";
import "./styles.css";

function Child({ handleData }) {
  return (
    <div className="App">
      <button onClick={() => handleData("I am Fine")}>Send</button>
    </div>
  );
}
export default Child;
