import { FC } from "react";
import { Button, Card, styled } from "@mui/material";
import { To, useLocation, useNavigate } from "react-router-dom";
import GamesSelector from "./GameSelectors/GamesSelector";

const HeaderContainer = styled(Card)({
  borderRadius: "10px",
  alignItems: "center",
  margin: "20px 0",
  overflow: "visible",
  display: "flex",
  padding: "20px",
}) as typeof Card;

const ReturnButton = styled(Button)({
  padding: "10px",
  border: "1px solid #474747",
  borderRadius: "10px",
});

const Header: FC = () => {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const navigateTo = state === "games" ? -1 : "/games";

  return (
    <HeaderContainer component="header">
      {pathname !== "/game" && <GamesSelector />}
      {pathname === "/game" && (
        <ReturnButton onClick={() => navigate(navigateTo as To)} color="inherit">
          Вернуться на главную
        </ReturnButton>
      )}
    </HeaderContainer>
  );
};
export default Header;
