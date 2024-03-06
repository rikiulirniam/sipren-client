import { useEffect, useState } from "react";
import { AuthGuard } from "../Auth";
import Navbar from "../components/Navbar";
import { useAuth, useAxios } from "../hooks";
import { Link, useNavigate } from "react-router-dom";
import CreateForm from "./CreateForm";
function Home() {
  const axios = useAxios();
  const [forms, setForms] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`/forms`)
      .then((res) => {
        setForms(res.data.forms);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      <div className="container">
        {/* Render forms data */}
        <div className="container forms row row-col-12 place-items-center">
          {forms.length != 0 ? (
            <>
              <h1 className="p-3">All Forms</h1>
              <span>
                <button
                  className="btn btn-primary my-2"
                  onClick={() => navigate("/create-form")}
                >
                  + Add Form
                </button>
              </span>
              {forms.map((form) => (
                <div className="col-md-3">
                  <div className="card overflow-hidden" key={form.id}>
                    <h5 className=" bg-primary text-light p-2 px-4">
                      <Link to={`/forms/${form.slug}`}>{form.name}</Link>
                    </h5>
                    <p className="px-3">{form.description}</p>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h5 className="p-4">You don't have form created yet.</h5>
            </>
          )}
        </div>
      </div>
    </AuthGuard>
  );
}

export default Home;
