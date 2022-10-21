import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FormModifyPage = styled.form`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 7%;
  padding: 2%;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 6px ${colors.backgroundLight};
`;
export const TextareaModifyPage = styled.textarea`
  box-shadow: 0px 0px 16px 6px ${colors.backgroundLight};
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1%;
`;
