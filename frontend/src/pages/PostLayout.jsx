import colors from "../utils/style/colors";
import styled from "styled-components";

import delicateArch from "../assets/images/0158.JPG";
import climbing from "../assets/images/IMG_0013.jpg";

// importation du style
import { ButtonCard, ButtonDiv,ButtonLikeDislike } from "../utils/style/connexion";

// importation des icones like et dislike
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

const CardPage = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 1% 25%;
`;

const Card = styled.div`
  display: flex;
  margin-bottom: 5%;
  height: 25em;
  padding: 2%;
  justify-content: space-between;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 12px ${colors.secondary};
`;
const MsgCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  width: 60%;
`;
const LikeDiv = styled.div`
  width: 100%;
  display: flex;
  height: 20%;
`;
const ImgDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  // text-align: center;
  width: 38%;
`;
const ImgP = styled.p`
  margin-left: 2%;
  font-size: 15px;
  letter-spacing: 1px;
`;
const ImgLoaded = styled.img`
  height: 0 auto;
`;
const Msg = styled.div`
  display: flex;
  height: 75%;
  overflow-y: auto;
  background-color: ${colors.secondary};
  border-radius: 20px;
`;
const MsgParagraph = styled.p`
  margin: auto;
  padding: 3%;
`;
const IconDiv = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 2%;
`;

function DisplayPosts() {
  return (
    <CardPage>
      {/* début Carte */}
      <Card>
        <ImgDiv>
          <ImgLoaded id="photoCard" src={delicateArch} alt="" />
          <ImgP id="nameCard">Pascale HOMET --- 2 septembre 2022</ImgP>
        </ImgDiv>
        <MsgCard>
          <Msg id="msgCard">
            <MsgParagraph>
              Ce n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles Ce
              n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles Ce
              n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles
            </MsgParagraph>
          </Msg>
          <LikeDiv id="likeOrdilike">
            <IconDiv id="like">
              <ButtonLikeDislike /*onClick={this.}*/>
                <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              </ButtonLikeDislike>
            </IconDiv>
            <IconDiv id="dislike">
              <ButtonLikeDislike /*onClick={this.}*/>
                <FontAwesomeIcon icon={faThumbsDown} className="icon" />
              </ButtonLikeDislike>
            </IconDiv>
            <ButtonDiv>
              <ButtonCard type="submit" value="Modifier" />
              <ButtonCard type="submit" value="Supprimer" />
            </ButtonDiv>
          </LikeDiv>
        </MsgCard>
      </Card>
      {/* Fin carte */}
      {/* début Carte */}
      <Card>
        <ImgDiv>
          <ImgLoaded id="photoCard" src={climbing} alt="" />
          <ImgP id="nameCard">Pascale HOMET</ImgP>
        </ImgDiv>
        <MsgCard>
          <Msg id="msgCard">
            <MsgParagraph>
              Ce n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles Ce
              n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles Ce
              n'est pas parce que les choses sont difficiles que nous n'osons
              pas, c'est parce que nous n'osons pas qu'elles sont difficiles
            </MsgParagraph>
          </Msg>
          <LikeDiv id="likeOrdilike">
          <IconDiv id="like">
              <ButtonLikeDislike /*onClick={this.}*/>
                <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              </ButtonLikeDislike>
            </IconDiv>
            <IconDiv id="dislike">
              <ButtonLikeDislike /*onClick={this.}*/>
                <FontAwesomeIcon icon={faThumbsDown} className="icon" />
              </ButtonLikeDislike>
            </IconDiv>
            <ButtonDiv>
              <ButtonCard type="submit" value="Modifier" />
              <ButtonCard type="submit" value="Supprimer" />
            </ButtonDiv>
          </LikeDiv>
        </MsgCard>
      </Card>
      {/* Fin carte */}
    </CardPage>
  );
}

export default DisplayPosts;
