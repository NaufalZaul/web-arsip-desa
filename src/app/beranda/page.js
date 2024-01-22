'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliders from "@/components/Sliders";
import '../../styles/page.beranda.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function Page() {
  const sliderItems = [
    { imageUrl: '/gethuk-golan.jpg' },
    { imageUrl: '/3324136.jpg' },
    { imageUrl: '/tp201-sasi-21.jpg' },
    { imageUrl: '/8270297.jpg' },
    { imageUrl: '/SL-113022-54210-29.jpg' },
  ];


  useEffect(() => {
    Aos.init({
      duration: 1300,
      easing: 'ease-in-out',
      once: false,
    });
    return () => Aos.refresh();
  }, []);

  return (
    <div class="">
      <Navbar />
      <div class="min-vh-100 bg-header-beranda">
        <div class="min-vh-100 d-flex flex-column justify-content-center  text-white p-5" style={{ backdropFilter: 'brightness(0.5)' }}>
          <h1 className="fw-bold" style={{ fontSize: '4rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
          <p className="p-0" style={{ fontSize: '2rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio, iure.</p>
        </div>
      </div>
      <div class="min-vh-100 p-5 text-black">
        <div class="min-vh-100 text-black text-center p-5">
          <h1 className="fw-bold color-teal link-offset-3 border-bottom pb-2">Pengumuman</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
          <div class="my-5">
            <Sliders.SliderPengumuman items={sliderItems} />
          </div>
        </div>
        <div data-aos="fade-right" class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
          <div class="col-5 ms-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold color-teal">Profil Desa Panjeng</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
        </div>
        <div data-aos="fade-left" class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5 me-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold color-teal">Visi</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
        </div>
        <div data-aos="fade-right" class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5">
            <img src="/gethuk-golan.jpg" className="w-100 rounded shadow" alt="" />
          </div>
          <div class="col-5 ms-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold color-teal">Misi</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold color-teal border-bottom pb-2">Perangkat Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="my-5">
          <Sliders.SliderPerangkat items={sliderItems} />
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold color-teal border-bottom pb-2">Berita Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="row grid-cols-4 justify-content-center gap-4 my-5">
          <div data-aos="zoom-in" data-aos-duration="500" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="800" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1200" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-duration="1500" class="card p-0" style={{ width: "18rem" }}>
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
        <h1 className="fw-bold color-teal border-bottom pb-2 color-teal border-bottom pb-2">Galeri Desa</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, nesciunt?</p>
        <div class="row grid-cols-4 justify-content-center gap-4 my-5">
          <div data-aos="zoom-out" data-aos-duration="500" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="800" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="1200" class="card p-0" style={{ width: "18rem" }}>
            <img src="/gethuk-golan.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-duration="1500" class="card p-0" style={{ width: "18rem" }}>
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
      <Footer />
    </div >
  )
};
