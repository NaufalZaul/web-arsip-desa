import Navbar from '@/components/Navbar';
import data from '@/data/data';
import Link from 'next/link';

export default function page(params) {
  return (
    <div class="">
      <Navbar />
      <div class="p-5 text-black">
        <div class="text-center mb-5">
          <h1 className="fw-bold" style={{ fontSize: '3rem' }}>Galeri Desa</h1>
          <p style={{ fontSize: '1.5rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, amet?</p>
        </div>
        <div class="container text-center">
          <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
            {
              data.map((val, key) => (
                <Link class="link-offset-2 link-underline link-underline-opacity-0 text-black" href="/kegiatan/[detail]" as={`/galeri/${key}`}>
                  <div class="col h-100">
                    <div class="p-1">
                      <img src="/gethuk-golan.jpg" class="card-img-top rounded" alt="..." />
                      <p class="text-end py-1 m-0 fw-semibold" style={{ fontSize: '15px' }}>
                        23 April 2023
                      </p>
                      <div class="py-1 text-start">
                        <p className="fs-5 fw-semibold p-0 mb-2">{val.judul}</p>
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
    </div>
  )
};
