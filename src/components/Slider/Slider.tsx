import React, { useRef, useState, FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import { Pagination, Navigation } from "swiper/modules";
import { IGameByIdScreenshot } from "../../types/games.types";

interface ISliderProps {
  slides: IGameByIdScreenshot[];
  [key: string]: any
}

const Slider: FC<ISliderProps> = ({ slides ,...swiperProps}) => {
 
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        {...swiperProps}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
