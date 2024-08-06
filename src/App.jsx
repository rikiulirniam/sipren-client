import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Unpresensied from "./components/presensi/data/Unpresensied.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Unpresensied />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
