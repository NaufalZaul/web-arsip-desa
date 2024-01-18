import Navbar from "@/components/Navbar";
import SliderPerangkat from "@/components/SliderPerangkat"

export default function Page() {
  const sliderItems = [
    { imageUrl: '/gethuk-golan.jpg' },
    { imageUrl: '/3324136.jpg' },
    { imageUrl: '/tp201-sasi-21.jpg' },
    { imageUrl: '/8270297.jpg' },
    { imageUrl: '/SL-113022-54210-29.jpg' },
  ];
  return (
    <div class="">
      <Navbar />
      <div class="min-vh-100 bg-primary d-flex justify-content-center align-items-center">
        <div class="text-black p-5">
          <h1 className="fw-bold" style={{ fontSize: '4rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p className="p-0" style={{ fontSize: '2rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
        </div>
      </div>
      <div class="min-vh-100 p-5 text-black">
        <div class="row w-100 justify-content-center" style={{ margin: '10rem 0' }}>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
          <div class="col-5 ms-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold">Profil Desa Panjeng</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
        </div>
        <div class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5 me-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold">Visi</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
        </div>
        <div class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
          <div class="col-5 ms-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold">Misi</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold">Perangkat Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="my-5">
          <SliderPerangkat items={sliderItems} />
        </div>      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold">Berita Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="row grid-cols-4 justify-content-center gap-4 my-5">
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="">
          <a href="/berita">
            <button type="button" className="btn btn-primary px-4 shadow-sm">Lihat Lainnya</button>
          </a>
        </div>
      </div>
      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold">Galeri Desa</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, nesciunt?</p>
        <div class="row grid-cols-4 justify-content-center gap-4 my-5">
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
        <div class="">
          <a href="/galeri">
            <button type="button" className="btn btn-primary px-4 shadow-sm">Lihat Lainnya</button>
          </a>
        </div>
      </div>
    </div >
  )
};
