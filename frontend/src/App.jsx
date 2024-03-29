
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';



function App() {
  const { authUser } = useAuthContext();


  return (
    //Protected Routes--> depending on state navigate the user to different endpoints
    <div className='p-4 h-screen flex items-center justify-center'>


      <Routes>

        <Route path='/' element={authUser ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <Signup />} />

      </Routes>
      <Toaster />
    </div>


  )
}

export default App
