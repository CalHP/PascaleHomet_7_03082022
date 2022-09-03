import React from "react";

import styled from "styled-components";
import image from "../assets/images/team-work-concept-groupe-de-mains-diverses-ensemble-proces-croisé-132757663.jpg";
import colors from "../utils/style/colors";

import Login from "../components/Login/login.jsx"

const HomeImg = styled.img`
  height: 30em;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
`;
const HomeDiv = styled.div`
  background: ${colors.primary};
  height: 30em;
`;


function DisplayHome() {
  return (
    <HomeDiv>
      <HomeImg src={image} alt="Mains serrées" />
      <Login />
    </HomeDiv>
  );
}
export default DisplayHome;