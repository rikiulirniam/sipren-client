import { useState } from "react";
import { useAuth, useAxios } from "../hooks";

function Login() {
  const auth = useAuth();
  const axios = useAxios();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        auth.setUser(res.user);
        console.log(res.data);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </>
  );
}
export default Login;
