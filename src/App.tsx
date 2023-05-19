import React from 'react';
import {Routes, Route} from 'react-router-dom';
import OffcanvasExample from './components/OffcanvasExample/OffcanvasExample';
import Posts from "./components/Posts/Posts";
import AboutMe from "./components/AboutMe/AboutMe";
import User from "./components/User/User";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <OffcanvasExample/>
        <Routes>
            <Route path='/' element={<Posts/>}/>
            <Route path="/about-me" element={<AboutMe/>} />
            <Route path="/user" element={<User/>}/>
        </Routes>
      </div>
  );
}

export default App;
