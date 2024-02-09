import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OtherMagazine from "./components/OtherMagazines";
import "./styles/Main.css";
import "./styles/OtherMagazines.css";
import Footer from "./components/Footer";
import "./styles/Footer.css";
import App from "./components/App"


function Main() {
  return (
    <>
      <App />
      <OtherMagazine />
      <Footer />
    </>
  );
}

export default Main;




    // <Router>
    //   <Routes>
    //     <Route path="/" element={<OtherMagazine />} />
    //   </Routes>
    //   <Footer />
    // </Router>