import styled from "styled-components";
import colors from "./colors";

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

export const FormParagraph = styled.p`
  font-size: 20px;
`;

export const HomeInput = styled.input`
  font-size: 25px;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 5%;
  font-size: 15px;
`;

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
export const ButtonPasInscrit = styled.input`
  cursor: pointer;
  padding-left: 15%;
  font-size: 20px;
  font-weight: bold;
  color: ${colors.secondary};
  letter-spacing: 1px;
  background-color: transparent;
  border: none;
`;
