import { useAuth } from "../hooks";

function Navbar() {
  const auth = useAuth();
  return (
    <>
      <nav className="navbar px-5 py-3 bg-danger d-flex justify-content-between">
        <h3 className=" text-light">Voting App</h3>
        <ul>
          {auth.user && (
            <>
              <li className="nav-item">
                <div className="nav-link">{auth.user.name}</div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">
                  Logout
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
