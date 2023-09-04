import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel,EffectCoverflow,Autoplay,Navigation } from "swiper/modules";
import Iphone from '../../assests/Iphone.png'
import Furniture from '../../assests/furniture.png'
import Plants from '../../assests/Plants1.jpeg'
import Bike from '../../assests/Bike1.avif'
import Watch from '../../assests/Watch.png'
import "swiper/css";
import "swiper/css/effect-coverflow";
import "./Cards.css";

const slides = [
  Iphone,
  Watch,
  Furniture,
  Plants,
  Bike,
  "https://i.postimg.cc/JhK81QJw/marcus-p-o-UBjd22g-F6w-unsplash.jpg",
];

export default function Cards() {
  return (
    <div className=" upper">
    <Swiper
    
      centeredSlides
      slidesPerView="auto"
      loop={true}
      loopedSlides = {2}
      effect="coverflow"
  
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
    
 
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        
      }}
      modules={[Autoplay,Mousewheel,EffectCoverflow,Navigation]}
    >
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <SwiperSlide
            key={slide}
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </Swiper>
    </div>
  );
};