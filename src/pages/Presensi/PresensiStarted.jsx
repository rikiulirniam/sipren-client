import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useAuth, useAxios } from "../../utils/Provider";

export function PresensiStarted() {
  const auth = useAuth();
  const axios = useAxios();

  const [detPres, setDetPres] = useState();

  useEffect(() => {
    axios
      .get("/det_presensi/4")
      .then((res) => {
        setDetPres(res.data.data);
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
              <th>Nama Siswa</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {detPres &&
              detPres.map((det, item) => (
                <tr>
                  {" "}
                  <td>{det.nama}</td>
                  <td>{det.keterangan == 0 ? "Tanpa Keterangan" : "Hadir"}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
}
