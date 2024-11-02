import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useAxios } from "../../utils/Provider";
import Swal from "sweetalert2";

export function Kelas() {
  let count = 1;
  const axios = useAxios();
  const [kelas, setKelas] = useState();

  function handleDeleteKelas(e){
    Swal.fire({
      title: "Yakin Ingin Menghapus Kelas?",
      text: "Kelas yang hilang tidak bisa dikembalikan!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  useEffect(() => {
    axios
      .get("/kelas")
      .then((res) => {
        setKelas(res.data.data);
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
        <table className="table">
          <thead>
            <tr>
              <th colSpan={1}>No.</th>
              <th colSpan={4}>Kelas</th>
              <th colSpan={5}>Jurusan</th>
              <th colSpan={3}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {kelas &&
              kelas.map((kls, i) => (
                <tr key={i}>
                  <td colSpan={1}>{count++}</td>
                  <td colSpan={4}>{`${kls.tingkat} ${kls.akronim} ${kls.no_kelas}`}</td>
                  <td colSpan={5}>{`${kls.nama_jurusan}`}</td>
                  <td colSpan={3}>
                    <div className="flex gap-2 justify-center">
                      <a href={"/kelas/update/" + kls.id_kelas} className="bg-orange_scale py-1 px-4 rounded">
                        Edit
                      </a>
                      <button onClick={handleDeleteKelas} value={kls.id_kelas} className="bg-red py-1 px-4 rounded">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
