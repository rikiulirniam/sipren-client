import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Auth";
import Login from "./page/Login";
import Dashboard from "./page/Dashboard";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
