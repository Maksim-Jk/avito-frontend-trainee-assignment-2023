import { AppBar, Box, Button, Card, Toolbar } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import GamesSelector from './GameSelectors/GamesSelector';

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  console.log('HEADER RENDER');
  

  return (
    <Card component="header" sx={{  borderRadius: '10px', alignItems: 'center', marginTop: '20px'}}>
        <Box sx={{display: 'flex',alignItems: 'center', height: '100%', padding: "20px"}}>
          {pathname !== '/game' &&  <GamesSelector/>}
          {pathname === '/game' && (
          <Button onClick={() => navigate(-1)} color="inherit" sx={{ padding: '15px 20px', border: '1px solid #474747', borderRadius: '10px' }}>Вернуться на главную</Button>
          )} 
        </Box>
    </Card>
  )
}
export default Header