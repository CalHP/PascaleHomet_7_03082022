import styled from "styled-components";
import colors from "../../utils/style/colors";

export const FormPage = styled.form`
  overflow:hidden;
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
`;
export const ImgLoadedCreatePost = styled.img`
  width: 70%;
  height: 170px;
  object-fit: contain;
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
  margin-bottom: 1%;
`;
export const PhotoPath = styled.div`
  width: 40%;
  margin-left: -14%;
  padding-left: 1%;
  margin-top: 0.8%;
`;
