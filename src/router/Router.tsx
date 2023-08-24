import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import GamePage from '../pages/GamePage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/:id' element={<GamePage/>}/>
    </Routes>
  )
}

export default Router