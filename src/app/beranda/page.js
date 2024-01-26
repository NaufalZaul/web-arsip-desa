'use client';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sliders from "@/components/Sliders";
import '../../styles/page.beranda.css';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import perangkatDesa from "@/data/dataPerangkat";
import data from "@/data/data";
import Link from 'next/link';


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
        <div data-aos="fade-up" data-aosduration="3000" class="min-vh-100 text-black text-center p-5">
          <h1 className="fw-bold color-teal link-offset-3 border-bottom pb-2">Pengumuman</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
          <div class="my-5">
            <Sliders.SliderPengumuman items={data} />
          </div>
        </div>
        <div data-aos="fade-right" class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5">
            <img src="/IMG_20161129_165426.jpg" className="w-100 rounded shadow object-fit-cover" alt="" style={{ maxHeight: '350px' }} />
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
            <h2 className="fw-bold color-teal">Visi Desa Panjeng</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
          <div class="col-5">
            <img src="/Rapat Persiapan Sosialisasi Online System TOSKA Suban Pajak Jakarta Pusat.jpeg" className="w-100 rounded shadow object-fit-cover" alt="" style={{ maxHeight: '350px' }} />
          </div>
        </div>
        <div data-aos="fade-right" class="row w-100 justify-content-center" style={{ marginBottom: '10rem' }}>
          <div class="col-5">
            <img src="/KKN BBM 67 DAY 22.jpeg" className="w-100 rounded shadow object-fit-cover" alt="" style={{ maxHeight: '350px' }} />
          </div>
          <div class="col-5 ms-5 d-flex flex-column justify-content-center ">
            <span className="text-uppercase mb-2 text-primary">seputar informasi</span>
            <h2 className="fw-bold color-teal">Misi Desa Panjeng</h2>
            <p className="p-0 my-3 lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cupiditate culpa repudiandae soluta sed exercitationem tempora, autem dignissimos iste. Praesentium, laborum. Iusto eius laudantium rem cum exercitationem asperiores dolorem commodi autem. Provident necessitatibus similique atque quas nemo quae! Eligendi ipsa ipsum voluptatibus dolor illum molestiae tempora commodi molestias, excepturi blanditiis.</p>
          </div>
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold color-teal border-bottom pb-2">Perangkat Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="my-5">
          <Sliders.SliderPerangkat items={perangkatDesa} />
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold color-teal border-bottom pb-2">Berita Desa</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, expedita?</p>
        <div class="">

          <div class="row row-cols-lg-4 mt-3">
            {
              data.map((val, key) => (key < 4) && (
                <Link data-aos="zoom-in" data-aos-duration="500 " class="link-offset-2 link-underline link-underline-opacity-0 p-0 text-black" href="/kegiatan/[detail]" as={`/berita/${key}`}>
                  <div class="col h-100 p-0">
                    <div class="p-1">
                      <img src={val.foto} height={200} class="card-img-top object-fit-cover rounded" alt="..." />
                      <div class="py-3 text-start">
                        <p className="fw-bold p-0 mb-2" style={{ fontSize: '20px' }}>{val.judul}</p>
                        <p class="card-text" style={{ fontSize: '15px' }}>{val.desk}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
          <div class="mt-4">
            <a href="/berita">
              <button type="button" className="btn btn-primary px-4 shadow-sm">Lihat Lainnya</button>
            </a>
          </div>
        </div>
      </div>

      <div class="min-vh-100 text-black text-center p-5">
        <h1 className="fw-bold color-teal border-bottom pb-2 color-teal border-bottom pb-2">Galeri Desa</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, nesciunt?</p>
        <div class="row row-cols-lg-4 mt-3">
          {
            data.map((val, key) => (key < 4) && (
              <Link data-aos="zoom-out" data-aos-duration="500" class="link-offset-2 link-underline link-underline-opacity-0 p-0 text-black" href="/kegiatan/[detail]" as={`/berita/${key}`}>
                <div class="col h-100 p-0">
                  <div class="p-1">
                    <img src={val.foto} height={200} class="card-img-top object-fit-cover rounded" alt="..." />
                    <div class="py-3 text-start">
                      <p className="fw-bold p-0 mb-2" style={{ fontSize: '20px' }}>{val.judul}</p>
                      <p class="card-text" style={{ fontSize: '15px' }}>{val.desk}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
        <div class="mt-4">
          <a href="/galeri">
            <button type="button" className="btn btn-primary px-4 shadow-sm">Lihat Lainnya</button>
          </a>
        </div>
      </div>
      <Footer />
    </div >
  )
};
