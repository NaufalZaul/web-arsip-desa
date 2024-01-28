const Modal = {
  ModalReview: () => (
    <div class="modal fade" id="review" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalEditInformasiDesa: () => (
    <div class="modal fade" id="editInformasiDesa" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="namaKegiatan" class="form-label">Nama Kegiatan</label>
                <input class="form-control" type="text" id="namaKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tempatKegiatan" class="form-label">Tempat Kegiatan</label>
                <input class="form-control" type="text" id="tempatKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tanggalKegiatan" class="form-label">Tanggal Pelaksanaan</label>
                <input class="form-control" type="date" id="tanggalKegiatan" />
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
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Tambahkan Kegiatan</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="formFile" class="form-label">Masukkan Foto Kegiatan</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="mb-3">
                <label for="namaKegiatan" class="form-label">Nama Kegiatan</label>
                <input class="form-control" type="text" id="namaKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tempatKegiatan" class="form-label">Tempat Kegiatan</label>
                <input class="form-control" type="text" id="tempatKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tanggalKegiatan" class="form-label">Tanggal Pelaksanaan</label>
                <input class="form-control" type="date" id="tanggalKegiatan" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Tambahkan</button>
          </div>
        </div>
      </div>
    </div>
  ),
  ModalTambahGaleri: () => (
    <div class="modal fade" id="tambahGaleri" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Galeri Desa</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="">
              <div class="mb-3">
                <label for="formFile" class="form-label">Masukkan Foto Kegiatan</label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <div class="mb-3">
                <label for="namaKegiatan" class="form-label">Nama Kegiatan</label>
                <input class="form-control" type="text" id="namaKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tempatKegiatan" class="form-label">Tempat Kegiatan</label>
                <input class="form-control" type="text" id="tempatKegiatan" />
              </div>
              <div class="mb-3">
                <label for="tanggalKegiatan" class="form-label">Tanggal Pelaksanaan</label>
                <input class="form-control" type="date" id="tanggalKegiatan" />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
            <button type="button" class="btn btn-primary">Tambahkan</button>
          </div>
        </div>
      </div>
    </div>
  ),
}
export default Modal;