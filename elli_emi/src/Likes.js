import React, { useState } from "react";

function Display(props) {
  return <span> {props.likes}</span>;
}

function Button(props) {
  return (
    <button onClick={props.onClickFunction}>
      <span role="img">❤️</span>
    </button>
  );
}

function Likes() {
  // counter the initial value of 0, setCounter is the new Change for counter
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter + 1);
  return (
    <>
      <span>
        <Button onClickFunction={incrementCounter} />
      </span>
      <Display likes={counter} />
    </>
  );
}
export default Likes;
