export default function page(params) {
  return (
    <div class="container-fluid">
      <div class="bg-white p-3">
        <div class="mb-4">
          <p className="m-0 fs-5 text-black fw-bold text-capitalize">Perangkat Desa Panjeng</p>
          <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, odit.</p>
        </div>
        <table class="table" style={{ fontSize: '13px' }} >
          <thead>
            <tr className="text-uppercase" style={{ textWrap: 'nowrap' }}>
              <th scope="col">NIP</th>
              <th scope="col">Nama</th>
              <th scope="col">TTL</th>
              <th scope="col">Jenis Kelamin</th>
              <th scope="col">Jabatan</th>
              <th scope="col">Agama</th>
              <th scope="col">Golongan</th>
              <th scope="col">Pendidikan Terakhir</th>
              <th scope="col">Tahun Mulai</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">12381982739162</th>
              <td>Marwoto Supriadi</td>
              <td>Ponorogo, 29 April 1987</td>
              <td>Laki-Laki</td>
              <td>Sekretaris Desa</td>
              <td>Islam</td>
              <td>IA</td>
              <td>S1 Teknik Informatika</td>
              <td>2022</td>
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
