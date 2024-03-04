import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  function load() {
    const token = localStorage.getItem("token");

    axios
      .get("/auth/me", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthGuard = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};
