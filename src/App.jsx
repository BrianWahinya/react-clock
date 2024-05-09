import { Layout } from "./layout";
import { Footer } from "./components";
import { Cursor } from "react-custom-cursors";
import "react-custom-cursors/dist/index.css";
import "./App.css";
import { MainProvider } from "./context/MainContext";

function App() {
  return (
    <>
      {/* <Cursor
        animation="beat"
        color="#898989"
        dotColor="#272727"
        hasCursor
        hasDot
        isHollow
        mixBlendMode
        size="sm"
      /> */}
      <code>Still in development-stages.. be patient 😉</code>
      <MainProvider>
        <Layout />
        <Footer />
      </MainProvider>
    </>
  );
}

export default App;
