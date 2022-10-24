import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FormPage = styled.form`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
  padding: 2%;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 6px ${colors.backgroundLight};
`;
export const FormDiv = styled.div`
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
    height: 200px;
  }
`;
export const ImgLoadedCreatePost = styled.img`
  width: 107%;
  height: 170px;
  object-fit: contain;
  @media (max-width: 768px) {
    height: 158px;
  }
  @media (max-width: 670px) {
    width: 77%;
  }
  @media (max-width: 454px) {
    width: 100%;
    height: 125px;
  }
`;
export const Buttondisplay = styled.div`
  display: flex;
  justify-content: space-around;
  @media screen and  (max-width: 454px) {
    justify-content: space-evenly;
  }
`;
export const TextDiv = styled.div`
  width: 100%;
`;
export const DivImgLegende = styled.div`
  width: 65%;
  height: 210px;
  @media screen and  (max-width: 454px) {
    width:100%;
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1%;
  padding: 1%;
  @media screen and  (max-width: 454px) {
    margin: 2px auto;
    margin-left: 4px;
  }
`;
export const PhotoPath = styled.div`
  width: 88%;
  margin: 0;
  margin-left: 9%;
  font-size: 12px;
  height: 20px ;
  @media screen and  (max-width: 454px) {
    margin-left: 0;
    text-align: center;
  }
`;
