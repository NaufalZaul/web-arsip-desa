import data from "@/data/data";
import "@/styles/page.berita.css";
import Link from 'next/link';

export default function Page() {
  return (
    <div class="">
      <div class="d-flex align-items-center justify-content-between border bg-header-berita">
        <div class="p-5 text-black">
          <h1 class="fw-bold">Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut officia tenetur quasi, ipsam voluptatibus quo.</p>
        </div>
      </div>
      <div class="p-5 text-black">
        <h4 className="mb-4 ms-5 fw-bold">Lorem ipsum dolor sit amet.</h4>
        <div class="container text-center">
          <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            {
              data.map((val, key) => (key % 4 == 0) ? (
                <Link class="link-offset-2 link-underline link-underline-opacity-0 text-black" href="/berita/[detail]" as={`/berita/${key}`}>
                  <div class="col h-100">
                    <div class="position-relative p-1" style={{ height: "100%" }}>
                      <img src="/3324136.jpg" class="card-img-top rounded" alt="..." style={{ height: "100%" }} />
                      <div class="position-absolute bottom-0 p-3 text-start">
                        <p className="p-0 mb-2" style={{ fontSize: "14px" }}>Ditulis oleh {val.penulis}</p>
                        <p className="fs-5 fw-semibold p-0 mb-3">{val.judul}</p>
                        <p className="m-0 ">BACA ARTIKEL</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link class="link-offset-2 link-underline link-underline-opacity-0 text-black" href="/berita/[detail]" as={`/berita/${key}`}>
                  <div class="col h-100">
                    <div class="p-1">
                      <img src="/gethuk-golan.jpg" class="card-img-top rounded" alt="..." />
                      <div class="py-3 text-start">
                        <p className="fs-5 fw-semibold p-0 mb-2">{val.judul}</p>
                        <p className="p-0 mb-2" style={{ fontSize: "14px" }}>Ditulis oleh {val.penulis}</p>
                        <p class="card-text">{val.desk}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div >
  )
};
