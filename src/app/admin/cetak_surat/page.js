export default function page() {
  return (
    <div class="container-fluid">
      <div class="bg-white p-3">
        <div class="d-sm-flex align-items-center justify-content-between">
          <div class="">
            <p className="m-0 fs-5 text-dark fw-bold text-capitalize">Aktivitas Pengguna</p>
            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, odit.</p>
          </div>
          <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
            <i class="fas fa-download fa-sm text-white-50"></i>
            Generate Report
          </a>

        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
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
    </div >
  )
};
