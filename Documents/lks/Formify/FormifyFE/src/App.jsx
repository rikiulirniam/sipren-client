import "./assets/bootstrap-5.3.1-dist/css/bootstrap.css";
import "./assets/custom.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./Auth";
import CreateForm from "./pages/CreateForm";
import DetailForms from "./pages/DetailForms";
import Logout from "./pages/Logout";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/create-form" element={<CreateForm />} />
          <Route path="/forms/:formSlug" element={<DetailForms />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
