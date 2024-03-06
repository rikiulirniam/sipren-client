import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth, useAxios } from "../hooks";
import { AuthGuard } from "../Auth";
import Navbar from "../components/Navbar";

function DetailForms() {
  const axios = useAxios();
  const { formSlug } = useParams();
  const [formDetail, setFormDetail] = useState(null); // Nilai awal diatur ke null
  const auth = useAuth();

  useEffect(() => {
    axios
      .get(`/forms/${formSlug}`)
      .then((res) => {
        setFormDetail(res.data.form);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }, []);

  return (
    <AuthGuard>
      <Navbar />
      {formDetail && ( // Menampilkan konten hanya jika formDetail sudah tersedia
        <div className="container">
          <h1>{formDetail.name}</h1>
          <h1>{formDetail.description}</h1>
          <h1>{formDetail.allowed_domains.domain}</h1>
          <h1>{formDetail.creator.name}</h1>
          <ol>
            {formDetail.question.map((question, i) => (
              <li key={i}>{question.name}</li>
            ))}
          </ol>
        </div>
      )}
    </AuthGuard>
  );
}
export default DetailForms;
