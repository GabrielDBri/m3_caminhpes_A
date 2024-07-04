import { Swiper, SwiperSlide } from 'swiper/react';
import caminhao1 from '../assets/caminhao1.jpeg';
import caminhao2 from '../assets/caminhao2.jpg';
import caminhao3 from '../assets/caminhao3.jpeg';
import { Autoplay, Navigation } from 'swiper/modules';

const BannerCarousel = () => {
  return (
    <div className="banner-carousel-container">
      <Swiper
        modules={[Autoplay, Navigation]}
        className="w-full h-96 object-cover"
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img src={caminhao1} alt="Caminhão pesado transportando carga" className="object-cover h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={caminhao2} alt="Caminhão de transporte rodoviário" className="object-cover h-full w-full" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={caminhao3} alt="Caminhão em estrada montanhosa" className="object-cover h-full w-full" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
