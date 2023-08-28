import React, { FC } from 'react'
import Router from './router/Router'
import Header from './components/Header'
import { Container } from '@mui/material'

const App: FC = () => {

  return (
    <Container sx={{maxWidth: { xs: "100%", sm: "100%", md: "100%", lg: "1200px"}}}>
    <Header/>
    <Router/>
    </Container>
  )
}


export default App
