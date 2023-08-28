import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  return (
    <Box boxShadow={'0px 4px 4px rgba(0, 0, 0, 0.25)'} sx={{ flexGrow: 1, borderRadius: '10px', overflow: 'hidden' }}>
      <AppBar position="static">
        <Toolbar>
          {pathname === '/game' && (
          <Button onClick={() => navigate("/games")} color="inherit">Вернуться на главную</Button>
          )} 
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header