import React, { useState } from "react";

export default function Textform(props) {
  const [text1, setText1] = useState("Heading");
  const [text, setText] = useState("");

  const [textareacolor, settextareacolor] = useState("gray");
  const f1textareacolor = () => {
    settextareacolor("red");
  };
  const f2textareacolor = () => {
    settextareacolor("green");
  };
  const f3textareacolor = () => {
    settextareacolor("yellow");
  };

  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase", "success");
  };
  const handleLowClick = () => {
    let newText1 = text.toLowerCase();
    setText(newText1);
    props.showAlert("Converted to LowerCase", "success");
  };
  const handleclearClick = () => {
    let newText1 = "";
    setText(newText1);
    props.showAlert("Texts are removerd", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  }
  
  const handlecExtraSpaces = () => {
    let newText = text.split(/ +/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  const handleonchange1 = (event) => {
    setText1(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "rgb(38, 134, 212)" : "black" }}
      >
        <h1>{props.head}</h1>
        <div className="mb-3">
          <div className="container">
            <textarea
              className="form-control"
              value={text1}
              style={{
                backgroundColor: props.mode === "dark" ? "rgb(38, 134, 212)" : "gray",
              }}
              onChange={handleonchange1}
              id="etextbox1"
            ></textarea>
            <div className="button-container">
              <button
                onClick={f1textareacolor}
                style={{
                  backgroundColor: "red",
                  borderRadius: "50%",
                  color: "black",
                  borderBlockColor: "black",
                }}
              >
                Red
              </button>
              <button
                onClick={f2textareacolor}
                style={{
                  backgroundColor: "green",
                  borderRadius: "50%",
                  color: "black",
                  borderBlockColor: "black",
                }}
              >
                Green
              </button>
              <button
                onClick={f3textareacolor}
                style={{
                  backgroundColor: "yellow",
                  borderRadius: "50%",
                  color: "black",
                  borderBlockColor: "black",
                }}
              >
                Yellow
              </button>
            </div>
          </div>

          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{ backgroundColor: textareacolor }}
            id="etextbox"
            rows="8"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-primary mx-1" onClick={handleupclick}>
            UpperCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleLowClick}>
            LowerCase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleclearClick}>
            Clear
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handlecExtraSpaces}>
            Remove Extra space
          </button>
        </div>
      </div>
      <div
        className="sum my-3"
        style={{ color: props.mode === "dark" ? "pink" : "black" }}
      >
        <h2>{text1}</h2>
        <p>{text}</p>
        <h3>Tour text has</h3>
        {text.split(/\s+/ ).filter((element)=>{return element.length!==0  }).length} Points and {text.split(" ").length} words
        <br />
        {0.08 * text.split(" ").length} Minutes to read
      </div>
    </>
  );
}
