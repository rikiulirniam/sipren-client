import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import Button from "../components/Button";
import { AuthGuard } from "../Auth";

function Dashboard() {

  return (
    <AuthGuard>
      <Navbar />
      <div className="container vh-100 py-3">
        <h1>Dashboard</h1>
        <hr />

      </div>
      {/* <Footer /> */}
    </AuthGuard>
  );
}
export default Dashboard;
