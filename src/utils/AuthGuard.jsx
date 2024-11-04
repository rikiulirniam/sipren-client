import { Navigate } from "react-router-dom";
import { useAuth } from "./Provider";
import { useEffect } from "react";

export const AuthGuard = ({ children }) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};
