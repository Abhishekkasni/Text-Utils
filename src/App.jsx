import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
    else{
      setMode("dark")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
    }
  }
  const [mode,setMode]=useState('light') //dark mode enabled or not!
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextArea heading="Enter text below to analyse👇" mode={mode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;
