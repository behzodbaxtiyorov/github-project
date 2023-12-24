
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'

function App() {
  
  return (
    <BrowserRouter>
       <div className='App'>
         <Navbar />
         <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/profile' element={<Profile />}/>
         </Routes>
      
    </div>
    </BrowserRouter>
    
  )
}

export default App
