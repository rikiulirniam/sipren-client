import { useContext, createContext, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();
export const AuthProvider = ({ child }) => {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {child}
    </AuthContext.Provider>
  );
};

export const AuthGuard = ({ child }) => {
  const auth = useContext(AuthContext);
  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return <>{child}</>;
};
