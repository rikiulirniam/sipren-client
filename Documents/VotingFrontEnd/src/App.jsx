import "./assets/custom.css";
import "./assets/bootstrap/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { AuthProvider } from "./Auth";
import Logout from "./pages/Logout";
import Me from "./pages/Me";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/me" element={<Me />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
