import SearchBar from "@/components/SearchBar";

export default function page() {
  return (
    <div class="container-fluid">
      <div class="mb-4">
        <h2 class="h5 fw-bold mb-0 text-gray-800">Analisis Data</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>

        <div class="d-flex">
          <div class="col-3 mb-4 px-0">
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div class="mt-4">
                      <p className="m-0" style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 mb-4 px-0">
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body border-left">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div class="mt-4">
                      <p className="m-0" style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 mb-4 px-0">
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body border-left">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div class="mt-4">
                      <p className="m-0" style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3 mb-4 px-0">
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body border-left">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Earnings (Monthly)
                    </div>
                    <div class="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                    <div class="mt-4">
                      <p className="m-0" style={{ fontSize: '14px' }}>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h2 class="h5 fw-bold mb-0 text-gray-800">Pengajuan Surat</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
        <div class="bg-white p-3">
          <div class="d-flex justify-content-between">
            <SearchBar />
            <button type="button" className="btn btn-info d-flex align-items-center" style={{ fontSize: '13px' }}>
              <i class="fas fa-filter mr-2"></i>
              <p className="m-0">Filter</p>
            </button>
          </div>
          <table class="table mt-3" style={{ fontSize: '15px' }}>
            <thead>
              <tr className="text-uppercase bg-secondary">
                <th scope="col">no</th>
                <th scope="col">nama</th>
                <th scope="col">keperluan</th>
                <th scope="col">jenis surat</th>
                <th scope="col">tanggal</th>
                <th scope="col">status</th>
                <th scope="col">surat</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Naufal Zaul Karim</td>
                <td>Surat Perijinan</td>
                <td>Surat Ijin Buka Usaha</td>
                <td>3 Maret 2023</td>
                <td>Diproses</td>
                <td><a href="http://">lihat surat</a></td>
                <td>
                  <div class="dropdown no-arrow">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-print mr-2 text-gray-400"></i>
                        Cetak
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-pen mr-2 text-gray-400"></i>
                        Ubah
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-trash-alt mr-2 text-gray-400"></i>
                        Hapus
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Naufal Zaul Karim</td>
                <td>Surat Perijinan</td>
                <td>Surat Ijin Buka Usaha</td>
                <td>3 Maret 2023</td>
                <td>Diproses</td>
                <td><a href="http://">lihat surat</a></td>
                <td>
                  <div class="dropdown no-arrow">
                    <a
                      class="dropdown-toggle"
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-print mr-2 text-gray-400"></i>
                        Cetak
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-pen mr-2 text-gray-400"></i>
                        Ubah
                      </a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">
                        <i class="fas fa-trash-alt mr-2 text-gray-400"></i>
                        Hapus
                      </a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div >
    </div >
  )
};
