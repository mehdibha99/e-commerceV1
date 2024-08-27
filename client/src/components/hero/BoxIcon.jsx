import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

const BoxIcon = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
        justifyContent: "center",
        py: 2,
        height: "100%",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: "300",
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default BoxIcon;
