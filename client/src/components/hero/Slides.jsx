import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { useTheme } from "@emotion/react";
import { Box, Button, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Slide1 from "../../images/banner-15.jpg";
import Slide2 from "../../images/banner-25.jpg";
import "./Slides.css";
const Slides = () => {
  const theme = useTheme();
  const slides = [
    {
      url: Slide1,
      caption: "MEN",
      alt: "Slide 1",
    },
    {
      url: Slide2,
      caption: "WOMAN",
      alt: "Slide 2",
    },
  ];
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      loop={true}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.alt} className="slider">
            <img src={slide.url} alt={slide.alt} />
            <Box
              sx={{
                [theme.breakpoints.up("sm")]: {
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  left: "10%",
                  textAlign: "left",
                },
                [theme.breakpoints.down("sm")]: {
                  py: 5,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: "#222",
                  fontWeight: 400,
                }}
              >
                LIFE STYLE COLLECTION
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: "#222",
                  fontWeight: 700,
                  my: 1,
                }}
              >
                {slide.caption}
              </Typography>
              <Stack
                display={"flex"}
                alignItems={"center"}
                direction={"row"}
                gap={1}
              >
                <Typography color={"#333"} variant="h4" fontWeight={700}>
                  SALE UP TO
                </Typography>
                <Typography color={"#D23F57"} variant="h4" fontWeight={700}>
                  30% OFF
                </Typography>
              </Stack>
              <Typography variant="body1" textTransform={"capitalize"}>
                get free shipping on orders over 99.99$
              </Typography>
              <Button
                sx={{
                  px: 5,
                  backgroundColor: "#222",
                  py: 1,
                  color: "#fff",
                  fontWeight: 600,
                  textTransform: "capitalize",
                  fontSize: 16,
                  mt: 3,
                  "&:hover": {
                    backgroundColor: "#333",
                  },
                }}
              >
                Shop Now
              </Button>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slides;
