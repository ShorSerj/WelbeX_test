import React from 'react';
import './reset.css';
import './style.css';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Main from './components/Main/Main.jsx';
import ToDoContainer from './components/ToDoList/ToDoContainer.jsx';

const App = (prop) => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/todo' element={<ToDoContainer/>} />
      </Routes>
    </>     
  );
}

export default App

