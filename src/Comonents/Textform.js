import React from "react";
import { useState } from "react";

export default function Textform({ heading }) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    // console.log("upper case is clicked")

    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  return (
    <>
      <div>
        <h1>{heading.heading1}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
          <br />
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to UPPERCASE
          </button>
        </div>
      </div>
    </>
  );
}
