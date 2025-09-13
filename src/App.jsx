import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/login'
import Navbar from './components/Navbar'
import Fresh from './pages/Fresh'
import Flower from './pages/Flower'
import Liquor from './pages/Liquor'
import Medicine from './pages/Medicine'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
  return (
    <>
    <div className='bg-gray-200 pt-20'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/fresh' element={<Fresh />} />
        <Route path='/flower' element={<Flower/>}/>
        <Route path='/liquor' element={<Liquor/>}/>
        <Route path='/medicine' element={<Medicine/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
