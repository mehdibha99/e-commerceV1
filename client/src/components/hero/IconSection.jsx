import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Container, Divider, Grid, useMediaQuery } from "@mui/material";
import BoxIcon from "./BoxIcon";
import { useTheme } from "@emotion/react";
const IconSection = () => {
  const isMd = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor: theme.palette.mode === "light" ? "#fff" : "#000",
        my: 1,
      }}
    >
      <Grid
        container
        sx={{
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            title: "Fast Delivery",
            subTitle: "Start from $10",
            icon: <AccessAlarmOutlined />,
          },
          {
            title: "Money Guarantee",
            subTitle: "7 Days Back",
            icon: <CreditScoreOutlined />,
          },
          {
            title: "365 Days",
            subTitle: "A For free return",
            icon: <ElectricBolt />,
          },
          {
            title: "365 Days",
            subTitle: "A For free return",
            icon: <WorkspacePremiumOutlined />,
          },
        ].map((item, index, arr) => (
          <>
            <Grid
              key={index}
              item
              xs={12}
              sm={5.5}
              md={3}
              lg={2.5}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <BoxIcon
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            </Grid>

            {isMd && index !== arr.length - 1 && (
              <Divider orientation="vertical" flexItem />
            )}
          </>
        ))}
      </Grid>
    </Container>
  );
};

export default IconSection;
