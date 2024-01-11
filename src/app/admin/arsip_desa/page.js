import Link from 'next/link';

export default function page({ params }) {
  const jenisSurat = ['surat perijinan', 'surat rekomendasi', 'surat keterangan', 'surat khusus']
  return (
    <div class="container-fluid">
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Arsip Desa</h1>
      </div>

      <div class="d-flex">
        <div class="col-3 mb-4">
          <Link href="/admin/arsip_desa/[list]" as={`/admin/arsip_desa/surat perijinan`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Perijinan</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-gray-800">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-3 mb-4">
          <Link href="/admin/arsip_desa/[list]" as={`/admin/arsip_desa/surat rekomendasi`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Rekomendasi</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-gray-800">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-3 mb-4">
          <Link href="/admin/arsip_desa/[list]" as={`/admin/arsip_desa/surat keterangan`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Keterangan</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-gray-800">
                      1000
                      <p className="fw-normal ms-2 mb-0 " style={{ fontSize: '16px' }}>file</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div class="col-3 mb-4">
          <Link href="/admin/arsip_desa/[list]" as={`/admin/arsip_desa/surat khusus`}>
            <div class="bg-white h-100 py-2 rounded-0">
              <div class="card-body">
                <div class="no-gutters align-items-center">
                  <div class="mr-2">
                    <div class="text-capitalize mb-3">
                      <p className="mb-1" style={{ fontSize: '14px' }}>Arsip Desa</p>
                      <h5 className="fw-bold text-black" style={{ fontSize: '17px' }}>Surat Khusus</h5>
                    </div>
                    <div class="d-flex align-items-end h5 mb-0 font-weight-bold text-gray-800">
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

      <div class="bg-white p-3">
        <div class="mb-4">
          <p className="m-0 fs-5 text-black fw-bold text-capitalize">baru saja ditambahkan</p>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, odit.</p>
        </div>
        <table class="table" style={{ fontSize: '14px' }} >
          <thead>
            <tr className="text-uppercase" style={{ textWrap: 'nowrap' }}>
              <th scope="col">Nomor Surat</th>
              <th scope="col">Judul</th>
              <th scope="col">Jenis Surat</th>
              <th scope="col">Tanggal Masuk</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12381982739162</th>
              <td>Surat perijinan buka usaha</td>
              <td>Surat perijinan</td>
              <td>29 April 2023</td>
              <td className="nav-item dropdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                  <span class="mr-2 d-none d-lg-inline text-gray-600 small" >
                    <i class="fas fa-ellipsis-v"></i>
                  </span>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-trash-alt mr-2 text-gray-400"></i>
                    Hapus
                  </a>
                  <a class="dropdown-item" href="#">
                    <i class="fas fa-pen mr-2 text-gray-400"></i>
                    Ubah
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
};
