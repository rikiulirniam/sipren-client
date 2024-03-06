import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import { AuthGuard } from "../Auth";
import axios from "axios";
import { useAuth } from "../hooks";

function Dashboard() {
  const auth = useAuth();
  const [forms, setForms] = useState("You dont have froms created yet");

  useEffect(() => {
    axios
      .get("/forms?token=" + auth.user?.token)
      .then((res) => {
        setForms(res.data.forms);
      })
      .catch((err) => {
        console.log(err);
        console.log("Mamah tolong");
      });
  });

  return (
    <AuthGuard>
      <Navbar />
      <div className="container vh-100 py-3">
        <h1>Dashboard</h1>
        <hr />
        <div>{forms.name}</div>
      </div>
      {/* <Footer /> */}
    </AuthGuard>
  );
}
export default Dashboard;
