import React from 'react'
import Home from './home/Home'
// import Books from './components/Books'
import {Navigate, Route, Routes} from "react-router-dom"
import Courses from './courses/Courses'
import SignUp from './components/SignUp'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'
import About from './about/About'
import Contact from './contact/Contact'

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route
            path="/Books"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          /> 
       <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      <Toaster/>
      </div>
    
    </>
  )
}

export default App