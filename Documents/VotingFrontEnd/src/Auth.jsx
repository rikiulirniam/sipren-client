import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import App from "./App";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function AuthGuard({ children }) {
  const auth = useContext(AuthContext);
  if (!auth.user) return <Navigate to="/login" />;
  return <>{children}</>;
}
