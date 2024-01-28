const ButtonModal = {
  ButtonReview: () => (
    <button type="button" className="border-0 bg-transparent text-primary p-0" data-bs-toggle="modal" data-bs-target="#review" style={{ fontSize: '15px' }}>
      <p className="m-0">lihat kegiatan</p>
    </button>
  ),
  ButtonEditInformasiDesa: () => (
    <button type="button" className="btn btn-info d-flex align-items-center mr-2" data-bs-toggle="modal" data-bs-target="#editInformasiDesa" style={{ fontSize: '15px' }}>
      <p className="m-0">Edit Informasi</p>
    </button>
  ),
  ButtonEditFotoKantor: () => (
    <button type="button" className="btn btn-info d-flex align-items-center mr-2" data-bs-toggle="modal" data-bs-target="#editFotoKantor" style={{ fontSize: '15px' }}>
      <p className="m-0">Edit Foto</p>
    </button>
  ),
  ButtonTambahPerangkat: () => (
    <button type="button" className="btn btn-info d-flex align-items-center mr-2" data-bs-toggle="modal" data-bs-target="#tambahPerangkat" style={{ fontSize: '15px' }}>
      <p className="m-0">Tambah data</p>
    </button>
  ),
  ButtonEditPerangkat: () => (
    <button type="button" className="dropdown-item" data-bs-toggle="modal" data-bs-target="#editPerangkat" style={{ fontSize: '15px' }}>
      <i class="fas fa-pen mr-2 text-gray-400"></i>
      Edit
    </button>
  ),
  ButtonTambahKegiatan: () => (
    <button type="button" className="btn btn-info mr-2 px-3" data-bs-toggle="modal" data-bs-target="#tambahKegiatan">
      Tambah data
    </button>
  ),
  ButtonTambahGaleri: () => (
    <button type="button" className="btn btn-info d-flex align-items-center mr-2" data-bs-toggle="modal" data-bs-target="#tambahGaleri" style={{ fontSize: '15px' }}>
      <i class="fas fa-plus mr-2"></i>
      <p className="m-0">Tambah</p>
    </button>
  ),
}

export default ButtonModal;