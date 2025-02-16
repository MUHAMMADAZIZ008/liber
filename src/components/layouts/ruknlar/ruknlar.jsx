import React from "react";
import ruknlarImg1 from "../../../assets/ruknlar_img1.png";
import RunklarCard from "./runklar_card";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';




const data = [
  {
    id: 1,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 2,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 3,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 4,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 5,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 6,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },

  {
    id: 6,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
  {
    id: 6,
    title: "Жахон адабиёти",
    img: ruknlarImg1,
  },
];

const Ruknlar = () => {
  return (
    <>
      <section className="pb-[64px]">
        <div className="container">
          <h2 className="text-[32px] font-semibold mb-[32px]">Рукнлар</h2>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            navigation={{
              clickable: true,
            }}
            loop={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <RunklarCard title={item.title} img={item.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Ruknlar;
