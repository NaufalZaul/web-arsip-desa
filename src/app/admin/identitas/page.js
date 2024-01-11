export default function page({ params }) {
  return (
    <div class="container-fluid mb-4">
      <div class="bg-white p-3">
        <div class="mb-4 bg-info" style={{ height: '200px' }}>
          <p className="fs-4 fw-bold text-black mb-0">Informasi Desa</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, earum!</p>
        </div>
        <div class="row gap-2 p-3">
          <div class="col-3 border py-2">
            <p className="fw-bold fs-5 text-black">Profil Desa Panjeng</p>
            <div class="w-100">
              <img src="/gethuk-golan.jpg" className="w-100" alt="" />
            </div>
            <p className="mt-2 mb-0">Foto Kantor Desa panjeng</p>
            <p className="">2024</p>
            <div class="text-black">
              <p className="fw-bold fs-5 mb-1">Desa Panjeng</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet doloribus sunt ullam nulla consequuntur id dolor voluptatum maxime minus expedita?</p>
            </div>
            <div class="">
              <button type="button" className="btn btn-primary ">Edit profil</button>
            </div>
          </div>
          <div class="col border">

          </div>
        </div>

        {/* <form>
          <div class="mb-3">
            <div class="text-center">
              <img src="/gethuk-golan.jpg" width="400" alt="" />
              <h6 className="mt-3">Kantor Desa Panjeng</h6>
            </div>
            <label for="exampleInputEmail1" class="form-label">Foto Kantor Desa</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="34314134235245234" />
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Nama Desa</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="34314134235245234" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Kode Desa</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Nama Kepala Desa</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Alamat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Nomor Telp Desa</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Kecamatan</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Nama Camat</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
            <div class="col">
              <label for="exampleInputEmail1" class="form-label">Kabupaten</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Maulana Ilyas" />
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Tentang Desa</label>
            <div class="form-floating">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form> */}
      </div>
    </div>
  )
};
