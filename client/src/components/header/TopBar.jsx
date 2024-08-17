import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../Theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const TopBar = () => {
  const options = ["EN", "FR"];
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      py={1}
      sx={{
        bgcolor: "#2b3445",
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center">
          <Typography
            sx={{
              mr: 2,
              p: "3px 10px",
              bgcolor: "#d23f57",
              color: "white",
              fontWeight: "bold",
              fontSize: "10px",
              borderRadius: "12px",
            }}
            variant="body2"
          >
            HOT
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: "12px",
              fontWeight: "300",
            }}
            variant="body2"
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined
                  sx={{
                    color: "#fff",
                  }}
                />
              </IconButton>
            )}
          </div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              m: 0,
              p: 0,
            }}
          >
            <ListItemButton
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{
                "&:hover": {
                  backgroundColor: "#ffffff00",
                },
              }}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  ".MuiTypography-root": {
                    fontSize: "14px",
                    color: "#fff",
                  },
                }}
              />
              <ExpandMore
                sx={{
                  color: "#fff",
                }}
              />
            </ListItemButton>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "11px",
                  padding: "8px 18px",
                  minHeight: "10px",
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          <TwitterIcon
            sx={{
              color: "#fff",
            }}
          />
          <FacebookIcon
            sx={{
              color: "#fff",
              mx: 1,
            }}
          />
          <InstagramIcon
            sx={{
              color: "#fff",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default TopBar;
