import React, { useEffect, useState } from "react";

function RfidReader() {
  const [rfidData, setRfidData] = useState("");
  const [scannedData, setScannedData] = useState("");

  useEffect(() => {
    let buffer = "";

    const handleKeyDown = (event) => {
      // Tangkap semua karakter
      const key = event.key;

      if (key === "Enter") {
        // Jika Enter ditekan, simpan data yang dibaca
        setScannedData(buffer);
        setRfidData(buffer);
        buffer = ""; // Kosongkan buffer setelah selesai
      } else {
        // Tambahkan karakter ke buffer
        buffer += key;
      }
    };

    // Pasang event listener
    window.addEventListener("keydown", handleKeyDown);

    // Hapus event listener saat komponen unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="main">
      <div className="dd text-white">
        <h2>RFID Scanner</h2>
        <p>Data RFID Tersimpan: {rfidData}</p>
        <p>Data Terakhir Dipindai: {scannedData}</p>
      </div>
    </div>
  );
}

export default RfidReader;
