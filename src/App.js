import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Review from "./Components/Review";
import UpComing from "./Components/UpComing";
import "./CSS/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <UpComing />
        <Review />
      </BrowserRouter>
    </div>
  );
}

export default App;
