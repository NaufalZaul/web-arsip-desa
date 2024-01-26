'use client';
import SearchBar from "@/components/SearchBar";
import PrintPDF from "./printPDF";

export default function page() {
  return (
    <div class="container-fluid text-black">
      <div class="">
        <h4 class="fw-bold mb-3">Analisis Data</h4>
        <div class="d-flex rounded-start">
          <div class="col-3 mb-4 px-0 rounded-start">
            <div class="bg-white h-100 py-2 rounded-start">
              <div class="card-body rounded-start">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Total pengajuan
                    </div>
                    <div class="h5 mb-0 font-weight-bold">
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
                      Total Terbitan Berita
                    </div>
                    <div class="h5 mb-0 font-weight-bold">
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
                      Total Pengajuan Ditolak
                    </div>
                    <div class="h5 mb-0 font-weight-bold">
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
          <div class="col-3 mb-4 px-0 rounded-end">
            <div class="bg-white h-100 py-2 rounded-end">
              <div class="card-body border-left rounded-end">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-1">
                      Total Pengajuan Disetujui
                    </div>
                    <div class="h5 mb-0 font-weight-bold">
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
        <div class="bg-white p-3 rounded">
          <h5 class="fw-bold mb-0">Pengajuan Surat</h5>
          <p>Kelola pengajuan surat yang diajukan oleh masyarakat</p>
          <div class="text-center my-4">
            <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 w-50 navbar-search" >
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Cari surat sesuai dengan nama pengajuan" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-primary" type="button" id="button-addon2">Cari surat</button>
              </div>
            </form>
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
                      <PrintPDF />
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
                      <PrintPDF />
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
          <div class="mt-4">
            <nav aria-label="...">
              <ul class="pagination justify-content-end mb-0">
                <li class="page-item disabled">
                  <a class="page-link" style={{ fontSize: '13px' }}>Previous</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>1</a>
                </li>
                <li class="page-item" aria-current="page">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div >
    </div >
  )
};
