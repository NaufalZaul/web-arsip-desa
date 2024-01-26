import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import data from "@/data/data";
import "@/styles/page.kegiatan.css";
import Link from 'next/link';

export default function Page() {
  return (
    <div class="">
      <Navbar />
      <div class="p-5 text-black">
        <div class="text-center mb-5">
          <h2 className="fw-bold color-teal pb-2">Berita Desa</h2>
          <p className="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet?</p>
        </div>
        <div class="d-flex bg-dark-teal text-white">
          <div class="position-relative">
            <img src="/gethuk-golan.jpg" alt="" />
            <div class="position-absolute bottom-0 bg-teal w-100 p-3 m-3">
              <h3 className="fw-semibold m-0">Lorem ipsum dolor sit</h3>
              <p className="m-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iusto?</p>
            </div>
          </div>
          <div class="px-5 py-4">
            <p className="text-uppercase fw-bold m-0 mb-3">berita terkini</p>

            <div class="row">
              {
                data.map((val, key) => (key < 3) && (
                  <div className="px-3">
                    <Link class="link-offset-2 link-underline link-underline-opacity-0 p-0 text-white" href="/kegiatan/[detail]" as={`/berita/${key}`}>
                      <div class="d-flex gap-2">
                        <div class="col-3 p-0">
                          <img className="w-100 object-fit-cover rounded" height={80} src={val.foto} alt="" />
                        </div>
                        <div class="">
                          <p className="m-0 fw-semibold mb-1 lh-sm" style={{ fontSize: '19px' }}>{val.judul}</p>
                          <p className="mb-0">{val.publikasi}</p>
                        </div>
                      </div>
                    </Link>
                    <hr class="dropdown-divider my-3" />
                  </div>
                ))
              }
            </div>



            {/* <div class="d-flex gap-2">
              <div class="col-3">
                <img className="w-100" src="/gethuk-golan.jpg" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <p className="m-0 fw-semibold mb-2 lh-sm" style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque!</p>
                <p className="mb-0">08/08/2024</p>
              </div>
            </div>




            <hr class="dropdown-divider my-3" />
            <div class="d-flex gap-2">
              <div class="col-3">
                <img className="w-100" src="/gethuk-golan.jpg" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <p className="m-0 fw-semibold mb-2 lh-sm" style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque!</p>
                <p className="mb-0">08/08/2024</p>
              </div>
            </div>
            <hr class="dropdown-divider my-3" />
            <div class="d-flex gap-2">
              <div class="col-3">
                <img className="w-100" src="/gethuk-golan.jpg" alt="" />
              </div>
              <div class="d-flex flex-column justify-content-between">
                <p className="m-0 fw-semibold mb-2 lh-sm" style={{ fontSize: '18px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, doloremque!</p>
                <p className="mb-0">08/08/2024</p>
              </div>
            </div> */}
          </div>
        </div>

        <div class="mt-5">
          <div class="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold color-teal text-uppercase w-100 my-3">Lorem ipsum dolor sit amet.</h4>
            <SearchBar />
          </div>
          <div class="row row-cols-lg-4 mt-3">
            {
              data.map((val, key) => (
                <Link class="link-offset-2 link-underline link-underline-opacity-0 p-0 text-black" href="/kegiatan/[detail]" as={`/berita/${key}`}>
                  <div class="col h-100 p-0">
                    <div class="p-1">
                      <img src={val.foto} height={200} class="card-img-top rounded object-fit-cover" alt="..." />
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
          <div class="my-3">
            <nav aria-label="...">
              <ul class="pagination justify-content-center mb-0">
                <li class="page-item disabled">
                  <a class="page-link" style={{ fontSize: '13px' }}>Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>1</a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>2</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>3</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" style={{ fontSize: '13px' }}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  )
};
