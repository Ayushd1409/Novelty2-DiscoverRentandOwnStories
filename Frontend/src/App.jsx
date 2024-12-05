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
import BookDescription from './components/BookDescription'
import Buy from './components/Buy'


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
      <Route
            path="/BookDescription/:id"
            element={authUser ? <BookDescription /> : <Navigate to="/signup" />}
          /> 
          <Route
            path="/Buy"
            element={authUser ? <Buy /> : <Navigate to="/signup" />}
          /> 
          {/* <Route
            path="/Rent/:id"
            element={authUser ? <Rent /> : <Navigate to="/signup" />}
          />  */}
       <Route path="/signup" element={<SignUp/>}/>

      </Routes>
      <Toaster/>
      </div>
    
    </>
  )
}

export default App