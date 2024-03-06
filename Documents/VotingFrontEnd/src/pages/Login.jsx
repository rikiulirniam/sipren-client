import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAxios, useAuth } from "../hooks";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Alert from "../shared/Alert";

// import Button from "../components/Button";

function Login() {
  const auth = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({});

    axios
      .post("auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        auth.setUser(res.data);
        return navigate("/");
      })
      .catch((err) => {
        setAlert({ color: "danger", message: err.response.data.message });
      });
  };
  
  return (
    <>
      {/* <Navbar /> */}
      <div className="container d-flex flex-column justify-content-center align-items-center py-3">
        <div className="formLogin border position-absolute ">
          <h1 className="heading-login px-5 py-3 fw-bold">Login Page</h1>
          <form onSubmit={handleSubmit} className="p-5 d-flex flex-column">
            <div className="input-login d-flex justify-content-between align-items-center my-2">
              <label className="mx-5" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=""
                placeholder="email.."
              />
            </div>
            <div className="input-login d-flex justify-content-between align-items-center my-2">
              <label className="mx-5" htmlFor="pass">
                Password
              </label>
              <input
                id="pass"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=""
                placeholder="password.."
              />
            </div>
            {alert.message && <Alert {...alert} />}

            <button className="btn btn-danger align-self-end  px-4 py-2 mx-5 my-2">
              Login
            </button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
export default Login;
