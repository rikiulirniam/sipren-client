import { useContext } from "react";
import { AuthContext } from "./Auth";
import { ApiUrl } from "./api";
import axios from "axios";


export const useAuth = () => {
    return useContext(AuthContext);
}

export const useAxios = () => {
    return axios.create({baseURL: ApiUrl})
}