import React from 'react';
import './App.css';
import Home from "./pages/home_page/HomePage"
import SearchPage from './pages/search_page/SearchPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/" />
      <Route element={<SearchPage/>} path="/search" />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
