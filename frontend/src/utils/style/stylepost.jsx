import styled from "styled-components";
import colors from "./colors";

// Mise en page DisplayPosts
export const CardPage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 1% auto;
  @media (max-width: 1024px) {
    width: 90%;
  }
`;
// Mise en page de la carte des posts API
export const Card = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
  padding: 2%;
  border-radius: 20px;
  box-shadow: 0px 0px 13px 9px ${colors.secondary};
  @media (max-width: 454px) {
    height: 180px;
  }
`;
export const MsgCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  width: 60%;
`;
export const LikeDiv = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
`;
export const ImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 38%;
`;
export const ImgP = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  margin-top: 4%;
  margin-left: 2%;
  @media (max-width: 660px) {
    font-size: 10px;
  }
  @media (max-width: 454px) {
    width: 100%;
    margin: 0;
    height: 33px;
    margin-left: -2%;
  }
`;
export const ImgLoaded = styled.img`
  width: 70%;
  height: 170px;
  object-fit: contain;
  @media (max-width: 454px) {
    width: 46%;
    margin-left: 15%;
    margin-top: 5%;
  }
`;
export const Msg = styled.div`
  display: flex;
  height: 75%;
  width: 100%;
  overflow-x: hidden;
  border-radius: 20px;
  box-shadow: -4px -3px 6px 1px ${colors.backgroundLight};
  @media (max-width: 660px) {
    height: 160px;
  }
  @media (max-width: 454px) {
    height: 100px;
    margin-top: 7%;
    border-radius: 8px;
  }
`;
export const MsgParagraph = styled.p`
  margin: 0;
  padding: 3%;
  width: 100%;
  @media (max-width: 454px) {
    font-size: 14px;
  }
`;
export const IconDiv = styled.div`
  width: 10%;
  height: 100%;
  @media (max-width: 454px) {
    margin-right: 3%;
  }
`;
// Bouton page DisplayPosts
export const ButtonCard = styled.input`
  width: 25%;
  height: 40px;
  color: ${colors.secondary};
  margin-left: 5%;
  border-radius: 18px;
  border: none;
  font-size: 18px;
  background-color: ${colors.backgroundLight};
  @media (max-width: 768px) {
    font-size: 15px;
    width: 26%;
  }
  @media (max-width: 660px) {
    font-size: 13px;
    width: 26%;
    font-weight: bold;
  }
  @media (max-width: 454px) {
    font-size: 12px;
    width: 34%;
    border-radius: 10px;
    padding: 0;
    margin-top: 2%;
    height: 25px;
  }
`;
export const ButtonDiv = styled.div`
  display: flex;
  width: 85%;
  padding-right: 1%;
  justify-content: flex-end;
`;
export const ButtonLikeDislike = styled.button`
  display: flex;
  background: none;
  border: none;
`;
export const LikeCount = styled.div`
  padding-left: 14%;
`;
