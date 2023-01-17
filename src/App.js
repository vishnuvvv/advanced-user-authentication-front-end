
import './App.css';

import React from 'react'
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <React.Fragment>
    <header>
    <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/signin" element={<Signin/> }/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/user" element={<Welcome/>}/>
      </Routes>
    </main>
    </React.Fragment>
  )
}

export default App
