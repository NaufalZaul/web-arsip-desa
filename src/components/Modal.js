const Modal = {
  ModalReview: () => (
    <div class="modal fade" id="review" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">deskripsi kegiatan desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body p-4">
            <div class="">
              <img src="/Suasana Sosialisasi PSN.jpeg" height={300} className="w-100 object-fit-cover rounded" alt="" />
            </div>
            <div class="">
              <h3 className="fw-bold my-2">Lorem ipsum dolor sit amet.</h3>
              <div className="d-flex align-items-center mb-3">
                <p className="mb-0">23/06/2024</p>
                <i class="fas fa-circle mx-2" style={{ fontSize: '7px' }}></i>
                <p className="mb-0">TPS Panjeng</p>
              </div>
              <article className="" style={{ fontSize: '17px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum eaque perspiciatis est eius possimus fugiat soluta dolor, aliquid quaerat non laboriosam nemo fuga enim. Quaerat laudantium suscipit saepe dolore dicta error quibusdam totam quidem, quasi voluptate animi adipisci repellat harum aspernatur dolor aut laborum consequatur esse vitae sint numquam sapiente sed quas. Sit necessitatibus ea incidunt, esse mollitia minus dolore eius officia reiciendis et fuga quo vero nisi distinctio libero sint excepturi maxime consequatur ratione atque earum deleniti odio. Saepe neque ea dolorem, asperiores maiores iure praesentium dicta voluptates, aspernatur, dolores mollitia rem cupiditate. Natus qui illum dignissimos adipisci?</article>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditInformasiDesa: () => (
    <div class="modal fade" id="editInformasiDesa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">informasi desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Data Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Informasi Diri</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaDesa" placeholder="Edit Nama Desa" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaKecamatan" placeholder="Edit Nama Kecamatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat Tanggal Lahir</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaKabupaten" placeholder="Edit Nama Kabupaten" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="kepalaDesa" placeholder="Edit Nama Kepala Desa" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tentang Pekerjaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="luasDesa" placeholder="Edit Luas Desa" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="jumlahRT" placeholder="Edit Jumlah RT" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="number" id="jumlahRW" placeholder="Edit Jumlah RW" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditFotoKantor: () => (
    <div class="modal fade" id="editFotoKantor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="">
              <img className="w-100 rounded mb-3 object-fit-cover" height={200} src="/gethuk-golan.jpg" alt="" />
            </div>
            <form action="">
              <div class="mb-3">
                <label for="formFile" class="form-label">Edit Foto Kantor</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahPerangkat: () => (
    <div class="modal fade" id="tambahPerangkat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">perangkat desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Data Perangkat Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Informasi Diri</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="number" id="nip" placeholder="Masukkan NIP" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Nama Lengkap Perangkat Desa" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat Tanggal Lahir</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Masukkan Tempat Lahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Informasi Umum</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col-3 p-1">
                  <select class="form-select" aria-label="Default select example" style={{ backgroundColor: '#f9fafb' }}>
                    <option selected>Agama</option>
                    <option value="1">Islam</option>
                    <option value="2">Hindu</option>
                    <option value="3">Budha</option>
                    <option value="3">Katholik</option>
                    <option value="3">Kristen</option>
                    <option value="3">Lainnya</option>
                  </select>
                </div>
                <div class="col-4 p-1">
                  <select class="form-select" aria-label="Default select example" style={{ backgroundColor: '#f9fafb' }}>
                    <option selected>Jenis Kelamin</option>
                    <option value="1">Laki-Laki</option>
                    <option value="2">Perempuan</option>
                  </select>
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="pendidikanTerakhir" placeholder="Masukkan Pendidikan Terakhir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tentang Pekerjaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="jabatan" placeholder="Masukkan Jabatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="golongan" placeholder="Masukkan Golongan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="number" id="tahunDilantik" placeholder="Masukkan Tahun Dilantik" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditPerangkat: () => (
    <div class="modal fade" id="editPerangkat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">perangkat desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Data Perangkat Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Informasi Diri</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="number" id="nip" placeholder="Masukkan NIP" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Nama Lengkap Perangkat Desa" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat Tanggal Lahir</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Masukkan Tempat Lahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Informasi Umum</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col-3 p-1">
                  <select class="form-select" aria-label="Default select example" style={{ backgroundColor: '#f9fafb' }}>
                    <option selected>Agama</option>
                    <option value="1">Islam</option>
                    <option value="2">Hindu</option>
                    <option value="3">Budha</option>
                    <option value="3">Katholik</option>
                    <option value="3">Kristen</option>
                    <option value="3">Lainnya</option>
                  </select>
                </div>
                <div class="col-4 p-1">
                  <select class="form-select" aria-label="Default select example" style={{ backgroundColor: '#f9fafb' }}>
                    <option selected>Jenis Kelamin</option>
                    <option value="1">Laki-Laki</option>
                    <option value="2">Perempuan</option>
                  </select>
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="pendidikanTerakhir" placeholder="Masukkan Pendidikan Terakhir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tentang Pekerjaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="jabatan" placeholder="Masukkan Jabatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="golongan" placeholder="Masukkan Golongan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="number" id="tahunDilantik" placeholder="Masukkan Tahun Dilantik" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahKegiatan: () => (
    <div class="modal fade" id="tambahKegiatan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">kegiatan desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Publikasi Kegiatan Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Foto Kegiatan dan Judul Kegiatan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="file" id="formFile" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Judul Kegiatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat dan Tanggal Pelaksanaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Tempat Pelaksanaan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Deskripsi Kegiatan</p>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditKegiatan: () => (
    <div class="modal fade" id="editKegiatan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">kegiatan desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Publikasi Kegiatan Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Foto Kegiatan dan Judul Kegiatan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="file" id="formFile" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Judul Kegiatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat dan Tanggal Pelaksanaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Tempat Pelaksanaan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Deskripsi Kegiatan</p>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                <label for="floatingTextarea2"></label>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahGaleri: () => (
    <div class="modal fade" id="tambahGaleri" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">galeri desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Galeri Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Foto Kegiatan dan Judul Kegiatan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="file" id="formFile" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Judul Kegiatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat dan Tanggal Pelaksanaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Tempat Pelaksanaan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditGaleri: () => (
    <div class="modal fade" id="editGaleri" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content text-black">
          <div class="modal-header">
            <h1 class="modal-title fs-6 fw-bold text-capitalize" id="exampleModalLabel">galeri desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ fontSize: '15px' }}></button>
          </div>
          <div class="modal-body px-5 py-3">
            <div class="border-bottom mb-3 py-2">
              <h2 className="fw-bold">Galeri Desa Panjeng</h2>
              <p>Masukkan data sesuai dengan data pribadi perangkat Desa Panjeng!</p>
            </div>
            <form action="">
              <p className="fw-bold mb-2">Foto Kegiatan dan Judul Kegiatan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="file" id="formFile" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="text" id="namaLengkap" placeholder="Judul Kegiatan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
              <p className="fw-bold mb-2">Tempat dan Tanggal Pelaksanaan</p>
              <div class="row gap-2 mb-3 px-2">
                <div class="col p-1">
                  <input class="form-control" type="text" id="tempatLahir" placeholder="Tempat Pelaksanaan" style={{ backgroundColor: '#f9fafb' }} />
                </div>
                <div class="col p-1">
                  <input class="form-control" type="date" id="tanggalLahir" style={{ backgroundColor: '#f9fafb' }} />
                </div>
              </div>
            </form>
            <div class="text-end my-4">
              <button type="button" class="btn btn-primary px-4 shadow-sm">Simpan data</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
export default Modal;