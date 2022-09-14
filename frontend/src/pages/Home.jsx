import React from "react";

import image from "../assets/images/team-work-concept-groupe-de-mains-diverses-ensemble-proces-croisé-132757663.jpg";

//on importe les 2 composants qui vont être interchangés
import Login from "../components/Login/login"
import Register from "../components/Register/register";
import { useState } from "react";

import { HomeImg, HomeDiv } from "../utils/style/connexion";

function DisplayHome() {
  // on crée un etat pour la page qui va servir a intervertir les components, par default au met "login" pour mettre le login quand on arrive
  const [page, setPage] = useState("login")
  return (
    <HomeDiv>
      <HomeImg src={image} alt="Mains serrées" />
      { // si page est égale a login, on affiche le components login, en lui donnant la fonction setState("register") en props, elle permet de changer l'état de page pour afficher l'autre component
      page === "login" && <Login change={() => setPage("register")}/>}
      { // si page est égale a register, on affiche le components register, en lui donnant la fonction setState("login") en props, elle permet de changer l'état de page pour afficher l'autre component
      page === "register" && <Register change={() => setPage("login")}/>}
    </HomeDiv>
  );
}
export default DisplayHome;