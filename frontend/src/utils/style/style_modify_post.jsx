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
  @media (max-width: 1024px) {
    margin-top: 12%;
    margin-bottom: 12%;
  }
  @media (max-width: 768px) {
    box-shadow: 0px 0px 16px 6px ${colors.primary};
  }
  @media (max-width: 454px) {
    margin: 12% 2% 12% 2%;
  }
`;
export const TextareaModifyPage = styled.textarea`
  box-shadow: 0px 0px 16px 6px ${colors.backgroundLight};
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1%;
  padding: 1%;
  @media (max-width: 768px) {
    margin-top: 2%;
    margin-right: 2%;
  }
  @media (max-width: 454px) {
    padding-bottom: 25%;
    margin: 0 2%;
  }
`;
export const ButtonDisplayModify = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
  @media (max-width: 454px) {
    margin-top: 8%;
  }
`;
export const FormDivModify = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  margin-left: -5%;
  @media (max-width: 768px) {
    margin-left: -2%;
  }
  @media (max-width: 454px) {
    flex-direction: column;
    align-content: space-around;
  }
`;
export const ImgLoadedModifyPost = styled.img`
  width: 107%;
  height: 170px;
  object-fit: contain;
  margin-top: 4%;
  @media (max-width: 768px) {
    height: 158px;
  }
  @media (max-width: 670px) {
    width: 77%;
  }
  @media (max-width: 454px) {
    width: 100%;
  }
`;
