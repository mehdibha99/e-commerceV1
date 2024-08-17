import { useTheme } from "@emotion/react";
import {
  Close,
  ExpandMore,
  KeyboardArrowRightOutlined,
  Menu as MenuIcon,
  Window,
} from "@mui/icons-material";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import LinksDesktop from "./LinksDesktop";

const MenuComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "220px",
            bgcolor: theme.palette.myColor.main,
          }}
        >
          <Window />
          <Typography
            sx={{
              p: 0,
              textTransform: "capitalize",
              mx: 1,
            }}
          >
            Dashboard
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
            }}
          />
          <KeyboardArrowRightOutlined />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiList-root": {
              width: "220px",
              bgcolor: theme.palette.myColor.main,
            },
          }}
        >
          <MenuItem>
            <ListItemIcon>
              <ElectricMopedOutlinedIcon
                fontSize="medium"
                onClick={handleClose}
              />
            </ListItemIcon>
            <ListItemText>Bikes</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="medium" onClick={handleClose} />
            </ListItemIcon>
            <ListItemText>Web Clipboard</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <LaptopChromebookOutlinedIcon
                fontSize="medium"
                onClick={handleClose}
              />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon
                fontSize="medium"
                onClick={handleClose}
              />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem>
        </Menu>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
        }}
      />
      {!useMediaQuery((theme) => theme.breakpoints.up("lg")) ? (
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
      ) : (
        <Stack
          display={"flex"}
          direction={"row"}
          alignItems={"center"}
          spacing={3}
        >
          {[
            "Home",
            "Mega Menu",
            "Full Menu Screan",
            "User Account",
            "Vendor Account",
          ].map((title) => {
            return <LinksDesktop key={title} title={title} />;
          })}
        </Stack>
      )}

      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            height: "100vh",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "80%",
              mx: "auto",
              minHeight: "300px",
              padding: theme.spacing(2),
              mt: 5,
              pt: 10,
            }}
          >
            <IconButton
              sx={{
                top: 8,
                right: 20,
                position: "absolute",
                cursor: "pointer",
                fontSize: "20px",
                opacity: 0.8,
                ":hover": {
                  rotate: "180deg",
                  transition: "0.3s",
                },
              }}
              w
              onClick={toggleDrawer(false)}
            >
              <Close
                sx={{
                  fontSize: "30px",
                  color: theme.palette.text.secondary,
                }}
              />
            </IconButton>

            {[
              "Home",
              "Mega Menu",
              "Full Menu Screan",
              "User Account",
              "Vendor Account",
            ].map((menu) => {
              return (
                <Accordion
                  key={menu}
                  elevation={0}
                  sx={{
                    bgcolor: "initial",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    {menu}
                  </AccordionSummary>
                  <List
                    sx={{
                      p: 0,
                      m: 0,
                    }}
                  >
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="Link" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <ListItemButton>
                        <ListItemText primary="Link" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </SwipeableDrawer>
    </Container>
  );
};

export default MenuComponent;
