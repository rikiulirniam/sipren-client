import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useAuth, useAxios } from "../../utils/Provider";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

export function PresensiStarted() {
  const { id } = useParams();
  const auth = useAuth();
  const axios = useAxios();

  const [detPres, setDetPres] = useState();

  useEffect(() => {
    axios
      .get(`/det_presensi/${id}`)
      .then((res) => {
        console.log(res.data.data);
        setDetPres(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [rfidData, setRfidData] = useState("");

  function handleEnded() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Presensi has been saved",
      showConfirmButton: true,
      timer: 1500,
    }).then(res => {
      window.location = '/data_presensi' 
    });
  }

  useEffect(() => {
    let buffer = "";

    const handleKeyDown = (event) => {
      // Tangkap semua karakter
      const key = event.key;

      if (key === "Enter") {
        setRfidData(buffer);
        axios
          .put("/det_presensi", {
            rfid: buffer,
          })
          .then((res) => {
            window.location.reload();
          })
          .catch((err) => {
            console.log(err);
          });
        buffer = "";
      } else {
        buffer += key;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main flex-col gap-1">
        <h1 className="font-bold text-white text-2xl px-5">Presensied</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nama Siswa</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {detPres &&
              detPres.map((det, item) => {
                if (det.keterangan != "T") {
                  return (
                    <tr>
                      {" "}
                      <td>{det.nama}</td>
                      <td>
                        {det.keterangan == "T"
                          ? "Tanpa Keterangan"
                          : det.keterangan == "I"
                          ? "Izin"
                          : det.keterangan == "S"
                          ? "Sakit"
                          : "Hadir"}
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <button className="bg-orange_scale p-2 px-8 rounded">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
        <h1 className="font-bold text-white text-2xl px-5">Unpresensied</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Nama Siswa</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {detPres &&
              detPres.map((det, item) => {
                if (det.keterangan == "T") {
                  return (
                    <tr>
                      {" "}
                      <td>{det.nama}</td>
                      <td>
                        {det.keterangan == "T"
                          ? "Tanpa Keterangan"
                          : det.keterangan == "I"
                          ? "Izin"
                          : det.keterangan == "S"
                          ? "Sakit"
                          : "Hadir"}
                      </td>
                      <td>
                        <div className="flex justify-center">
                          <button className="bg-orange_scale p-2 px-8 rounded">
                            Edit
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>

        <button
          className="bg-red sticky bottom-5 left-full text-white p-5 py-2 rounded"
          onClick={handleEnded}
        >
          Akhiri
        </button>
      </div>
    </AuthGuard>
  );
}
