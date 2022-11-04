import Homepage from "./homepage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./contactpage";
import Footer from "./footer";

const App = () => {
  return (
    <div className="pages">
      <Homepage />
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
