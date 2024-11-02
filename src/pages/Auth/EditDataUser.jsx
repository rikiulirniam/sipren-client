import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useEffect, useState } from "react";
import { useAxios } from "../../utils/Provider";

export const EditDataUser = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState("0"); // State untuk menyimpan nilai role

  useEffect(() => {
    axios
      .get(`/users/${id}`)
      .then((res) => {
        // console.log(res.data)
        const user = res.data;
        setCurrentUser(user);
        setRole(user.level); // Atur role berdasarkan level dari data user
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  function handleUpdateAll(e) {
    e.preventDefault();
    console.log("Updating with data:", {
      username: e.target.username.value,
      level: parseInt(role), // Confirm this matches what the backend expects
    });

    axios
      .put(`/users/${id}`, {
        username: e.target.username.value,
        password: e.target.password.value,
        level: role,
      })
      .then((res) => {
        window.location = "/data_user";
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main">
        <form
          className="p-5 w-full bg-blue_dark text-white bg-opacity-90 rounded-lg"
          onSubmit={handleUpdateAll}
        >
          <h1 className="text-3xl font-bold pb-7">Update User</h1>

          <div className="flex flex-col mb-5">
            <label htmlFor="username" className="p-2">
              Username :{" "}
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Input your username..."
              className="text-blue_dark rounded p-2 px-3"
              defaultValue={currentUser ? currentUser.username : ""}
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="p-2">
              Password :{" "}
            </label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Input your password..."
              className="text-blue_dark rounded p-2 px-3"
            />
          </div>

          <div className="flex flex-col w-1/6">
            <label htmlFor="level" className="p-2">
              Role :{" "}
            </label>
            <select
              className="rounded text-blue_dark p-2 px-3"
              name="role"
              value={role} // Menggunakan value agar dinamis
              onChange={handleRoleChange}
            >
              <option value="0">Guru</option>
              <option value="1">Admin</option>
            </select>
          </div>
          <div className="flex float-end gap-3">
            <Link to={"/data_user"} className="p-4 py-2 rounded bg-red">
              Kembali
            </Link>
            <button type="submit" className="p-4 py-2 rounded bg-blue">
              Update
            </button>
          </div>
        </form>
      </div>
    </AuthGuard>
  );
};
