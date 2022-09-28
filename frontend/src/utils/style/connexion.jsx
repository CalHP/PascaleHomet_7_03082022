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
export const HomeFormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  padding: 0;
  margin: 0 25% 0 25%;
  height: 25em;
`;
export const LabelLogin = styled.label`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -5%;
`;
export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
  font-size: 15px;
`;
export const ButtonLogin = styled.input`
  cursor: pointer;
  padding: 1% 2%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  border-radius: 50px;
  letter-spacing: 1px;
  background-color: ${colors.backgroundLight};
  border: none;
`;
export const ErrorConnexionLogin = styled.p`
  margin: 0;
  font-size: 20px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
// Mise en page register
export const HomeFormRegister = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  padding-top: 0.2%;
  margin: 0 5% 0 5%;
`;
export const ErrorConnexion = styled.p`
  font-size: 1px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
export const DivCheckbox = styled.div`
  padding: 2% 1% 1% 35%;
`;
export const ButtonRegister = styled.input`
  cursor: pointer;
  padding: 1% 2%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  border-radius: 50px;
  letter-spacing: 1px;
  background-color: ${colors.backgroundLight};
  border: none;
  margin-left: 25%;
`;
export const LabelRegister = styled.label`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
`;
export const LabelTerms = styled.label`
  font-size: 20px;
  padding: 0 1% 1% 2%;
  color: ${colors.white};
`;
export const FormDisplayDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2%;
`;
export const LabelDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

// Composants communs pages de connection
export const HomeInput = styled.input`
  font-size: 20px;
  border-radius: 20px;
`;
export const ButtonFormChange = styled.input`
  cursor: pointer;
  padding-left: 5%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
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
