export default function Page() {
  return (
    <div class="p-5">

      <div class="d-flex justify-content-center mt-4">

        <div class="border border-end-0 p-4" style={{ width: '40%', background: '#eee' }}>
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

        <div class="w-100 border border-start-0 p-4">
          <h5 className="fw-semibold">Lengkapi formulir sesuai dengan inputan yang tersedia</h5>
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">NIK</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="34314134235245234" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nama lengkap</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Alamat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Kecamatan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Kabupaten</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">No. Telp</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Agama</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Pekerjaan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Kewarganegaraan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Keperluan pengajuan</label>
              <div class="form-floating">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};
