import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";
import PostForm from "../components/PostForm/postform";

// importation du style
import {
  ButtonCard,
  ButtonDiv,
  ButtonLikeDislike,
  CardPage,
  Card,
  MsgCard,
  LikeDiv,
  ImgDiv,
  ImgP,
  ImgLoaded,
  Msg,
  MsgParagraph,
  IconDiv,
} from "../utils/style/stylepost";

// importation des icones like et dislike
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons";

function DisplayPosts() {
  const [postData, setPostData] = useState([]);
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}post`)
      .then((res) => {
        setPostData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <CardPage>
      <PostForm />
      {/* début Carte */}
      {postData.map((postElement) => (
        <Card key={postElement._id}>
          <ImgDiv>
            <ImgLoaded id="photo" src={postElement.imageUrl} alt="" />
            <ImgP id="nameCard">Pascale HOMET --- {/*date*/}</ImgP>
          </ImgDiv>
          <MsgCard>
            <Msg id="msgCard">
              <MsgParagraph>{postElement.text}</MsgParagraph>
            </Msg>
            <LikeDiv id="likeOrdilike">
              <IconDiv id="like">
                <ButtonLikeDislike /*onClick={this.}*/>
                  <FontAwesomeIcon icon={faThumbsUp} className="icon-empty" />
                  <FontAwesomeIcon icon={solidThumbsUp} className="icon-full" />
                </ButtonLikeDislike>
              </IconDiv>
              <IconDiv id="dislike">
                <ButtonLikeDislike /*onClick={this.}*/>
                  <FontAwesomeIcon icon={faThumbsDown} className="icon-empty" />
                  <FontAwesomeIcon
                    icon={solidThumbsDown}
                    className="icon-full"
                  />
                </ButtonLikeDislike>
              </IconDiv>
              <ButtonDiv>
                <ButtonCard type="submit" value="Modifier" />
                <ButtonCard type="submit" value="Supprimer" />
              </ButtonDiv>
            </LikeDiv>
          </MsgCard>
        </Card>
      ))}
      {/* Fin carte */}
    </CardPage>
  );
}

export default DisplayPosts;

{/* <ImgDiv> */}
{/* <ImgLoaded id="photo" src={postElement.imageUrl} alt="" /> */}
// {userData.map((userElement)=>(              
  // <ImgP id="nameCard">Pascale HOMET --- {/*date*/}</ImgP>))}
// </ImgDiv>