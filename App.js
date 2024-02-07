
import Navbar from "./Component/Navbar";
import Textform from "./Component/Textform";
import React, { useState } from "react";


import Alert from "./Component/Alert";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'turtle_text_darkmode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'turtle_text_lightmode';
    }
  };

  return (
    <>
   
          <Navbar title="Turtle Text" mode={mode} toggleMode={toggleMode} />
           <Alert alert={alert} />
       <Textform showAlert={showAlert} head="Enter your text to analyse" mode={mode} />
    
   </>
  );
}

export default App;
