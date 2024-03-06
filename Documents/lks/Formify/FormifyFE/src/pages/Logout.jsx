import { useNavigate } from "react-router-dom";
import { useAuth, useAxios } from "../hooks";
import { useEffect } from "react";

function Logout() {
  const auth = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    auth.setUser(undefined);
    localStorage.removeItem("token");
    axios
      .post("auth/logout")
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <></>;
}
export default Logout;
