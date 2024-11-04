
import { createContext, useEffect, useState } from "react";
import { getDecryptedData, setEncryptedData } from "./Provider";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getDecryptedData("user")); // Inisialisasi user langsung dari localStorage
  useEffect(() => {
    const storedUser = getDecryptedData("user");
    if (storedUser) {
      setUser(storedUser); // Tidak perlu JSON.parse lagi jika storedUser sudah berupa object
    }
  }, []);

  useEffect(() => {
    if (!user) {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
