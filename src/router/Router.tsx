import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import GamePage from '../pages/GamePage'

const Router = () => {
  return (
    <Routes>
        <Route path='/games' element={<HomePage/>}/>
        <Route path='/game' element={<GamePage/>}/>
        <Route path="*" element={<Navigate to="/games" replace />} />
    </Routes>
  )
}

export default Router