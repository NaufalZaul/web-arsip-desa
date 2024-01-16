"use client";
import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0 shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img
            src={"/cropped-Logo-Cilacap 2.png"}
            class="mx-5"
            width="50"
            alt=""
          />
          <div class="text-capitalize fw-bold text-xl" style={{ color: "#0022d6" }}>
            <p class="m-0 p-0">pusat pelayanan masyarakat desa panjeng</p>
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
          <span class="navbar-toggler-icon"></span>
        </button>
        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item mx-3">
              <Link class="nav-link active" to="/tentang">Tentang desa</Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/layanan">Layanan</Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" to="/berita">Berita</Link>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/login">
                <button type="submit" className="btn btn-primary px-4" >Login</button>
              </a>
            </li>
          </ul>
        </div> */}

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item mx-3">
              <a class="nav-link active" href="/tentang">Tentang desa</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/layanan">Layanan</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/berita">Berita</a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" href="/login">
                <button type="submit" className="btn btn-primary px-4" >Login</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};
