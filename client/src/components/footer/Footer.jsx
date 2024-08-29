import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Footer = () => {
  return (
    <Box
      sx={{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        py: 3,
        bgcolor: "#203445",
        boxShadow: "0 -4px 6px -1px rgba(0,0,0,0.1)", // Adds subtle shadow for depth
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 18,
          color: "#FFFFFF", // Ensures the text is clearly visible against the dark background
        }}
      >
        Designed and developed with
        <FavoriteIcon sx={{ mx: 0.5, color: "#E53935" }} /> by mehdi bha © 2023
      </Typography>
    </Box>
  );
};

export default Footer;
