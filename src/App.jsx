import React from 'react';
import './reset.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import ToDoList from './components/ToDoList/ToDoList.jsx';

const App = (prop) => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/todo' element={<ToDoList/>} />
      </Routes>
    </>     
  );
}

export default App

