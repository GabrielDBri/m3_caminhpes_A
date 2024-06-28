import {Swiper, SwiperSlide} from 'swiper/react'

import caminha1 from '../assets/caminha3 (2).jpg';
import caminha2 from '../assets/caminha3.jpg';
import caminha3 from '../assets/caminha2.jpg';
import { Autoplay, Navigation } from 'swiper/modules';

// Importar os módulos corretamente


// Configurações do Swiper


const BannerCarousel = () => {
  return (
    <Swiper 
    modules={[Navigation, Autoplay]}
    className="w-full h-96 object-cover"
    slidesPerView={1}
    pagination={{clickable: true}}
    navigation
    autoplay
    >
      <SwiperSlide >
        <img src={caminha1} alt="Slide 1" className="object-cover h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={caminha2} alt="Slide 2" className="object-cover h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={caminha3} alt="Slide 3" className="object-cover h-full w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;
