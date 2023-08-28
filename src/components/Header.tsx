import { AppBar, Box, Button, Card, Toolbar } from "@mui/material";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import GameSortPanel from "./GamesSortPanel/GamesSortPanel";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setPlatform, setSortBy } from "../store/slices/selectionSlice";

const Header = () => {
  // const { pathname } = useLocation();
  // const navigate = useNavigate();

console.log('HEADER RENDER');


  return (
    <Card sx={{ flexGrow: 1, borderRadius: "10px" }}>
      <AppBar position="static">
        <Toolbar>
          {/* {pathname === "/game" && ( */}
            {/* <Button onClick={() => navigate("/games")} color="inherit">
              Вернуться на главную
            </Button> */}
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Card>
  );
};

export default Header;
