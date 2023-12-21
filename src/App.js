import React, { useState } from "react";
import "./styles.css";
import Child from "./Child";

function App() {
  const [data, setData] = useState("Hi, How are you?");

  const handleData = (msg) => {
    setData(msg);
  };
  return (
    <div className="App">
      {data}
      <Child handleData={handleData} />
    </div>
  );
}
export default App;
