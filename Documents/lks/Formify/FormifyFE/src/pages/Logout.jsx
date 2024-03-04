import { useNavigate } from "react-router-dom";
import { useAxios } from "../hooks";
import { useEffect } from "react";

function Logout() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    auth.setUser();
    navigate('/login');
  }, []);
  return <></>
}
export default Logout;
