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