import { useState } from "react";
// import React {useState} from "react";

function TextForm(props) {
  const headleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    console.log("Uppercase was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter your tesxt here");

  return (
    <>
      {/* <h1>Enter your text here</h1> */}
      <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={headleUpClick}>
          Convert to uppercase
        </button>
      </div>
    </>
  );
}

export default TextForm;
