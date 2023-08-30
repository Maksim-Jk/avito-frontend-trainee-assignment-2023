import { Box, Button, Card } from "@mui/material";
import { To, useLocation, useNavigate } from "react-router-dom";
import GamesSelector from "./GameSelectors/GamesSelector";

const Header = () => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const navigateTo = state === "games" ? -1 : "/games";

  return (
    <Card component="header" sx={{ borderRadius: "10px", alignItems: "center", margin: "20px 0" }}>
      <Box sx={{ display: "flex", alignItems: "center", height: "100%", padding: "20px" }}>
        {pathname !== "/game" && <GamesSelector />}
        {pathname === "/game" && (
          <Button
            onClick={() => navigate(navigateTo as To)}
            color="inherit"
            sx={{ padding: "15px 20px", border: "1px solid #474747", borderRadius: "10px" }}
          >
            Вернуться на главную
          </Button>
        )}
      </Box>
    </Card>
  );
};
export default Header;
