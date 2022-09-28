import styled from "styled-components";
import colors from "./colors";

// Mise en page DisplayPosts
export const CardPage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 1% auto;
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
  margin-left: 4%;
`;
export const ImgLoaded = styled.img`
  width: 70%;
  height: 170px;
  object-fit: contain;
`;
export const Msg = styled.div`
  display: flex;
  height: 75%;
  width: 100%;
  overflow-y: auto;
  border-radius: 20px;
  box-shadow: -4px -3px 6px 1px ${colors.backgroundLight};
`;
export const MsgParagraph = styled.p`
  margin: 0;
  padding: 3%;
  width: 100%;
`;
export const IconDiv = styled.div`
  width: 10%;
  height: 100%;
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
