import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import SectionsCard from "../sections-card/sections_card";



const SectionsComponent = ({ main_title, data }) => {
  return (
    <section className="pb-[80px]">
      <div className="container">
        <h2 className="text-[32px] mb-[32px] font-semibold">{main_title}</h2>
        <div>
          <>
            <Swiper
              cssMode={true}
              navigation={true}
              mousewheel={false}
              keyboard={true}
              spaceBetween={24}
              slidesPerView={5}
              modules={[Navigation, Mousewheel, Keyboard]}
              className="mySwiper3"
            >
                {data.map(item =>(
              <SwiperSlide>
                <SectionsCard title={item.title} type={item.type} rating={item.rating} img={item.img}/>
              </SwiperSlide>
                ))}
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
};

export default SectionsComponent;
