import React from "react";
import "./test.css";
import {Data} from "./Data.jsx"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

const Test = () => {
  return (
    <section className="test container section" >
      <h2 className="section__title">My Client Says</h2>
      <span className="section__subtitle">Testimonial</span>


      <Swiper className="test__container "
        loop = {true}
        grabCursor = {true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
         
        }}
        modules={[Pagination]}
      >
        {Data.map(({id,image,title,description})=>{
            return(
                <SwiperSlide className="test__card" key={id}>
                    <img src={image} alt="" className="test__img"/>
                    <h3 className="test__name">{title}</h3>
                    <p className="test__desc">{description}</p>
                </SwiperSlide>
            );
        })}
      </Swiper>
    </section>
  );
};

export default Test;
