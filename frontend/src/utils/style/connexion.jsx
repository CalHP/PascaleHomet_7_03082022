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

export const HomePage = styled.div``;
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
  color: ${colors.white};
  border-radius: 50px;
  letter-spacing: 1px;
  background-color: ${colors.backgroundLight};
  border: none;
`;
export const Label = styled.label`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
`;
