import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/shared/Navbar';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<WelcomePage/>}/>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>
  )
}

export default App
