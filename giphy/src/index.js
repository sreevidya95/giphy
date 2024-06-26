import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Search from './Search';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Saved from './Saved';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Router>
      <Routes>
        <Route path='/' element= {<App />}></Route>
        <Route path='/search' element= {<Search />}></Route>
        <Route path="/saved" element={<Saved/>}></Route>
      </Routes>
    </Router>
   
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

