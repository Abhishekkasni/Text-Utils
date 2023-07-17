import React, { useState } from "react";

export default function TextArea(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let copyText = document.getElementById("myBox");

    copyText.select();
  
    navigator.clipboard.writeText(copyText.value);
  };
  const handleClear=()=>{
    setText("");
  }
  const handleExtraSpaces=()=>{
    var string = text
    var regexPattern = /\s+/g
    var ans = string.replace(regexPattern, " ")
    setText(ans)
  }

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.heading}</h1>
          </label>
          <textarea
            className="form-control"
            id="myBox"
            rows={8}
            value={text}
            onChange={handleOnChange}
          />
          <button
            type="button"
            className="btn btn-primary my-3"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            className="btn btn-primary my-3 mx-2"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>
            Clear Text
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h2>Your text summary</h2>
        <p>
          <u>{text.split(" ").length}</u> world and <u>{text.length}</u>{" "}
          characters
        </p>
        <p>
          <u>{0.008 * text.split(" ").length}</u> minute read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
