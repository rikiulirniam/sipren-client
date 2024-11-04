import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { formatDate, useAuth } from "../../utils/Provider";
import { AuthGuard } from "../../utils/AuthGuard";
import { DateTime } from "../../components/Timer/DateTime";

function Guru() {
  const auth = useAuth();

  return (
    <AuthGuard>
      <div className="hero">
        <Sidebar />
        <Navbar />
        <div className="d-flex justify-center items-center">
          <div className="main">
            <div className="welcome-selayang">
              <div className="card welcome shadow items-center flex">
                <span className="pe-2"> Selamat Datang, </span>
                <div className="flex text-[1.5em] font-bold">
                  <h4> {auth?.user?.level ? "Admin" : "Bapak/Ibu Guru"}</h4>
                </div>
              </div>

              <div className="card selayang-padang shadow">
                <h3>Selayang Pandang</h3>
                <div className="divider"></div>
                <p align="left">
                  “Bukan hanya ilmu dan pengetahuan yang ditumbuhkembangkan
                  dalam proses belajar di sekolah, melainkan karakter positif
                  dan peluang menjadi insan yang hebat di masa depan. Di mana
                  tempat kamu belajar adalah kunci.”
                </p>
                <h5>
                  Ir. Eny Wahyuningsih, M. Pd.{" "}
                  <span>Kepala SMK Tunas Harapan Pati</span>
                </h5>
                <span style={{ fontFamily: "Great Vibes, cursive" }}>
                  Eny Wahyuningsih
                </span>
              </div>
            </div>
            <div className="history-date">
              <DateTime />

              <div className="card history shadow">
                <h3>History anda</h3>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M0 0H34V34H0V0Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M4.12134 4.76517V9.91667H9.27288"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.83325 17C2.83325 24.824 9.17588 31.1667 16.9999 31.1667C24.824 31.1667 31.1666 24.824 31.1666 17C31.1666 9.17596 24.824 2.83333 16.9999 2.83333C11.7568 2.83333 7.17895 5.68161 4.7293 9.91532"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.0035 8.5L17.0027 17.0062L23.0089 23.0125"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4>XI TJKT 1, Jam ke 1-2</h4>
                  </div>
                  <span>07:00</span>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M0 0H34V34H0V0Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M4.12134 4.76517V9.91667H9.27288"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.83325 17C2.83325 24.824 9.17588 31.1667 16.9999 31.1667C24.824 31.1667 31.1666 24.824 31.1666 17C31.1666 9.17596 24.824 2.83333 16.9999 2.83333C11.7568 2.83333 7.17895 5.68161 4.7293 9.91532"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.0035 8.5L17.0027 17.0062L23.0089 23.0125"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4>XI TJKT 1, Jam ke 1-2</h4>
                  </div>
                  <span>07:00</span>
                </div>
                <div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <path
                        d="M0 0H34V34H0V0Z"
                        fill="white"
                        fillOpacity="0.01"
                      />
                      <path
                        d="M4.12134 4.76517V9.91667H9.27288"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.83325 17C2.83325 24.824 9.17588 31.1667 16.9999 31.1667C24.824 31.1667 31.1666 24.824 31.1666 17C31.1666 9.17596 24.824 2.83333 16.9999 2.83333C11.7568 2.83333 7.17895 5.68161 4.7293 9.91532"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.0035 8.5L17.0027 17.0062L23.0089 23.0125"
                        stroke="white"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <h4>XI TJKT 1, Jam ke 1-2</h4>
                  </div>
                  <span>07:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  );
}

export default Guru;
