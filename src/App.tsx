import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryPage from "./pages/CountryPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:alpha3Code" element={<CountryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
