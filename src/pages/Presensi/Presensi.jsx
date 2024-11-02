import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";
import { DateTime } from "../../components/Timer/DateTime";
import { useAxios } from "../../utils/Provider";
import Swal from "sweetalert2";

function Presensi() {
  const [titleMatter, setTitleMatter] = useState("");
  const [descriptionMatter, setDescriptionMatter] = useState("");
  const axios = useAxios();
  const [jurusan, setJurusan] = useState();
  const [Kelas, setKelas] = useState();
  const [current, setCurrent] = useState({
    jurusan: 1,
    tingkat: "X",
  });
  const [isProduktif, setIsProduktif] = useState(false);
  const [mapel, setMapel] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e.target.kelas.value);
  };

  function handleChangeTingkat(e) {
    setCurrent({ tingkat: e.target.value, jurusan: current.jurusan });
  }
  function handleChangeJurusan(e) {
    setCurrent({ jurusan: e.target.value, tingkat: current.tingkat });
  }
  const handleJenisChange = async (e) => {
    await setIsProduktif(e.target.value === "produktif");

    await axios.get(`/mapel?${isProduktif ? "produktif" : ""}`).then(res => {
      // setMapel(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  };

  useEffect(() => {
    axios
      .get(`/kelas?tingkat=${current.tingkat}&id_jurusan=${current.jurusan}`)
      .then((res) => {
        setKelas(res.data.data);
        if (!res.data.data[0]) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Kelas tidak ditemukan.",
          }).then(() => {
            window.location.reload();
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [current]);

  useEffect(() => {
    axios
      .get("/jurusan")
      .then((res) => {
        setJurusan(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const handleKeyDown = (event) => {
      setInputValue((prev) => prev + event.key);
      if (event.key === "Enter") {
        console.log(`Input value: ${inputValue}`);
        setInputValue(""); // Mengosongkan input setelah log
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputValue]);

  return (
    <AuthGuard>
      {/* Subject */}
      <div className="hero">
        <Navbar />
        <Sidebar />
        <form className="main w-[100%]" onSubmit={handleSubmit}>
          <div className="form-kelas bg-white bg-opacity-65 w-[70vw]  flex flex-col justify-start align-top gap-3 rounded ">
            <div className="heading-choose-kelas text-center bg-blue_scale text-white rounded-t p-[0.65rem]">
              Kelas
            </div>
            <div className="flex-kelas-input flex gap-2 p-4 ">
              <div className="kelas-input w-4/12 bg-orange_fade border-2 rounded pt-2 pb-4">
                <h2 className="px-3">Kelas : </h2>
                <hr className="pb-2" />
                <div className="input-kelas flex justify-between gap-1 px-2">
                  <select
                    name="tingkat"
                    onChange={handleChangeTingkat}
                    className="w-full px-2 py-1 rounded"
                  >
                    <option value="X">X</option>
                    <option value="XI">XI</option>
                    <option value="XII">XII</option>
                  </select>
                </div>
              </div>
              <div className="kelas-input w-1/2 bg-orange_fade border-2 rounded pt-2 pb-4">
                <h2 className="px-3">Jurusan : </h2>
                <hr className="pb-2" />
                <div className="input-kelas flex justify-between gap-1 px-2">
                  <select
                    name="jurusan"
                    onChange={handleChangeJurusan}
                    className="w-full px-2 py-1 rounded"
                  >
                    {jurusan &&
                      jurusan.map((jur, i) => (
                        <option key={i} value={jur.id_jurusan}>
                          {jur.akronim}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="kelas-input w-1/4 bg-orange_fade border-2 rounded pt-2 pb-4">
                <h2 className="px-3">No. : </h2>
                <hr className="pb-2" />
                <div className="input-kelas flex justify-between gap-1 px-2">
                  <select name="no_kelas" className="w-full px-2 py-1 rounded">
                    {Kelas &&
                      Kelas.map((kls, i) => (
                        <option key={i} value={kls.id_kelas}>
                          {kls.no_kelas}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="p-kls-input w-full px-4 pb-4">
              <div className="kelas-input w-full bg-orange_fade border-2 rounded pt-2 pb-4">
                <h2 className="px-3">Mapel : </h2>
                <hr className="pb-2" />
                <div className="input-kelas flex justify-between gap-1 px-2 my-3">
                  <div className="input-kelas flex justify-center gap-4 w-full">
                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="jenis"
                        value="normada"
                        className="hidden peer"
                        defaultChecked // Menjadikan "Normada" sebagai pilihan default
                        onChange={handleJenisChange}
                      />
                      <div className="px-10 py-2 max-w-28 flex items-center justify-center rounded-lg border border-gray-300 peer-checked:bg-white peer-checked:bg-opacity-60">
                        <span>Normada</span>
                      </div>
                    </label>

                    <label className="cursor-pointer">
                      <input
                        type="radio"
                        name="jenis"
                        value="produktif"
                        className="hidden peer"
                        onChange={handleJenisChange}
                      />
                      <div className="px-10 py-2 max-w-28 flex items-center justify-center rounded-lg border border-gray-300 peer-checked:bg-white peer-checked:bg-opacity-60">
                        <span>Produktif</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="input-kelas flex justify-between mx-3 px-2">
                  <select name="jurusan" className="w-full px-3 py-2 rounded">
                    <option value="PIC">PIC</option>
                    <option value="PCC">PCC</option>
                    <option value="Game Development">Game Development</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="jurnalisme">
            <div
              className="card-2 h-[25vh] rounded bg-white"
              style={{ width: "40vw" }}
            >
              <h3 className="rounded-t">Judul Materi</h3>
              <div className="h-4/5 px-[1.1em] pt-[1em] pb-[1.3em] rounded">
                <textarea
                  style={{ resize: "none" }}
                  className="h-full"
                  placeholder="Isi judul materi"
                  id="titleMatter"
                  value={titleMatter}
                  onChange={(e) => setTitleMatter(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Description Subject */}
            <div className="card-2 rounded" style={{ width: "40vw" }}>
              <h3 className="rounded-t">Deskripsi Mapel Hari Ini</h3>
              <div className="h-4/5 px-[1.1em] pt-[1em] pb-[1.3em] rounded">
                <textarea
                  style={{ height: "200px", resize: "none" }}
                  placeholder="Isi Deskripsi...."
                  id="descriptionMatter"
                  value={descriptionMatter}
                  onChange={(e) => setDescriptionMatter(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div
              className="d-flex justify-end button"
              style={{ maxWidth: "1500px" }}
            >
              <button
                className="bg-blue p-2 px-4 btn-blue text-white rounded shadow"
                id="confirmMatter"
                type="submit"
              >
                Lanjut
              </button>
            </div>
          </div>
        </form>
      </div>
    </AuthGuard>
  );
}

export default Presensi;
