import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { getDecryptedData, useAxios } from "../../utils/Provider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function DataUser() {
  const axios = useAxios();
  const [users, setUsers] = useState();

  function handleDeleteUser(e) {
    e.preventDefault();
    console.log(e.target.id_user.value);
    console.log(e.target.username.value);
    Swal.fire({
      title: "Yakin Ingin Menghapus User? ",
      text: "Kelas yang hilang tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

  useEffect(() => {
    axios
      .get("/users", {
        headers: { Authorization: `Bearer ${getDecryptedData("token")}` },
      })
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, key) => {
                return (
                  <tr key={key}>
                    <td>{user.username}</td>
                    <td>{user.level == 1 ? "Admin" : "Guru"}</td>
                    <td>
                      <div className="flex gap-2 justify-center">
                        <Link
                          to={"update/" + user.id_user}
                          className="bg-orange_scale py-1 px-4 rounded"
                        >
                          Edit
                        </Link>
                        <form onSubmit={handleDeleteUser}>
                          <input
                            type="hidden"
                            name="id_user"
                            value={user.id_user}
                          />
                          <input
                            type="hidden"
                            name="username"
                            value={user.username}
                          />
                          <button className="bg-red py-1 px-4 rounded">
                            Delete
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
