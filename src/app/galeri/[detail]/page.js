import Navbar from "@/components/Navbar";
import Sliders from "@/components/Sliders";
import data from "@/data/data";

export default function page({ params }) {
  const sliderItems = [
    { imageUrl: '/gethuk-golan.jpg' },
    { imageUrl: '/3324136.jpg' },
    { imageUrl: '/tp201-sasi-21.jpg' },
    { imageUrl: '/8270297.jpg' },
    { imageUrl: '/SL-113022-54210-29.jpg' },
  ];
  return (
    <div class="">
      <Navbar />
      <div class="p-5">
        {
          data.map((val, key) => (key == params.detail) ? (
            <div class="text-black">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, ullam!</p>
              <div class="">
                <Sliders.SliderDetailGaleri items={sliderItems} />
              </div>
            </div>
          ) : null
          )
        }
      </div>
    </div>
  )
};

