import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import GamePage from '../pages/GamePage'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/:id' element={<GamePage/>}/>
    </Routes>
  )
}

export default Router