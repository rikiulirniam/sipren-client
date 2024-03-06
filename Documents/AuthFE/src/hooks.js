import axios from "axios";
import { AuthContext } from "./Auth";
import { useContext } from "react";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAxios = () => {
  const token = localStorage.getItem("token") ?? "";
  axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1",
    headers: { Authorization: "Bearer" + token },
  });
};
