import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./utils/style/style.css";

import Header from "./components/Header/header";
import HeaderPost from "./components/Header/header_deconnexion";
import Home from "./pages/Home";
import Footer from "./components/Footer/footer";
import DisplayPosts from "./pages/DisplayPosts";
import ModifyPost from "./pages/ModifyPost";

const root = ReactDOM.createRoot(document.getElementById("root"));

function DisplayHeader() {
  if ("loginIdentifiers" in localStorage) {
    return <HeaderPost />;
  } else {
    return <Header />;
  }
}

root.render(
  <Router>
    <DisplayHeader />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/display_posts" element={<DisplayPosts />}></Route>
      <Route path="/modify_post/:id" element = {<ModifyPost/>}></Route>
    </Routes>
    <Footer />
  </Router>
);
