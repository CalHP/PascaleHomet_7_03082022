import styled from "styled-components";
import colors from "./colors";

// Présentation page d'accueil -connexion
export const HomeImg = styled.img`
  height: 32em;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
  @media (max-width: 768px) {
    height: 41em;
  }
  @media (max-width: 454px) {
    height: 40em;
  }
`;
export const HomeDiv = styled.div`
  background: ${colors.primary};
  height: 32em;
  @media (max-width: 768px) {
    height: 41em;
  }
  @media (max-width: 454px) {
    height: 40em;
  }
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
  @media (max-width: 768px) {
    margin: 0 10%;
    padding-top: 20%;
  }
  @media (max-width: 454px) {
    margin: 0 4%;
  }
`;
export const LabelLogin = styled.label`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: -5%;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
  @media (max-width: 454px) {
    margin-bottom: -10%;
    margin-left: 5%;
  }
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
  @media (max-width: 768px) {
    width: 40%;
    margin: 0 auto;
    margin-top: 5%;
  }
  @media (max-width: 454px) {
    margin: auto 29%;
    font-size: 18px;
    padding: 2% 3%;
  }
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
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 454px) {
    margin: 0;
  }
`;
export const ErrorConnexion = styled.p`
  font-size: 12px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
`;
export const ErrorConnexionChekbox = styled.p`
font-size: 12px;
color: white;
font-weight: bold;
letter-spacing: 2px;
`;
export const DivCheckbox = styled.div`
  padding: 2% 1% 1% 35%;
  @media (max-width: 454px) {
    padding: 0;
    margin: auto 17%;
  }
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
  @media (max-width: 768px) {
    margin: 0 auto;
  }
  @media (max-width: 454px) {
    margin: auto 33%;
    font-size: 18px;
    padding: 2% 3%;
  }
`;
export const LabelRegister = styled.label`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 454px) {
    font-size: 18px;
    margin-left: 3%;
  }
`;
export const LabelTerms = styled.label`
  font-size: 20px;
  padding: 0 1% 1% 2%;
  color: ${colors.white};
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const FormDisplayDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0px 10%;
  }
  @media (max-width: 454px) {
    flex-direction: column;
  }
`;
export const LabelDisplayDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 454px) {
    width: 95%;
    margin-left: 3%;
    font-size: 15px;
  }
`;

// Composants communs pages de connection
export const HomeInput = styled.input`
  font-size: 20px;
  border-radius: 20px;
  @media (max-width: 768px) {
    margin-top: 5%;
  }
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
  @media (max-width: 768px) {
    margin: 3% auto;
    padding: 0;
    font-size: 18px;
  }
  @media (max-width: 454px) {
    padding: 0;
    margin: 2% 19%;
    font-size: 17px;
  }
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
export const ConnexionDiv = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export const HomeInputRegister = styled.input`
  font-size: 20px;
  border-radius: 20px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ButtonRegisterDiv = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
