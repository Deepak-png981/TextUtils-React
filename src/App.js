import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been activated", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been activated", "success");
    }
  }
  return (
    <>
     {/* <Router> */}
      <Navbar toggleMode={toggleMode} mode={mode} title="TextUtils" aboutText="About Us" />
      <Alert alert={alert} />
      <div className="container">
        {/* studing routes here */}
            {/* <Routes> */}
              {/* <Route exact path="/about" element={<About/>} /> */}
              {/* <Route exact path="/" element={<Textform showAlert = {showAlert} mode={mode} heading = "Enter the text to analyze"/>} /> */}
            {/* </Routes> */}


        <Textform showAlert = {showAlert} mode={mode} heading = "Enter the text to analyze"/>
        {/* <About /> */}
      </div>
       {/* </Router> */}
      </>
  );
}

export default App;
