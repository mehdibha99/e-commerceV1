import { useTheme } from "@emotion/react";
import {
  ExpandMore,
  Person2Outlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Filter = () => {
  const options = ["All Categories", "Car", "Clothes", "Electronics"];

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      border: "1px solid #333",
    },
    border: "1px solid #777",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    flexGrow: 0.4,
    minWidth: "300px",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  const theme = useTheme();
  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="column" alignItems="center">
        <ShoppingCartOutlined
          sx={{
            fontSize: "30px",
            mx: "auto",
          }}
        />
        <Typography variant="body1">E-commerce</Typography>
      </Stack>
      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          border: "1px solid #777",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <Box>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              m: 0,
              p: 0,
              bgcolor: theme.palette.myColor.main,
              borderTopRightRadius: "22px",
              borderBottomRightRadius: "22px",
              height: "100%",
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
                    fontSize: "13px",
                    width: "95px",
                    textAlign: "center",
                    fontWeight: "700",
                  },
                }}
              />
              <ExpandMore />
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
            style={{
              position: "fixed", // Use fixed positioning as a last resort
              top: `${anchorEl?.getBoundingClientRect().bottom}px   `, // Position directly below the button
              left: `${anchorEl?.getBoundingClientRect().left}px`,
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{
                  fontSize: "11px",
                  padding: "8px 18px",
                  minHeight: "10px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#ffffff00",
                  },
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Search>

      <Stack direction="row" alignItems="center">
        <IconButton>
          <Person2Outlined
            sx={{
              fontSize: "30px",
            }}
          />
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartOutlined
              sx={{
                fontSize: "30px",
              }}
            />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Filter;
