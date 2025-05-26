import { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router";
import Header from './components/header';
import Footer from "./components/footer";
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import Profil from './pages/profil';
import About from './pages/about';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import SuccessfulLogin from './pages/successfulLogin';
import SuccessfulResetPassword from './pages/successfulResetPassword';

function App() {

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login' element={<Login />} ></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='/profil' element={<Profil />} ></Route>
            <Route path='/register' element={<Register />} ></Route>
            <Route path='/dashboard' element={<Dashboard />} ></Route>
            <Route path='/ra' element={<SuccessfulResetPassword />} ></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
