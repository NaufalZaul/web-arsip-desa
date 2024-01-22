import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import data from '@/data/data';
import Link from 'next/link';

export default function page(params) {
  return (
    <div class="">
      <Navbar />
      <div class="p-5 text-black">
        <div class="text-center mb-5">
          <h2 className="fw-bold color-teal pb-2">Galeri Desa</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet?</p>
        </div>
        <div class="text-center">
          <div class="row row-cols-lg-4">
            {
              data.map((val, key) => (
                <Link class="link-offset-2 link-underline link-underline-opacity-0 p-0 text-black" href="/kegiatan/[detail]" as={`/galeri/${key}`}>
                  <div class="col h-100 p-0">
                    <div class="p-1">
                      <img src="/gethuk-golan.jpg" class="card-img-top rounded" alt="..." />
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
    </div>
  )
};
