'use client';
import ButtonModal from "@/components/ButtonModal"
import Modal from "@/components/Modal"
import SearchBar from "@/components/SearchBar"

export default function page({ params }) {
  return (
    <div class="container-fluid">
      <div class="bg-white p-3 rounded shadow-sm">
        <h5 class="fw-bold mb-0 text-black">Kelola Kegiatan</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
        <div class="d-flex justify-content-between align-items-center my-4">
          <form class="d-none d-sm-inline-block form-inline my-2 my-md-0 w-50 navbar-search" >
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Cari surat sesuai dengan nama pengajuan" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-primary" type="button" id="button-addon2">Cari surat</button>
            </div>
          </form>
          <ButtonModal.ButtonTambahKegiatan />
          <Modal.ModalTambahKegiatan />
        </div>
        <table class="table mt-3" style={{ fontSize: '15px' }}>
          <thead>
            <tr className="text-uppercase bg-secondary">
              <th scope="col">no</th>
              <th scope="col">nama kegiatan</th>
              <th scope="col">tempat</th>
              <th scope="col">tanggal</th>
              <th scope="col">review</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Sosialisasi pembuatan bibit padi</td>
              <td>TPS Desa Panjeng</td>
              <td>3 Maret 2023</td>
              <td>
                <ButtonModal.ButtonReview />
                <Modal.ModalReview />
              </td>
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
              <th>2</th>
              <td>Sosialisasi pembuatan bibit padi</td>
              <td>TPS Desa Panjeng</td>
              <td>3 Maret 2023</td>
              <td>
                <ButtonModal.ButtonReview />
                <Modal.ModalReview />
              </td>
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
        <div class="my-4">
          <nav aria-label="...">
            <ul class="pagination justify-content-end mb-0">
              <li class="page-item disabled">
                <a class="page-link" style={{ fontSize: '13px' }}>Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" style={{ fontSize: '13px' }}>1</a>
              </li>
              <li class="page-item active" aria-current="page">
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

      <div class="bg-white p-3 my-4 rounded shadow-sm">
        <h5 class=" fw-bold mb-0 text-black">Kelola Galeri Desa</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
        <div class="d-flex justify-content-between align-items-center my-4">
          <form class="d-none d-sm-inline-block form-inline my-2 my-md-0 w-50 navbar-search" >
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Cari surat sesuai dengan nama pengajuan" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button class="btn btn-primary" type="button" id="button-addon2">Cari surat</button>
            </div>
          </form>
          <ButtonModal.ButtonTambahGaleri />
          <Modal.ModalTambahGaleri />
        </div>
        <table class="table mt-3" style={{ fontSize: '15px' }}>
          <thead>
            <tr className="text-uppercase bg-secondary">
              <th scope="col">no</th>
              <th scope="col">foto kegiatan</th>
              <th scope="col">nama kegiatan</th>
              <th scope="col">tempat</th>
              <th scope="col">tanggal</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>
                <img src="/gethuk-golan.jpg" width='300px' height='200px' alt="" style={{ objectFit: 'cover' }} />
              </td>
              <td>Sosialisasi pembuatan bibit padi</td>
              <td>TPS Desa Panjeng</td>
              <td>3 Maret 2023</td>
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
              <th>2</th>
              <td>
                <img src="/gethuk-golan.jpg" width='300px' height='200px' alt="" style={{ objectFit: 'cover' }} />
              </td>
              <td>Sosialisasi pembuatan bibit padi</td>
              <td>TPS Desa Panjeng</td>
              <td>3 Maret 2023</td>
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
        <div class="my-4">
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
    </div>
  )
};
