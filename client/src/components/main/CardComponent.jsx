import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";

const CardComponent = () => {
  return (
    <Card
      sx={{
        maxWidth: 333,
        "&:hover": {
          ".hoverImage": {
            scale: "1.05",
            rotate: "1deg",
            transition: "all 0.5s ease-in-out",
          },
        },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="277"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        className="hoverImage"
      />
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" component="div">
            T-shirt
          </Typography>
          <Typography variant="subtitle1" component="p">
            $19.99
          </Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          This iguana t-shirt is perfect for all your outdoor activities.
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="large">
          <AddShoppingCart
            size="small"
            sx={{
              mr: 1,
            }}
          />
          Add To Cart
        </Button>
        <Rating name="read-only" value={4.5} precision={0.5} readOnly />
      </CardActions>
    </Card>
  );
};

export default CardComponent;
