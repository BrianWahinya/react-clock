import { useState } from "react";
import { Analog, CustomDate, Digital, Footer } from "./components";

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
      <Footer />
    </>
  );
}

export default App;
