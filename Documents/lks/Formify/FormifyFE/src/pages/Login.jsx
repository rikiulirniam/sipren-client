import { useState } from "react";
import { useAuth, useAxios } from "../hooks";
import { useNavigate } from "react-router-dom";
import Alert from "../shared/Alert";

function Login() {
  const auth = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
        localStorage.setItem("token", res.data.user.accessToken);
        location.href = "/"
      })
      .catch((err) => {
        setAlert({ color: "danger", message: err.response.data.message });
      });
  };

  return (
    <>
      <div className="container">
        <div className="form-container bg-light rounded overflow-hidden">
          <h1 className=" p-4 px-5 bg-primary">Login Form</h1>
          <form
            className="form-login d-flex flex-column justify-content-center  py-5"
            onSubmit={handleSubmit}
          >
            <div className="input-login text-dark d-flex">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-login text-dark d-flex">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {alert.message && <Alert {...alert} />}
            <button
              type="submit"
              className="btn btn-primary align-self-end p-2 px-4 m-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
