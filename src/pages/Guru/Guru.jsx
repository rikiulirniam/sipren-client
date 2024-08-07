import React from "react";

function Guru() {
  return (
    <React.Fragment>
      <div className="d-flex justify-center items-center">
        <div className="main">
          <div className="welcome-selayang">
            <div className="card welcome shadow">
              <span>Selamat Datang,</span>
              {/* <h3>{{ Auth::user()->guru->nama_guru }}</h3> */}
              <h3>Riki</h3>
              <p>Guru TJKT</p>
            </div>

            <div className="card selayang-padang shadow">
              <h3>Selayang Pandang</h3>
              <div className="divider"></div>
              <p align="left">
                “Bukan hanya ilmu dan pengetahuan yang ditumbuhkembangkan dalam
                proses belajar di sekolah, melainkan karakter positif dan
                peluang menjadi insan yang hebat di masa depan. Di mana tempat
                kamu belajar adalah kunci.”
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
            <div className="card date-time shadow">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 63 53"
                  fill="none"
                >
                  <path
                    d="M6.95972 20.9792H55.6855V44.1667C55.6855 45.3864 54.5374 46.375 53.121 46.375H9.52423C8.10789 46.375 6.95972 45.3864 6.95972 44.1667V20.9792Z"
                    fill="#E0F2FE"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.95972 9.93752C6.95972 8.71789 8.10789 7.72919 9.52423 7.72919H53.121C54.5374 7.72919 55.6855 8.71789 55.6855 9.93752V20.9792H6.95972V9.93752Z"
                    fill="#E0F2FE"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path d="M21.064 4.41669V13.25V4.41669Z" fill="#E0F2FE" />
                  <path
                    d="M21.064 4.41669V13.25"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M41.5806 4.41669V13.25V4.41669Z" fill="#E0F2FE" />
                  <path
                    d="M41.5806 4.41669V13.25"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M36.4514 37.5417H44.145H36.4514Z" fill="#E0F2FE" />
                  <path
                    d="M36.4514 37.5417H44.145"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M18.5 37.5417H26.1935H18.5Z" fill="#E0F2FE" />
                  <path
                    d="M18.5 37.5417H26.1935"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M36.4514 28.7083H44.145H36.4514Z" fill="#E0F2FE" />
                  <path
                    d="M36.4514 28.7083H44.145"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M18.5 28.7083H26.1935H18.5Z" fill="#E0F2FE" />
                  <path
                    d="M18.5 28.7083H26.1935"
                    stroke="#112A42"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span id="date">00-00-00</span>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 41 44"
                  fill="none"
                >
                  <path
                    d="M13.4695 2H27.2328"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3511 17.8023V25.7035"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20.3511 41.5059C30.4862 41.5059 38.7022 34.431 38.7022 25.7035C38.7022 16.9761 30.4862 9.90118 20.3511 9.90118C10.2161 9.90118 2 16.9761 2 25.7035C2 34.431 10.2161 41.5059 20.3511 41.5059Z"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="alert" id="timestamp">
                  00:00:00
                </span>
              </div>
            </div>

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
                    <path d="M0 0H34V34H0V0Z" fill="white" fillOpacity="0.01" />
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
                    <path d="M0 0H34V34H0V0Z" fill="white" fillOpacity="0.01" />
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
                    <path d="M0 0H34V34H0V0Z" fill="white" fillOpacity="0.01" />
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
    </React.Fragment>
  );
}

export default Guru;
