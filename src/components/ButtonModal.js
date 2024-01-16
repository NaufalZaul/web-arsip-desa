const ButtonModal = {
  ButtonReview: () => (
    <button type="button" className="border-0 bg-transparent text-primary p-0" data-bs-toggle="modal" data-bs-target="#review" style={{ fontSize: '15px' }}>
      <p className="m-0">lihat kegiatan</p>
    </button>
  ),
  ButtonTambahKegiatan: () => (
    <button type="button" className="btn btn-info d-flex align-items-center mr-2" data-bs-toggle="modal" data-bs-target="#tambahKegiatan" style={{ fontSize: '15px' }}>
      <i class="fas fa-plus mr-2"></i>
      <p className="m-0">Tambah</p>
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