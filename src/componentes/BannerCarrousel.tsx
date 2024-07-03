import {Swiper, SwiperSlide} from 'swiper/react'

import caminhao1 from '../assets/caminhao1.jpeg';
import caminhao2 from '../assets/caminhao2.jpg';
import caminhao3 from '../assets/caminhao3.jpeg';
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
        <img src={caminhao1} alt="Slide 1" className="object-cover h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={caminhao2} alt="Slide 2" className="object-cover h-full w-full" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={caminhao3} alt="Slide 3" className="object-cover h-full w-full" />
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerCarousel;
