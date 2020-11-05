import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        placeholder="finding bows type here...."
      />

      {inputText}
    </>
  );
};
export default InputElement;
