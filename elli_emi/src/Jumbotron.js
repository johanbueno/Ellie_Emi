import React from "react";
import Main from "./img/Main.jpeg";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <img id="main" alt="main" src={Main} />
    </div>
  );
}

export default Jumbotron;
