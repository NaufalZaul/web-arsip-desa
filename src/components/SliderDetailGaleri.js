'use client';
// components/SplideSlider.js
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import stylesheet Splide

const SliderDetailGaleri = ({ items }) => {
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
};

export default SliderDetailGaleri;
