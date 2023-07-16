import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container my-3">
        <TextArea heading="Enter text below to analyse👇"/>
      </div>
    </>
  );
}

export default App;
