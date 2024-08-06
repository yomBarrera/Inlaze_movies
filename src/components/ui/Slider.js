'use client'

import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import BannerSlider from './BannerSlider';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Slidercustom.css'

const SimpleSlider = ({ options }) => {

  const listOptions = options.slice(0, 7)

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination, Scrollbar]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
    >
      {
        listOptions.map(option => (
          <SwiperSlide key={option.id} >
            <BannerSlider option={option} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
export default SimpleSlider