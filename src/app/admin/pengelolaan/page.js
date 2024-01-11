import AdminLayout from "../layout"

export default function page({ params }) {
  return (
    <div class="container-fluid">
      <div class="bg-white p-3">
        <div class="mb-4">
          <p className="m-0 fs-5 text-dark fw-bold text-capitalize">Aktivitas Pengguna</p>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, odit.</p>
        </div>
        <table class="table" style={{ fontSize: '13px' }} >
          <thead>
            <tr className="text-uppercase">
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Jenis Surat</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
};
