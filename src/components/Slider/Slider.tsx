import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./swiperStyles.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { IGameByIdScreenshot } from "../../types/games.types";
import { Box, Card, Typography, styled } from "@mui/material";
import SliderSkeleton from "./SliderSkeleton";

interface ISliderProps {
  slides: IGameByIdScreenshot[];
}

export const SliderContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "10px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
}));

const SwiperSlider = styled(Swiper)({
  "--swiper-navigation-color": "#fff",
  "--swiper-pagination-color": "#fff",
});

const SwiperSlideStyled = styled(SwiperSlide)({
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
});

const SwiperSlideStyledMini = styled(SwiperSlide)({
  display: "flex",
  alignItems: "center",
  fontSize: "14px",
});

const Slider: FC<ISliderProps> = ({ slides }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [howManyErrors, setHowManyErrors] = useState(0);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    howManyErrors >= slides.length && setIsError(true);
  }, [howManyErrors]);

  useEffect(() => {
    slides.forEach((image) => {
      const img = new Image();
      img.src = image.image;
      img.onload = () => setImagesLoaded(true);
      img.onerror = () => setHowManyErrors((prev) => prev + 1);
    });
  }, []);

  return (
    <>
      {imagesLoaded && slides.length > 0 && !isError ? (
        <SliderContainer>
          <Box>
            <SwiperSlider
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {slides.map((slide) => (
                <SwiperSlideStyled key={slide.id}>
                  <img src={slide.image} alt="Не удалось получить изображение" />
                </SwiperSlideStyled>
              ))}
            </SwiperSlider>
            <SwiperSlider
              onSwiper={(e: any) => setThumbsSwiper(e)}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {slides.map((slide) => (
                <SwiperSlideStyledMini key={slide.id}>
                  <img src={slide.image} alt="Не удалось получить изображение" />
                </SwiperSlideStyledMini>
              ))}
            </SwiperSlider>
          </Box>
        </SliderContainer>
      ) : slides.length > 0 && !isError ? (
        <SliderSkeleton />
      ) : (
        <SliderContainer>
          <Typography variant="subtitle1" color="text.secondary">
            Скриншоты не найдены
          </Typography>
        </SliderContainer>
      )}
    </>
  );
};

export default Slider;
