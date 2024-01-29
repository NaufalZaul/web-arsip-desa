import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

export default function Page() {
  return (
    <div class="">
      <Navbar />
      <div class="p-5 text-black">
        <div class="text-center mb-5">
          <h2 className="fw-bold">Pelayanan Desa</h2>
          <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet?</p>
        </div>
        <div class="d-flex justify-content-center shadow-sm rounded-2">
          <div class="border border-end-0 p-4 rounded-start-2" style={{ width: '40%', background: '#eee' }}>
            <form>
              <div class="">
                <img src="/undraw_mobile_content_xvgr.png" className="w-100 mb-4" alt="" />
                <h4 className="fw-bold">Layanan Persuratan Desa Panjeng</h4>
                <p>Menyediakan layanan berbagai bentuk persuratan untuk diajukan kepada Kepala Desa Panjeng</p>
              </div>
              <div class="my-4">
                <select class="form-select" aria-label="Default select example">
                  <option selected>Pilih jenis persuratan</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary shadow-sm px-4">Pilih surat</button>
            </form>
          </div>

          <div class="w-100 border border-start-0 rounded-end-2 p-4">
            <h5 className="fw-semibold mb-4">Lengkapi formulir sesuai dengan inputan yang tersedia</h5>
            <form>
              <div class="row mb-3">
                <div class="col">
                  <label for="namaLengkap" class="form-label">Nama lengkap</label>
                  <input type="number" class="form-control" id="namaLengkap" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
                </div>
                <div class="col">
                  <label for="nomorTelp" class="form-label">No. Telp</label>
                  <input type="number" class="form-control" id="nomorTelp" aria-describedby="emailHelp" placeholder="089128381989" />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="inputGroupFile01" class="form-label fw-bold">Masukkan Scan KTP</label>
                  <input type="file" class="form-control w-100" id="inputGroupFile01" />
                </div>
                <div class="col">
                  <label for="inputGroupFile01" class="form-label fw-bold">Masukkan Scan Surat RT</label>
                  <input type="file" class="form-control w-100" id="inputGroupFile02" />
                </div>
                <div class="col">
                  <label for="inputGroupFile01" class="form-label fw-bold">Masukkan Scan KK</label>
                  <input type="file" class="form-control w-100" id="inputGroupFile02" />
                </div>
              </div>
              {/* 
                <div class="col">
                  <label for="nik" class="form-label">NIK</label>
                  <input type="number" class="form-control" id="nik" aria-describedby="emailHelp" placeholder="34314135245234" />
                </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="agama" class="form-label">Agama</label>
                  <select id="agama" class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div class="col">
                  <label for="pekerjaan" class="form-label">Pekerjaan</label>
                  <input type="text" class="form-control" id="pekerjaan" aria-describedby="emailHelp" placeholder="Programmer" />
                </div>
                <div class="col">
                  <label for="kewarganegaraan" class="form-label">Kewarganegaraan</label>
                  <select id="kewarganegaraan" class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row mb-3">
                <div class="col">
                  <label for="alamat" class="form-label">Alamat</label>
                  <input type="text" class="form-control" id="alamat" aria-describedby="emailHelp" placeholder="Lorem ipsum dolor sit amet." />
                </div>
                <div class="col">
                  <label for="kecamatan" class="form-label">Kecamatan</label>
                  <input type="email" class="form-control" id="kecamatan" aria-describedby="emailHelp" placeholder="Jenangan" />
                </div>
                <div class="col">
                  <label for="kabupaten" class="form-label">Kabupaten</label>
                  <input type="email" class="form-control" id="kabupaten" aria-describedby="emailHelp" placeholder="Ponorogo" />
                </div>
              </div>
              */}
              <div class="mb-3">
                <label for="keperluan" class="form-label">Keperluan pengajuan</label>
                <div class="form-floating">
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
