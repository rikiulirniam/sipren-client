import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { AuthGuard } from "../../utils/AuthGuard";

export function PresensiStarted() {
  return (
    <AuthGuard>
      <Navbar />
      <Sidebar />
      <div className="main">
        <table className="table">
          <thead>
            <tr>
              <th>Nama Siswa</th>
              <th>Keterangan</th>
            </tr>
          </thead>
        </table>
      </div>
    </AuthGuard>
  );
}
