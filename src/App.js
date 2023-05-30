import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const [mode, setMode] = useState("dark"); //whether dark mode is enabled or not

  const mode = "dark";

  const [alert, setAlert] = useState(null);

  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2300);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-blue-800");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    // if (mode === "success-subtle") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#101e40";
    // showalert("Dark mode has been enabled", "Success");
    // document.title = "TextUtils- Dark Mode";
    // setInterval(() => {
    //   document.title = "TextUtils is Amazing";
    // }, 2000);
    // setInterval(() => {
    // document.title = "Install TextUtils now";
    // }, 1500);
    // }
    //     else {
    //   setMode("success-subtle");
    //   document.body.style.backgroundColor = "white";
    //   // showalert("Light mode has been enabled", "Success");
    //   // document.title = "TextUtils- Light Mode";
    // }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />

            <Route
              exact
              path="/"
              element={
                <Textform
                  showalert={showalert}
                  heading="Try TextUtils- word counter,character counter,remove extra spaces "
                  // mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
