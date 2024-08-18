import { Box, Container, Link, Stack, Typography } from "@mui/material";
import Img1 from "../../images/banner-17.jpg";
import Img2 from "../../images/banner-16.jpg";
import { ArrowForward } from "@mui/icons-material";
import Slides from "./Slides";

const HeroSection = () => {
  return (
    <Container
      sx={{
        mt: 3,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Slides />
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          minWidth: "26.5%",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img width={"100%"} src={Img1} alt="banner" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2b3445",
                fontSize: "16px",
              }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
                fontSize: "16px",
                mt: 1,
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "#2b3445",
                fontSize: "16px",
                mt: 1,
              }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              underline="none"
            >
              shop now
              <ArrowForward
                sx={{
                  fontSize: "18px",
                  ml: 1,
                }}
              />
            </Link>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <img width={"100%"} src={Img2} alt="banner1" />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: "#2b3445",
                fontSize: "16px",
              }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
                fontSize: "16px",
                mt: 1,
              }}
            >
              DESKTOP & <br />
              LAPTOP
            </Typography>

            <Link
              sx={{
                color: "#2B3445",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "0.2s",
                "&:hover": {
                  color: "#d23f57",
                },
              }}
              underline="none"
            >
              shop now
              <ArrowForward
                sx={{
                  fontSize: "18px",
                  ml: 1,
                }}
              />
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
