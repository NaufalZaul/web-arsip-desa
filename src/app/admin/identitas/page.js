import ButtonModal from "@/components/ButtonModal"
import Modal from "@/components/Modal"


export default function page({ params }) {
  return (
    <div class="container-fluid mb-4">
      <div class="d-flex gap-3">
        <div class="col-5 border bg-white rounded shadow-sm p-0">
          <div class="d-flex justify-content-between align-items-center border-bottom px-3 py-2" style={{ backgroundColor: '#f3f4f6' }}>
            <div class="">
              <h5 class="fw-bold mb-0 text-black">Foto Kantor Desa</h5>
              <p className="m-0">Ubah foto Kantor Desa Panjeng</p>
            </div>
            <div class="">
              <ButtonModal.ButtonEditFotoKantor />
              <Modal.ModalEditFotoKantor />
            </div>
          </div>
          <div class="w-100 p-3">
            <img src="/gethuk-golan.jpg" className="w-100 rounded" alt="" />
          </div>
        </div>
        <div class="col border bg-white rounded shadow-sm p-0">
          <div class="d-flex justify-content-between align-items-center border-bottom px-3 py-2" style={{ backgroundColor: '#f3f4f6' }}>
            <div class="">
              <h5 class="fw-bold mb-0 text-black">Tentang Desa</h5>
              <p className="m-0">Ubah informasi Desa Panjeng</p>
            </div>
            <ButtonModal.ButtonEditInformasiDesa />
            <Modal.ModalEditInformasiDesa />
          </div>
          <div class="p-3">
            <table class="table" >
              <tbody>
                <tr>
                  <td className="border-0 py-2">Nama Desa</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">Panjeng</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Nama Kecamatan</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">Jenangan</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Nama Kabupaten</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">Ponorogo</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Kepala Desa</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">Arif Zuniarto</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Luas Desa</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">1000 m</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Jumlah RT</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">50</td>
                </tr>
                <tr>
                  <td className="border-0 py-2">Jumlah RW</td>
                  <td className="border-0 py-2">:</td>
                  <td className="border-0 py-2">10</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};
