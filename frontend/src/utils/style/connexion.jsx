import styled from "styled-components";
import colors from "./colors";

// Présentation page d'accueil -connexion
export const HomeImg = styled.img`
  height: 33em;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
`;
export const HomeDiv = styled.div`
  background: ${colors.primary};
  height: 33em;
`;

// Mise en page Login
export const HomeForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  height: 30%;
  padding: 30px;
  padding: 0;
  padding-top: 2%;
  margin: 0 20% 0 20%;
`;
export const HomeInput = styled.input`
  font-size: 25px;
  border-radius: 20px;
`;
export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
  font-size: 15px;
`;
// Composants communs pages de connection
export const Button = styled.input`
  cursor: pointer;
  padding: 2% 3%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  border-radius: 50px;
  letter-spacing: 1px;
  background-color: ${colors.backgroundLight};
  border: none;
`;
export const Label = styled.label`
  color: ${colors.secondary};
  font-size: 20px;
  font-weight: bold;
`;
export const ButtonFormChange = styled.input`
  cursor: pointer;
  padding-left: 15%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  letter-spacing: 1px;
  background-color: transparent;
  border: none;
`;

// Bouton page Layout
export const ButtonCard = styled.input`
  width: 25%;
  height: 50px;
  font-size: 2px;
  color: ${colors.secondary};
  margin-top: 1.5%;
  margin-left: 5%;
  border-radius: 10%;
  border: none;
  font-size: 20px;
  background-color: ${colors.backgroundLight};
`;
export const ButtonDiv = styled.div`
  display: flex;
  width: 85%;
  padding-right: 1%;
  justify-content: flex-end;
`;
export const ButtonLikeDislike = styled.button`
  background: none;
  border: none;
`;
