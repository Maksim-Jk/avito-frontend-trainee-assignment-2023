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
const [isError, setIsError] = useState(false) 

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
              <SwiperSlide key={slide.id} style={{minHeight: '200px', display: 'flex', alignItems: 'center'}}>
                <img src={slide.image} style={{color: '#000'}} alt="Не удалось получить изображение"/>
              </SwiperSlide>
            ))}
          </Swiper>

</>
)}

export default Slider;
