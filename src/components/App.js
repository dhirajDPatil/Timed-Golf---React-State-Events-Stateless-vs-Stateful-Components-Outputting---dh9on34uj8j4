import React, { useState } from "react";
import Ball from "./Ball";
import Hole from "./Hole";
import Timer from "./Timer";
import "../styles/App.css";

function App() {
  const [start, setStart] = useState(false);
  const [xyhole, setXYhole] = useState({
    left: "0px",
    top: "0px",
  });
  const clickHandler = () => {
    setStart(true);
  };

  const getStyle = (data) => {
    setXYhole(data);
  };

  return (
    <>
      {!start ? (
        <button className="start" onClick={clickHandler}>
          Start
        </button>
      ) : (
        <>
          <Ball getStyle={getStyle} />
          <Hole />
          <Timer ballXY={xyhole} />
        </>
      )}
    </>
  );
}

export default App;
