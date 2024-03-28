import { useState } from "react";
import { Analog, CustomDate, Digital } from "./components";

import "./App.css";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle ? <Analog /> : <Digital />}

      <CustomDate />
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Digital" : "Analog"}
      </button>
      <div className="footer">
        <span>{new Date().getFullYear()} &copy;</span>
        <a href="https://brianwebportal.netlify.app" target="_blank">
          {" "}
          Brian Wahinya{" "}
        </a>
      </div>
    </>
  );
}

export default App;
