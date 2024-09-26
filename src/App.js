import "./App.css";

import Navbar from "./Comonents/Navbar";
import Textform from "./Comonents/Textform";

function App() {
  return (
    <>
      <Navbar link={{ link1: "TextUtils", link2: "Home", link3: "About" }} />

      <div className="container my-3">
        <Textform heading={{ heading1: "Enter Your Text To Analyze Below" }} />
      </div>
    </>
  );
}

export default App;
