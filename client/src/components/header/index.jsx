import { Box } from "@mui/material";
import Filter from "./Filter";
import Menu from "./MenuComponent";
import TopBar from "./TopBar";

const index = () => {
  return (
    <>
      <TopBar />
      <Filter />
      <Menu />
    </>
  );
};

export default index;
