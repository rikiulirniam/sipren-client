import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Unpresensied from "./components/presensi/data/Unpresensied.jsx";
import Login from "./pages/Auth/Login.jsx";
import Guru from "./pages/Guru/Guru.jsx";
import TimeComponent from "./Temp.jsx";
import Presensi from "./pages/Presensi/Presensi.jsx";
import { DataPresensi } from "./pages/Presensi/Data.jsx";
import { AuthProvider } from "./utils/AuthProvider.jsx";
import { DataUser } from "./pages/Auth/DataUser.jsx";
import { Kelas } from "./pages/Kelas/Kelas.jsx";
import { EditDataUser } from "./pages/Auth/EditDataUser.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Guru />} />
          <Route path="/presensi" element={<Presensi />} />
          <Route path="/kelas" element={<Kelas />} />
          <Route path="/data_presensi" element={<DataPresensi />} />
          <Route path="/data_user" element={<DataUser />} />
          <Route path="/data_user/update/:id" element={<EditDataUser />} />
          <Route path="/unpre" element={<Unpresensied />} />
          <Route path="/unpre" element={<Unpresensied />} />
          <Route path="/temp" element={<TimeComponent />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
