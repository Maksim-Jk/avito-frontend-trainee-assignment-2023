import { FC, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiperStyles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IGameByIdScreenshot } from "../../types/games.types";
import { Box, Card, Typography } from "@mui/material";

interface ISliderProps {
  slides: IGameByIdScreenshot[];
  [key: string]: any;
}

const Slider: FC<ISliderProps> = ({ slides, ...swiperProps }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "60%" },
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Box>
        <Swiper
          style={
            {
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            } as React.CSSProperties
          }
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ minHeight: "200px", display: "flex", alignItems: "center" }}
            >
              <img
                src={slide.image}
                style={{ color: "#000" }}
                alt="Не удалось получить изображение"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={(e: any) => setThumbsSwiper(e)}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                style={{ color: "#000" }}
                alt="Не удалось получить изображение"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Card>
  );
};

export default Slider;
