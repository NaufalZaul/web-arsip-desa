'use client';
// components/SplideSlider.js
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import stylesheet Splide

const Sliders = {
  SliderPerangkat: ({ items }) => {
    return (
      <Splide options={{
        type: 'loop',
        perPage: 5,
        pagination: false,
        height: '50vh',
        autoplay: true,
        heightRatio: 0.5
      }}>
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item.foto} className='w-100 object-fit-cover rounded-4 p-1' alt={`Slide ${index}`} style={{ height: '80%' }} />
            <div class="my-2 d-flex flex-column align-items-center">
              <h5 className='text-center fw-bold pb-1' style={{ width: 'fit-content', borderBottom: '2px solid black' }}>{item.jabatan}</h5>
              <p className='p-0 m-0'>{item.nama}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    );
  },
  SliderDetailGaleri: ({ items }) => {
    return (
      <Splide options={{
        type: 'loop',
        perPage: 3,
        autoplay: true,
        padding: '3rem',
        pagination: false,
        height: '50vh',
        heightRatio: 0.5
      }}>
        {items.map((item, index) => (
          <SplideSlide key={index}>
            <img src={item.imageUrl} className='w-100 object-fit-cover rounded-4 p-1' alt={`Slide ${index}`} style={{ height: '80%' }} />
          </SplideSlide>
        ))}
      </Splide>
    );
  },
  SliderPengumuman: ({ items }) => {
    return (
      <Splide options={{
        type: 'loop',
        perPage: 3,
        autoplay: true,
        padding: '3rem',
        pagination: false,
        height: '50vh',
        heightRatio: 0.5
      }}>
        {items.map((item, index) => (
          <SplideSlide className='position-relative' key={index}>
            <img src={item.foto} className='w-100 object-fit-cover rounded-4 p-1' alt={`Slide ${index}`} style={{ height: '100%' }} />
            <div class="position-absolute bottom-0 start-0 end-0 m-1 text-start p-3 text-white" style={{ borderRadius: '0 0 10px 10px', backdropFilter: 'blur(20px)' }}>
              <p className='m-0 p-0 fw-bold' style={{ fontSize: '17px' }}>{item.judul}</p>
              <p className='mb-0 mt-1'>{item.publikasi}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    );
  },
}
export default Sliders;