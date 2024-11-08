import { useEffect, useState } from "react";
import { useAxios } from "../../utils/Provider";
import { AuthGuard } from "../../utils/AuthGuard";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { Link } from "react-router-dom";

export function Siswa() {
  const axios = useAxios();
  const [siswa, setSiswa] = useState();

  function handleDeleteSiswa(e) {}

  useEffect(() => {
    axios
      .get("/siswa")
      .then((res) => {
        setSiswa(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />

      <div className="main flex-col gap-1">
        <Link
          to={"add"}
          className="bg-green text-white border-2 border-black font-bold px-4 py-3 mx-5 rounded flex justify-between align-middle"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="px-2">Add Siswa</span>
        </Link>

        <table className="w-full table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>NIS</th>
              <th>Kelas</th>
              <th>Jenis Kelamin</th>
              <th>RFID ID</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa &&
              siswa.map((s, i) => (
                <tr key={i}>
                  <td>{s.nama}</td>
                  <td>{s.nis}</td>
                  <td>{`${s.tingkat} ${s.akronim} ${s.no_kelas}`}</td>
                  <td>{s.jenis_kelamin == 1 ? "Laki-Laki" : "Perempuan"}</td>
                  <td>{s.rfid}</td>
                  <td className="flex gap-2 justify-center">
                    <a
                      href={"/siswa/update/" + s.nis}
                      className="bg-orange_scale py-1 px-4 rounded"
                    >
                      Edit
                    </a>
                    <button
                      onClick={handleDeleteSiswa}
                      value={s.nis}
                      className="bg-red py-1 px-4 rounded"
                    >
                      Delete
                    </button>{" "}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
