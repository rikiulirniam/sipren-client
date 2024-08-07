import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Unpresensied from "./components/presensi/data/Unpresensied.jsx";
import Login from "./pages/Auth/Login.jsx";
import Guru from "./pages/Guru/Guru.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Guru />} />
        <Route path="/unpre" element={<Unpresensied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
