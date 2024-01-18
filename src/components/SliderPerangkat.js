'use client';
// components/SplideSlider.js
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import stylesheet Splide

const SliderPerangkat = ({ items }) => {
  return (
    <Splide options={{
      type: 'loop',
      perPage: 3,
      pagination: false,
      height: '50vh',
      autoplay: true,
      heightRatio: 0.5
    }}>
      {items.map((item, index) => (
        <SplideSlide key={index}>
          <img src={item.imageUrl} className='w-100 object-fit-cover rounded-4 p-1' alt={`Slide ${index}`} style={{ height: '80%' }} />
          <div class="my-2">
            <h4 className=''>Lorem ipsum </h4>
            <p className='p-0 m-0'>Lorem ipsum dolor sit amet.</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderPerangkat;
