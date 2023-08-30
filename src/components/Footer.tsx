import { Box, Button, Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { To, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <Card
      component="footer"
      sx={{ borderRadius: "10px", alignItems: "center", margin: "20px 0", overflow: "visible" }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "20px",
        }}
      >
        <Typography>2023</Typography>
        <Typography>frontend-trainee-assignment-2023</Typography>
        <a target="_blank" href="https://github.com/Maksim-Jk/avito-frontend-trainee-assignment-2023">
          <Typography color="text.primary">Github</Typography>
        </a>
      </Box>
    </Card>
  );
};
export default Footer;
