import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { formatDateTime, useAxios } from "../../utils/Provider";
import { AuthGuard } from "../../utils/AuthGuard";

export function DataPresensi() {
  const axios = useAxios();
  const [presensi, setPresensi] = useState();

  useEffect(() => {
    axios
      .get("/presensi")
      .then((res) => {
        setPresensi(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axios]);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />

      <div className="main">
        <table className="w-full table">
          <thead>
            <tr>
              <th>Waktu</th>
              <th>Materi</th>
              <th>Nama Guru</th>
            </tr>
          </thead>
          <tbody>
            {presensi &&
              presensi.map((pre, i) => (
                <tr key={i}>
                  <td>{formatDateTime(new Date(pre.hari_tanggal))}</td>
                  <td>{pre.nama_materi}</td>
                  <td>{pre.nama}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
