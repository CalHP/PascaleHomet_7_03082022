import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './utils/style/style.css';

import Header from "./components/Header/header";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer"
import LayoutPost from "./pages/PostLayouts";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
      
    }
`

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <GlobalStyle/>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path ="/layout" element = {<LayoutPost/>}></Route>
    </Routes>
    <Footer/>
  </Router>
);

