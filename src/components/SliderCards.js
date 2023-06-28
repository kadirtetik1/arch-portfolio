import React from 'react'
import "./SliderCardStyle.css"


import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/swiper-bundle.css";

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import FinishedCard from './FinishedCard';


  export default function SliderCards() {
    return (
      <>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={'auto'}
          navigation
          pagination={{ clickable: true }}
          
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="mySwiper"
        >
          <SwiperSlide className='mySlide'><FinishedCard label="Ev İçi" description="Açıklama Açıklama Açıklama Açıklama Açıklama Açıklama Açıklama Açıklama Açıklama "/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          <SwiperSlide className='mySlide'><FinishedCard/></SwiperSlide>
          
        </Swiper>
      </>
    );
  }
