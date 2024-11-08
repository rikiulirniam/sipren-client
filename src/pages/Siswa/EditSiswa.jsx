import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useEffect, useState } from "react";
import { useAxios } from "../../utils/Provider";
import Swal from "sweetalert2";

export const EditSiswa = () => {
  const { nis } = useParams();
  const axios = useAxios();
  const [current, setCurrent] = useState({
    rfid: "",
    nama: "",
    nis: "",
    jenis_kelamin: 1,
    kelas: 1,
  });
  const pathname = window.location.pathname;
  const [kelas, setKelas] = useState([]);

  const handleChangeJurusan = (e) => {
    setCurrent({ ...current, jurusan: e.target.value });
  };

  const handleChangeTingkat = (e) => {
    setCurrent({ ...current, jenis_kelamin: parseInt(e.target.value) });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const payload = {
      rfid: current.rfid,
      nama: current.nama,
      nis: current.nis,
      jenis_kelamin: current.jenis_kelamin,
      id_kelas: current.kelas,
    };

    if (pathname.includes("/update")) {
      axios
        .put(`/siswa/${nis}`, payload)
        .then((res) => {
          window.location = "/siswa";
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response?.data?.message || "Terjadi kesalahan",
            icon: "error",
            confirmButtonText: "Tutup",
          });
        });
    } else {
      axios
        .post(`/siswa`, payload)
        .then((res) => {
          window.location = "/siswa";
        })
        .catch((err) => {
          console.log(payload);
          Swal.fire({
            title: "Error!",
            text: err.response?.data?.message || "Terjadi kesalahan",
            icon: "error",
            confirmButtonText: "Tutup",
          });
        });
    }
  };

  useEffect(() => {
    if (pathname.includes("/update")) {
      axios
        .get(`/siswa/${nis}`)
        .then((res) => {
          setCurrent(res.data.data[0]);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    axios
      .get("/kelas")
      .then((res) => {
        setKelas(res.data.data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: err.response?.data?.message || "Terjadi kesalahan",
          icon: "error",
          confirmButtonText: "Tutup",
        });
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main">
        <form
          className="p-5 w-full bg-blue_dark text-white bg-opacity-90 rounded-lg"
          onSubmit={handleSubmitForm}
        >
          <h1 className="text-3xl font-bold pb-7">
            {pathname.includes("/update") ? "Update " : "Add "} Siswa
          </h1>

          <div className="flex flex-col mb-5">
            <label htmlFor="rfid" className="p-2">
              RFID :
            </label>
            <input
              type="text"
              id="rfid"
              name="rfid"
              value={current.rfid || ""}
              onChange={(e) => setCurrent({ ...current, rfid: e.target.value })}
              className="text-blue_dark rounded p-2 px-3"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="nama" className="p-2">
              Nama :
            </label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={current.nama || ""}
              onChange={(e) => setCurrent({ ...current, nama: e.target.value })}
              className="text-blue_dark rounded p-2 px-3"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="nis" className="p-2">
              NIS :
            </label>
            <input
              type="text"
              id="nis"
              name="nis"
              value={current.nis || ""}
              onChange={(e) => setCurrent({ ...current, nis: e.target.value })}
              className="text-blue_dark rounded p-2 px-3"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="jenis_kelamin" className="p-2">
              Jenis Kelamin :
            </label>
            <select
              id="jenis_kelamin"
              name="jenis_kelamin"
              onChange={handleChangeTingkat}
              value={current.jenis_kelamin}
              className="text-blue_dark rounded p-2 px-3 w-2/12"
            >
              <option value="1">Laki-Laki</option>
              <option value="0">Perempuan</option>
            </select>
          </div>

          <div className="flex float-end gap-3">
            <Link to="/siswa" className="p-4 py-2 rounded bg-red">
              Kembali
            </Link>
            <button type="submit" className="p-4 py-2 rounded bg-blue">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </AuthGuard>
  );
};
