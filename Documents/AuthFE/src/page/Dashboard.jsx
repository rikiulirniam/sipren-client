import { useEffect } from "react";
import { AuthGuard } from "../Auth";
import { useAxios } from "../hooks";

function Dashboard() {
  const axios = useAxios();

  axios.get("/");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <AuthGuard>
      <div>Dashboard</div>
    </AuthGuard>
  );
}
export default Dashboard;
