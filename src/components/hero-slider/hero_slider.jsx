import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './hero_slider.css';

// import required modules
import { Navigation } from 'swiper/modules';


import img1 from '../../assets/hero_img1.svg'
import img2 from '../../assets/hero_img2.svg'
import img3 from '../../assets/hero_img3.svg'
import HeroCard from '../../data/hero_card';

const data = [
    {
        id: 1,
        title: "1984",
        img: img1
    },
    {
        id: 2,
        title: "Code 8",
        img: img2
    },
    {
        id: 3,
        title: "Rich dad poor dad",
        img: img3
    },
    {
        id: 4,
        title: "Rich dad poor dad",
        img: img3
    }
]


function HeroSlider() {

    return <>
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      navigation={{
        clickable: true,
      }}
      loop ={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <HeroCard title={item.title} url={item.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  </>
}

export default HeroSlider