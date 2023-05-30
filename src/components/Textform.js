import React, { useState } from "react";
// import Select from 'react-select';

export default function TextForm(props) {
  const handleUpClick = () => {
    if (text !== undefined) {
      let newText = text.toUpperCase();
      setText(newText);
      props.showalert("Converted to uppercase!", "Success");
    }
  };
  // const handleUpClick = () => {
  //   let newText = text.toUpperCase();
  //   setText(newText);
  //   props.showalert("Converted to uppercase!", "Success");
  // };

  const handleLoClick = () => {
    if (text !== undefined) {
      let newText = text.toLowerCase();
      setText(newText);
      props.showalert("Converted to lowercase!", "Success");
    }
  };

  const handleClearClick = () => {
    if (text !== undefined) {
      let newText = "";
      setText(newText);
      props.showalert("Clear Text!", "Successfully");
    }
  };

  const handleSpaceClick = () => {
    if (text !== undefined) {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showalert("Remove Extra Space!", "Successfully");
    }
  };

  // Below some method copy of text...

  // const handleCopyClick = () => {
  //   const text = document.getElementById("mybox");
  //   navigator.clipboard.writeText(text.value);
  //     // .then(() => alert(text))
  //     // .catch((err) => console.error(`Error copying to clipboard: ${err}`));
  // };

  const handleCopyClick = () => {
    var text = document.getElementById("mybox");
    navigator.clipboard.writeText(text.value);
    props.showalert("Copy Text!", "Successfully");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState();
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-2"> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          // disabled={text.length === 0}
          className="btn btn-primary my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          // disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          // disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          // disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleSpaceClick}
        >
          Remove Extra Spaces
        </button>
        <button
          // disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text &&
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}
          words and {text && text.replace(/\s/g, "").length}
          characters
        </p>

        <p>
          {0.008 *
            text?.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}
          Minutes read
        </p>

        <h2>Preview</h2>

        <p>{text?.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
