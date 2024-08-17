import { useTheme } from "@emotion/react";
import {
  Inbox,
  KeyboardArrowRightOutlined,
  Mail,
  Menu as MenuIcon,
  Window,
} from "@mui/icons-material";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { useState } from "react";

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

  const list = () => (
    <Box
      sx={{ width: "auto", height: "100vh" }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
            color: "inherit",
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
      <Box>
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="top"
          open={openDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          sx={{
            ".MuiPaper-root": { height: "100vh" },
          }}
        ></SwipeableDrawer>
      </Box>
    </Container>
  );
};

export default MenuComponent;
