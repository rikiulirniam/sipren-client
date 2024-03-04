import { useEffect, useState } from "react";
import { AuthGuard } from "../Auth";
import Navbar from "../components/Navbar";
import { useAuth, useAxios } from "../hooks";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const [title, setTitle] = useState();
  const [slug, setSlug] = useState();
  const [allowed, setAllowed] = useState([]);
  const [desc, setDesc] = useState();
  const [limitOne, setLimitOne] = useState();
  const navigate = useNavigate();

  const auth = useAuth();
  const axios = useAxios();

  function makeSlug(slug) {
    return slug ? slug.toLowerCase().replace(/\s+/g, "-") : "";
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("/forms?token=" + auth.user.user.api_token, {
        name: title,
        slug,
        allowed_domains: allowed,
        description: desc,
        limit_one_response: limitOne, 
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setSlug(makeSlug(title));
    console.log(limitOne);
  }, [title, limitOne]);

  return (
    <AuthGuard>
      <Navbar />
      <div className="container">
        <h1 className="p-3">Create a New Form</h1>
        <div className="create-form-container">
          <form
            className="d-flex flex-column justify-content-center align-items-center border p-3"
            onSubmit={handleSubmit}
          >
            <div className="create-form-input d-flex justify-content-between p-3">
              <label className="fs-6" htmlFor="title">
                Form title
              </label>
              <input
                className="fs-4 p-2"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="create-form-input d-flex justify-content-between p-3">
              <label className="fs-6" htmlFor="desc">
                Description
              </label>
              <textarea
                className="fs-4 p-2"
                id="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <div className="form-input-checkbox align-self-start d-flex justify-content-between p-3">
              <label className="fs-6" htmlFor="limitOne">
                Limit one response
              </label>
              <input
                className="fs-2 checkbox "
                type="checkbox"
                id="limitOne"
                checked={limitOne}
                onChange={(e) => setLimitOne(e.target.checked)}
              />
            </div>
            <button
              className="btn btn-success align-self-end px-4"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </AuthGuard>
  );
}
export default CreateForm;
