import { Component } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

export class DataPresensi extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Sidebar />

        <div className="main">
          <table className="w-full table">
            <thead>
              <tr>
                <th>Nama Siswa</th>
                <th>Nama </th>
              </tr>
            </thead>
          </table>
        </div>
      </>
    );
  }
}
