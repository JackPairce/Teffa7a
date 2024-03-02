import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

import LoginPage from './LoginPage/LoginPage.jsx'
import HomePage from './HomePages/HomePage.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     <LoginPage />
//     {/* <HomePage /> */}
//   </React.StrictMode>,


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route exact path="/login" element={<LoginPage />}>
        </Route>
        <Route exact path="/" element={<HomePage currentPage={'home'}/>}>
        </Route>
        <Route exact path="/profile" element={<HomePage currentPage={'profile'}/>}>
        </Route>
        <Route exact path="/explore" element={<HomePage currentPage={'explore'}/>}>
        </Route>
        <Route exact path="/accepter" element={<HomePage currentPage={'accepter'}/>}>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)