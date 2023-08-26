import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import GamePage from '../pages/GamePage/GamePage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/game' element={<GamePage/>}/>
    </Routes>
  )
}

export default Router