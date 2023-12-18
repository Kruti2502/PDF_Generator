import React from "react";
import "./App.css";
import ListOfPdfs from "./components/ListOfPdfs";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CreatePdf from "./components/CreatePdf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listofpdfs" element={<ListOfPdfs />} />
      <Route path="/createpdf" element={<CreatePdf />} />
    </Routes>
  );
}

export default App;
