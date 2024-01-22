export default function Footer(params) {
  return (
    <div class="bg-dark-teal">
      <div class="border-bottom py-5">
        <a class="navbar-brand d-flex align-items-center justify-content-center " href="#">
          <img
            src={"/cropped-Logo-Cilacap 2.png"}
            class="me-3"
            width="70"
            alt=""
          />
          <h5 class="text-uppercase text-white fs-4 fw-bold">pusat pelayanan desa panjeng</h5>
        </a>
      </div>
      <div class="d-flex justify-content-between text-white px-5 py-3">
        <p>Copyright 2024</p>
        <p>Desa Panjeng, Kabupaten Ponorogo</p>
      </div>
    </div>
  )
};
