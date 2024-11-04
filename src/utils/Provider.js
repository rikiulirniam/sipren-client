import axios from "axios";
import CryptoJS from "crypto-js";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";

export const useAxios = () => {
  const api_url = import.meta.env.VITE_API_URL;
  const api_port = import.meta.env.VITE_API_PORT;
  const token = getDecryptedData("token");
  return axios.create({
    baseURL: `${api_url}:${api_port}`,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const SECRET_KEY = "sistempresensismkth"; // Ganti dengan kunci yang lebih kuat

export const setEncryptedData = (key, value) => {
  const encryptedData = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    SECRET_KEY
  ).toString();
  localStorage.setItem(key, encryptedData);
};

// Fungsi untuk mengambil dan mendekripsi data dari localStorage
export const getDecryptedData = (key) => {
  const encryptedData = localStorage.getItem(key);
  if (!encryptedData) return null;

  const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData ? JSON.parse(decryptedData) : null;
};

export function formatDate(date) {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return date.toLocaleDateString("id-ID", options);
}
export function formatDateTime(date) {
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return (
    date.toLocaleTimeString("id-ID", options)
  );
}
