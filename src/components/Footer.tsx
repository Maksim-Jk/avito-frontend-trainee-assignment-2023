import { FC } from "react";
import { Card, Typography, styled } from "@mui/material";

const FooterContainer = styled(Card)({
  borderRadius: "10px",
  alignItems: "center",
  margin: "20px 0",
  overflow: "visible",
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
}) as typeof Card;

const Footer: FC = () => {
  return (
    <FooterContainer component="footer">
      <Typography>2023</Typography>
      <Typography>frontend-trainee-assignment-2023</Typography>
      <a target="_blank" href="https://github.com/Maksim-Jk/avito-frontend-trainee-assignment-2023">
        <Typography color="text.primary">Github</Typography>
      </a>
    </FooterContainer>
  );
};
export default Footer;
