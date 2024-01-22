import ButtonModal from "@/components/ButtonModal"
import Modal from "@/components/Modal"


export default function page({ params }) {
  return (
    <div class="container-fluid mb-4">
      <div class="d-flex gap-3">
        <div class="col-5 d-flex flex-column justify-content-between bg-white p-3">
          <div class="">
            <h2 class="h5 fw-bold mb-0 text-black">Foto Kantor Desa</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
          </div>
          <div class="w-100">
            <img src="/gethuk-golan.jpg" className="w-100" alt="" />
          </div>
          <div class="mt-3">
            <ButtonModal.ButtonEditFotoKantor />
            <Modal.ModalEditFotoKantor />
          </div>
        </div>
        <div class="col d-flex flex-column justify-content-between bg-white p-3">
          <div class="">
            <h2 class="h5 fw-bold mb-0 text-black">Tentang Desa</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, nobis!</p>
          </div>
          <div class="">
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
          <div class="mt-3">
            <ButtonModal.ButtonEditInformasiDesa />
            <Modal.ModalEditInformasiDesa />
          </div>
        </div>
      </div>
    </div>
  )
};
