import { Analog, Calendar, Digital, Footer } from "./components";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import "./App.css";

function App() {
  return (
    <>
      <Cursor
        animation="beat"
        color="#898989"
        dotColor="#272727"
        hasCursor
        hasDot
        isHollow
        mixBlendMode
        size="sm"
      />
      <Analog />
      <Digital />
      <Calendar />
      <Footer />
    </>
  );
}

export default App;
