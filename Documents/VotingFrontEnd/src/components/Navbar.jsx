import { useAuth } from "../hooks";
import "../assets/animate";
import { Link } from "react-router-dom";
import { all } from "axios";

function Navbar() {
  const auth = useAuth();
  return (
    <>
      <nav className="navbar px-5 py-3 bg-danger d-flex justify-content-between">
        <h3 className="heading-nav text-light" data-text-value="Voting App">
          Voting App
        </h3>
        <ul>
          {auth.user && (
            <div className="d-flex list-unstyled">
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/me">
                  <h1>{auth.user}</h1>
                </Link>
              </li>
              <li className="nav-item mx-1">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
