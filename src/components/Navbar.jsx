import { useNavigate, useParams } from "react-router-dom";
import { useAuth, useAxios } from "../utils/Provider";
import { useEffect } from "react";

function Navbar() {
  const axios = useAxios();
  const auth = useAuth();
  const navigate = useNavigate();

  const pathname = window.location.pathname;

  function handleLogout(e) {
    e.preventDefault();
    axios
      .delete("/auth/logout")
      .then((res) => {
        localStorage.setItem("user", null);
        localStorage.setItem("token", null);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <h3 className="shadow-none font-bold">
            {pathname.split("/")[1].replace("_", " ").toLocaleUpperCase()}
          </h3>
          <div>
            <div className="user">
              <p>{auth.user.level ? auth.user.username : auth.user.nama}</p>
              <span>{auth.user.level? "Admin" : "Guru"}</span>
            </div>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 63 64"
                fill="none"
              >
                <path
                  d="M17.25 48.9125V46.0625C17.25 38.1925 23.63 31.8125 31.5 31.8125C39.37 31.8125 45.75 38.1925 45.75 46.0625V48.9125"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <path
                  d="M31.5 31.8125C36.2221 31.8125 40.05 27.9847 40.05 23.2625C40.05 18.5405 36.2221 14.7125 31.5 14.7125C26.7778 14.7125 22.95 18.5405 22.95 23.2625C22.95 27.9847 26.7778 31.8125 31.5 31.8125Z"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.5 60.3125C47.2401 60.3125 60 47.5526 60 31.8125C60 16.0724 47.2401 3.3125 31.5 3.3125C15.7599 3.3125 3 16.0724 3 31.8125C3 47.5526 15.7599 60.3125 31.5 60.3125Z"
                  stroke="black"
                  strokeWidth="6"
                />
              </svg>
              <div className="user-dropdown">
                <div>
                  <div
                    className="d-flex justify-between items-center"
                    style={{ gap: "10px" }}
                  >
                    <h3>Riki</h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 63 64"
                      fill="none"
                    >
                      <path
                        d="M17.25 48.9125V46.0625C17.25 38.1925 23.63 31.8125 31.5 31.8125C39.37 31.8125 45.75 38.1925 45.75 46.0625V48.9125"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M31.5 31.8125C36.2221 31.8125 40.05 27.9847 40.05 23.2625C40.05 18.5405 36.2221 14.7125 31.5 14.7125C26.7778 14.7125 22.95 18.5405 22.95 23.2625C22.95 27.9847 26.7778 31.8125 31.5 31.8125Z"
                        stroke="black"
                        strokeWidth="6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M31.5 60.3125C47.2401 60.3125 60 47.5526 60 31.8125C60 16.0724 47.2401 3.3125 31.5 3.3125C15.7599 3.3125 3 16.0724 3 31.8125C3 47.5526 15.7599 60.3125 31.5 60.3125Z"
                        stroke="black"
                        strokeWidth="6"
                      />
                    </svg>
                  </div>
                  <div className="user-dropdown-content">
                    <form
                      onSubmit={handleLogout}
                      method="POST"
                      className="flex border-1 justify-between"
                    >
                      <input
                        className="font-bold w-28 cursor-pointer"
                        type="submit"
                        value="Logout"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M11.8518 12.0195H21.7037M21.7037 12.0195L17.4814 15.3594M21.7037 12.0195L17.4814 8.67969"
                          stroke="black"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.7037 5.33984V4.22656C21.7037 2.99687 20.4435 2 18.8889 2H4.81481C3.26023 2 2 2.99687 2 4.22656V19.8125C2 21.0422 3.26023 22.0391 4.81481 22.0391H18.8889C20.4435 22.0391 21.7037 21.0422 21.7037 19.8125V18.6992"
                          stroke="black"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </form>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
