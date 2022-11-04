import Homepage from "./homepage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./contactpage";
import Footer from "./footer";

const App = () => {
  return (
    <div className="pages">
      <Routes>
        <Route path="/Project2-HNG9" element={<Homepage />} />
        <Route path="/Project2-HNG9/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
