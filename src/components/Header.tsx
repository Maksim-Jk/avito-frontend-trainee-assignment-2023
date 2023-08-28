import { AppBar, Box, Button, Card, Toolbar } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom';
import GamesSelector from './GameSelectors/GamesSelector';

const Header = () => {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  console.log('HEADER RENDER');
  

  return (
    <Card sx={{  borderRadius: '10px', padding: '10px', }}>
        <Toolbar sx={{height: 'auto'}}>
          {pathname !== '/game' &&  <GamesSelector/>}
          {pathname === '/game' && (
          <Button onClick={() => navigate(-1)} color="inherit">Вернуться на главную</Button>
          )} 
        </Toolbar>
    </Card>
  )
}

export default Header