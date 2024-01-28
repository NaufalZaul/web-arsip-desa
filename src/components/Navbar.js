"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {

  const handleActiveMenu = (menu) => (
    usePathname() == menu ? 'nav-user-active' : null
  )

  return (
    <nav class="navbar navbar-expand-lg shadow-sm py-0 bg-teal">
      <div class="container-fluid align-items-end">
        <a class="navbar-brand d-flex align-items-center py-2" href="#">
          <img
            src={"/cropped-Logo-Cilacap 2.png"}
            class="me-3"
            width="60"
            alt=""
          />
          <div class="text-uppercase text-center text-white text-2xl">
            <h5 class="m-0 p-0 fw-bold">pusat pelayanan</h5>
            <h5 class="m-0 p-0 ">desa panjeng</h5>
          </div>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse text-uppercase" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class={`nav-item nav-item-user text-center 
            ${handleActiveMenu('/beranda')}`} style={{ width: '150px' }}>
              <a class="nav-link px-3" href="/beranda">Beranda</a>
            </li>
            <li class={`nav-item nav-item-user text-center border-start
              ${handleActiveMenu('/layanan')}`} style={{ width: '150px' }}>
              <a a class="nav-link px-3" href="/layanan" > Layanan</a>
            </li>
            <li class={`nav-item nav-item-user text-center border-start 
            ${handleActiveMenu('/berita')}`} style={{ width: '150px' }}>
              <a class="nav-link px-3" href="/berita">Berita</a>
            </li>
            <li class={`nav-item nav-item-user text-center border-start 
            ${handleActiveMenu('/galeri')}`} style={{ width: '150px' }}>
              <a class="nav-link px-3" href="/galeri">Galeri</a>
            </li>
          </ul>
        </div >
      </div >
    </nav >
  )
};
