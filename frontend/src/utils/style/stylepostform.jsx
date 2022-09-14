import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FormPage = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  padding: 2%;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 6px ${colors.backgroundLight};
`;
export const Buttondisplay = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const TextDiv = styled.div`
  width: 100%;
`;
export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  margin-bottom:1%;
`;