import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { useEffect, useState } from "react";
import { useAxios } from "../../utils/Provider";
import Swal from "sweetalert2";

export const EditKelas = () => {
  const { id, id_kelas } = useParams();
  const axios = useAxios();
  const [kelas, setKelas] = useState(null);
  const [file, setFile] = useState(null);
  const [siswa, setSiswa] = useState();
  const [jurusan, setJurusan] = useState([]);
  const [current, setCurrent] = useState({
    tingkat: "X",
    jurusan: 1,
  });
  const pathname = window.location.pathname;

  const handleChangeJurusan = (e) => {
    setCurrent({ ...current, jurusan: e.target.value });
  };

  const handleChangeTingkat = (e) => {
    setCurrent({ ...current, tingkat: e.target.value });
  };
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  }

  const handleUpload = async () => {
    if(!file){
      alert("Please select file");
      return;
    }

    const formData = new FormData();
    formData.append("csvFile", file);
    formData.append("id_kelas", id);
    console.log(formData);

    try{
      const response = await axios.post("http://127.0.0.1:8000/siswa/upload", formData, {
        headers: {"Content-Type" : "multipart/form-data"},
      }).then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Tutup",
        });
      });
      // alert("sudah mengirim");
    }catch (err){
      console.error("Error uploading file:", err);
      // alert("File upload failed!");
    }
  }

  const handleAddKelas = (e) => {
    e.preventDefault();
    axios
      .post(`/siswa`, {
        nama: e.target.nama.value,
        nis: e.target.nis.value,
        rfid: e.target.rfid.value,
        id_kelas: id,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response?.data?.message || "Terjadi kesalahan",
          icon: "error",
          confirmButtonText: "Tutup",
        });
      });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (pathname.includes("/update")) {
      axios
        .put(`/kelas/${id}`, {
          id_jurusan: current.jurusan,
          tingkat: current.tingkat,
          no_kelas: current.no_kelas,
        })
        .then((res) => {
          window.location = `/kelas/${id}/addsiswa`;
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Tutup",
          });
        });
    } else {
      axios
        .get(
          `/kelas?id_jurusan=${current.jurusan}&tingkat=${current.tingkat}&no_kelas=${current.no_kelas}`
        )
        .then((res) => {
          if (res.data.data[0]) {
            console.log("lolos");

            Swal.fire({
              title: "Error!",
              text: "Kelas sudah ada",
              icon: "error",
              confirmButtonText: "Tutup",
            });
          } else {
            console.log("tdk lolos");

            axios
              .post(`/kelas`, {
                id_jurusan: current.jurusan,
                tingkat: current.tingkat,
                no_kelas: current.no_kelas,
              })
              .then((res) => {
                console.log(res.data);
                window.location = `/kelas/${res.data.kelas_id}/addsiswa`;
              })
              .catch((err) => {
                Swal.fire({
                  title: "Error!",
                  text: err.response.data.message,
                  icon: "error",
                  confirmButtonText: "Tutup",
                });
              });
          }
        })
        .catch((err) => {
          console.log("error");
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Tutup",
          });
        });
    }
  };

  function handleDeleteSiswa(e) {}

  useEffect(() => {
    if (pathname.includes("/update")) {
      axios
        .get(`/kelas/detail?id_kelas=${id}`)
        .then((res) => {
          console.log(res.data);
          setKelas(res.data.data[0]);
          setCurrent({
            jurusan: res.data.data[0].id_jurusan,
            tingkat: res.data.data[0].tingkat,
            no_kelas: res.data.data[0].no_kelas,
          });
        })
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.response.data.message,
            icon: "error",
            confirmButtonText: "Tutup",
          }).then(() => {
            window.location = "/kelas";
          });
        });
        
      }
    axios
      .get(`/siswa?id_kelas=${id}`)
      .then((res) => {
        setSiswa(res.data.data);
        console.log(siswa )
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Tutup",
        });
      });
  }, [id]);

  useEffect(() => {
    axios
      .get("/jurusan")
      .then((res) => {
        setJurusan(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main flex-col">
        <form
          className="p-5 w-full bg-blue_dark text-white bg-opacity-90 rounded-lg"
          onSubmit={handleSubmitForm}
        >
          <h1 className="text-3xl font-bold pb-7">
            {pathname.includes("/update") ? "Update " : "Add "} Kelas
          </h1>

          <div className="content-form flex items-end gap-x-10">
            <div className="flex flex-col ">
              <label htmlFor="tingkat" className="p-2">
                Tingkat:
              </label>
              <select
                id="tingkat"
                name="tingkat"
                onChange={handleChangeTingkat}
                value={current.tingkat}
                className="text-blue_dark rounded p-2 px-3 w-24"
              >
                <option value="X">X</option>
                <option value="XI">XI</option>
                <option value="XII">XII</option>
              </select>
            </div>

            <div className="flex flex-col w-48">
              <label htmlFor="jurusan" className="p-2 ">
                Jurusan:
              </label>
              <select
                id="jurusan"
                name="jurusan"
                onChange={handleChangeJurusan}
                className="text-blue_dark rounded p-2 px-3"
              >
                {jurusan &&
                  jurusan.map((jur, i) => (
                    <option key={i} value={jur.id_jurusan}>
                      {jur.akronim}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col w-24">
              <label htmlFor="no_kelas" className="p-2">
                No Kelas:
              </label>
              <input
                type="number"
                id="no_kelas"
                name="no_kelas"
                value={current.no_kelas}
                onChange={(e) =>
                  setCurrent({ ...current, no_kelas: e.target.value })
                }
                className="text-blue_dark rounded py-2 ps-3"
              />
            </div>
          </div>
          <div className="flex items-end float-end pe-10 gap-3">
            <Link to="/kelas" className="px-4 py-2 rounded bg-red">
              Kembali
            </Link>
            <button type="submit" className="px-4 py-2 rounded bg-green">
                Simpan
            </button>
          </div>
        </form>
        {id && (
          <div>
            <form
              className="p-5 w-full bg-blue_dark text-white bg-opacity-90 rounded-lg"
              onSubmit={handleAddKelas}
            >
              <h1 className="text-3xl flex self-center font-bold">Add Siswa</h1>
              <div className="content-form flex justify-between items-end gap-x-10">
                <div className="flex gap-x-10">
                  <div className="flex flex-col ">
                    <label htmlFor="nama" className="p-2">
                      Nama :
                    </label>
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      className="text-blue_dark rounded p-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="nis" className="p-2">
                      NIS :
                    </label>
                    <input
                      type="text"
                      id="nis"
                      name="nis"
                      className="text-blue_dark rounded p-2 px-3"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <label htmlFor="rfid" className="p-2">
                      RFID :
                    </label>
                    <input
                      type="text"
                      id="rfid"
                      name="rfid"
                      className="text-blue_dark rounded p-2 px-3"
                    />
                  </div>
                </div>
                <div className="flex items-center  float-end pe-10 gap-3">
                  <Link to="/kelas" className="px-4 py-2 rounded bg-red">
                    Kembali
                  </Link>
                  <button type="submit" className="px-4 py-2 rounded bg-blue">
                    Kirim
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 bg-blue_dark rounded px-5 py-3 text-white">
                <input type="file" accept=".csv" onChange={handleFileChange}/>
                <button onClick={handleUpload} className="bg-blue px-4 py-2 rounded">Upload Csv</button>
            </div>
          </div>
        )}
        <table className="w-full table">
          <thead>
            <tr>
              <th>Nama</th>
              <th>NIS</th>
              <th>Kelas</th>
              <th>RFID ID</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {siswa && siswa.length > 0 ? (
              siswa.map((s, i) => (
                <tr key={i}>
                  <td>{s.nama}</td>
                  <td>{s.nis}</td>
                  <td>{`${s.tingkat} ${s.akronim} ${s.no_kelas}`}</td>
                  <td>{s.rfid}</td>
                  <td className="flex gap-2 justify-center">
                    <a
                      href={`/siswa/update/${s.nis}`}
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
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  Belum ada siswa di kelas ini
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </AuthGuard>
  );
};