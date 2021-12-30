import { useState } from "react";
// import copy from 'copy-to-clipboard';
// import {CopyToClipboard} from 'react-copy-to-clipboard';

function TextForm(props) {
  const headleUpClick = () => {
    // console.log("Uppercase was clicked");
    // let newtext = text.toUpperCase();
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  // const copyToClip =()=>{
  //   let newText = CopyToClipboard.text;
  //   setText(newText);
  // }
  const headleLowClick = () => {
    // console.log("Uppercase was clicked");
    // let newtext = text.toUpperCase();
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  // const randomAct = () => {
  //   // console.log("Uppercase was clicked");
  //   // let newtext = text.toUpperCase();
  //   let newtext = text.replace('i','e');
  //   setText(newtext);
  // };
  const clearClick = () => {
    let newtext = "";
    setText(newtext);
  };
  const charAtClik = () => {
    let newtext = text.charAt("S");
    setText(newtext);
  };
  const handleOnChange = (event) => {
    // console.log("Uppercase was clicked");
    setText(event.target.value);
    // setText("you have clicked the ckeck !!");
  };
  const [text, setText] = useState("  ");
  // text = 'in the value '

  return (
    <>
      {/* <h1>Enter your text here</h1> */}
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="my-box"
            rows="9"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-2" onClick={headleUpClick}>
        Convert to uppercase Fast
      </button>
      <button className="btn btn-primary mx-2" onClick={headleLowClick}>
        Convert to Lowercase Fast
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={randomAct}>
        Convert to Accii 
      </button> */}
      <button className="btn btn-primary mx-2" onClick={charAtClik}>
        check first character of a txt
      </button>
      <button className="btn btn-primary mx-2" onClick={clearClick}>
        Clear
      </button>
      {/* <button className="btn btn-primary mx-2" onClick={copyToClip}>Copy to Clipboard</button> */}
      <div className="className">
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} words and length character {text.length}{" "}
          characters{" "}
        </p>
        <p>{0.008 * text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
