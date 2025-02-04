import React from 'react';
import './App.css';
import Navbar from './layouts/Navbar';
import Sidebar from './layouts/Sidebar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProductList from './pages/ProductList';
import ProductForm from './forms/ProductForm';

function App() {

  const isSidebarActive = useSelector((state) => state.basic.isSidebarActive);

  return (
    <BrowserRouter>
      <div id="App">
        <div className={`app-left ${!isSidebarActive && "wd-0"}`}>
          <Sidebar />
        </div>
        <div className="app-right">
          <Navbar />
          <Routes>
            <Route path="/product/list" element={<ProductList/>}/>
            <Route path="/product/add" element={<ProductForm/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
