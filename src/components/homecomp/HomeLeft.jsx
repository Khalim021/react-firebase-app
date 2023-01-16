import React from 'react'
import './css/left.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import leftData from './data/leftData'
import LeftCard from './LeftCard';

const HomeLeft = () => {
  return (
    <div>
        <Swiper
        loop={true}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
        >
        {leftData.map((items, i) => {
          return (
            <SwiperSlide key={i}>
              <LeftCard items={items}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default HomeLeft