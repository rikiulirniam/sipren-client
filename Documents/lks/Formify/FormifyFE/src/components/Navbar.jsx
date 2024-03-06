import { Link } from "react-router-dom";
import { useAuth } from "../hooks";

function Navbar() {
  const auth = useAuth();
  console.log(auth);
  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container container-fluid">
          <Link to="/" className="nav-link">
            <h2>Formify</h2>
          </Link>
          <ul className="navbar nav d-flex">
            {auth.user && <li className="nav-item px-2">{auth.user.name}</li>}
            <li className="nav-item px-2">
              <Link className="text-light text-decoration-none" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
