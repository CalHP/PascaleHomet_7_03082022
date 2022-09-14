import { useEffect, useState } from "react";

import delicateArch from "../assets/images/0158.JPG";

// importation du style
import {ButtonCard,ButtonDiv,ButtonLikeDislike,CardPage,Card,MsgCard,LikeDiv,ImgDiv,
  ImgP,ImgLoaded,Msg,MsgParagraph,IconDiv} from "../utils/style/stylepost";

// importation des icones like et dislike
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";

import PostForm from "../components/PostForm/postform";

// document.body.style = "background :"+ colors.secondary;

function DisplayPosts() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    fetch("`http://localhost:3000/api/post`").then((response) =>
      response.json()).then(( postData) => {
        setPostData(postData);
      })
    .catch((err) => console.log("Erreur : " + err));
  }, []);  

  return (
    <CardPage>
      <PostForm />
      {/* début Carte */}
      <Card>
        <ImgDiv>
          <ImgLoaded id="photoCard" src={delicateArch} alt="" />
          <ImgP id="nameCard">Pascale HOMET --- {date}</ImgP>
        </ImgDiv>
        <MsgCard>
          <Msg id="msgCard">
            <MsgParagraph>{postData["text"]}
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
