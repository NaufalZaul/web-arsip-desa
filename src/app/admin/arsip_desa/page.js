import SearchBar from '@/components/SearchBar';
import Link from 'next/link';

export default function page({ params }) {
  const jenisSurat = ['surat perijinan', 'surat rekomendasi', 'surat keterangan', 'surat khusus']
  return (
    <div class="container-fluid">
      <h2 class="h5 fw-bold mb-0 text-black">Arsip Desa</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>


      <div class="d-flex w-100">
        <div class="col p-0 mb-4 me-1">
          <Link href="/admin/arsip_desa/[list]" className='link-offset-2 link-underline link-underline-opacity-0' as={`/admin/arsip_desa/surat perijinan`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Perijinan</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-black">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col p-0 mb-4 me-1">
          <Link href="/admin/arsip_desa/[list]" className='link-offset-2 link-underline link-underline-opacity-0' as={`/admin/arsip_desa/surat rekomendasi`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Rekomendasi</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-black">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col p-0 mb-4 me-1">
          <Link href="/admin/arsip_desa/[list]" className='link-offset-2 link-underline link-underline-opacity-0' as={`/admin/arsip_desa/surat keterangan`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Keterangan</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-black">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col p-0 mb-4">
          <Link href="/admin/arsip_desa/[list]" className='link-offset-2 link-underline link-underline-opacity-0' as={`/admin/arsip_desa/surat khusus`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Khusus</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-black">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div class="bg-white rounded shadow-sm mb-4 p-3">
        <h2 class="h5 fw-bold mb-0 text-black">Pengajuan Surat</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
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
              <th scope="col">no. surat</th>
              <th scope="col">nama</th>
              <th scope="col">jenis surat</th>
              <th scope="col">tanggal</th>
              <th scope="col">surat</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1198264917238</th>
              <td>Naufal Zaul Karim</td>
              <td>Surat Perijinan</td>
              <td>3 Maret 2023</td>
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
