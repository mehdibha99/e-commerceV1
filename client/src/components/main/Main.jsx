import {
  Box,
  Stack,
  Container,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Grid,
} from "@mui/material";
import { useState } from "react";
import "./main.css";
import { useTheme } from "@emotion/react";
import CardComponent from "./CardComponent";
const Main = () => {
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const theme = useTheme();
  return (
    <Container
      sx={{
        mt: 5,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={300}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          color="error"
          sx={{
            ".Mui-selected": {
              backgroundColor: "initial !important",
              border: "1px solid rgba(233,69,96,0.5 ) !important",
            },
          }}
        >
          <ToggleButton
            className="myButton"
            value="left"
            aria-label="left aligned"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            All items
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value="center"
            aria-label="centered"
            sx={{
              mx: "16px !important",
              color: theme.palette.text.primary,
            }}
          >
            Men category
          </ToggleButton>
          <ToggleButton
            className="myButton"
            value="right"
            aria-label="right aligned"
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            Woman category
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      <Grid container spacing={4} mt={6}>
        {[1, 2, 3, 4, 5, 6].map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardComponent />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Main;
