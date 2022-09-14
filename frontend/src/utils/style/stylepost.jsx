import styled from "styled-components";
import colors from "./colors";

// Mise en page DisplayPosts
export const CardPage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 1% 25%;
`;
// Mise en page de la carte des posts API
export const Card = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  margin-bottom: 5%;
  padding: 2%;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 9px ${colors.secondary};
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
  padding-top: 2%;
`;
export const ImgLoaded = styled.img`
  width: 80%;
  margin-left: 4%;
`;
export const Msg = styled.div`
  display: flex;
  height: 75%;
  overflow-y: auto;
  border-radius: 20px;
`;
export const MsgParagraph = styled.p`
  margin: 0;
  padding: 3%;
`;
export const IconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 2%;
`;
// Bouton page DisplayPosts
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
