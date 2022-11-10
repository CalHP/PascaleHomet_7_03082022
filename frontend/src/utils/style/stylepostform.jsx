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
  @media (max-width: 454px) {
    height: 240px;
  }
`;
export const FormDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2%;
  margin-left: -5%;
  @media (max-width: 768px) {
    margin: 0;
    margin-left: -2%;
  }
  @media (max-width: 454px) {
    flex-direction: column;
    align-content: space-around;
    height: 184px;
  }
`;
export const ImgLoadedCreatePost = styled.img`
  width: 107%;
  height: 170px;
  object-fit: contain;
  margin-top: 4%;
  @media (max-width: 768px) {
    height: 137px;
    margin-left: -3%;
  }
  @media (max-width: 454px) {
    width: 100%;
    height: 110px;
  }
`;
export const Buttondisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2% 8%;
`;
export const TextDiv = styled.div`
  width: 100%;
`;
export const DivImgLegende = styled.div`
  width: 65%;
  height: 210px;
  @media screen and (max-width: 768px) {
    height: 175px;
  }
  @media screen and (max-width: 454px) {
    width: 100%;
  }
`;
export const Textarea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1%;
  padding: 1%;
  width: 94%;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 1%;
    height: 160px;
    margin-top: 1%;
  }
  @media screen and (max-width: 454px) {
    margin: 2px auto;
    margin-left: 4px;
    font-size: 12px;
  }
`;
export const PhotoPath = styled.div`
  width: 90%;
  margin: 0;
  margin-left: 9%;
  font-size: 12px;
  height: 20px;
  text-align: center;
  @media screen and (max-width: 454px) {
    margin-left: 0;
    width: 100%;
  }
`;
