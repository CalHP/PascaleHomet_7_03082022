import { useEffect, useState } from "react";
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
  const [like, setLike] = useState();
  const [dislike, setDislike] = useState();
  const [currentPost, setCurrentPost] = useState();

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

  function getFrenchDate(date) {
    var postDate = new Date(date).toLocaleString().slice(0, 10);
    return postDate;
  }

  const likeOrDislike = async (e) => {
    e.preventDefault();
    // const emptyLike = document.querySelector(".like-empty");
    // const fullLike = document.querySelector(".like-full");
    // const emptyDislike = document.querySelector(".dislike-empty");
    // const fullDislike = document.querySelector(".dislike-full");
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/:id/like`,
      data: {  },
    });
  };
  async function modifyPost (e) {
    e.preventDefault();

  }

  return (
    <CardPage>
      <PostForm />
      {/* début Carte */}
      {postData.map((postElement) => (
        <Card key={postElement._id}>
          <ImgDiv>
            <ImgLoaded id="photo" src={postElement.imageUrl} alt="" />
            <ImgP id="nameCard">
              Pascale HOMET le {getFrenchDate(postElement.created_at)}
            </ImgP>
          </ImgDiv>
          <MsgCard>
            <Msg id="msgCard">
              <MsgParagraph>{postElement.text}</MsgParagraph>
            </Msg>
            <LikeDiv id="likeOrdislike">
              <IconDiv id="like">
                <ButtonLikeDislike onClick={likeOrDislike}>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="icon-empty like-empty"
                  />
                  <FontAwesomeIcon
                    icon={solidThumbsUp}
                    className="icon-full like-full"
                  />
                </ButtonLikeDislike>
              </IconDiv>
              <IconDiv id="dislike">
                <ButtonLikeDislike onClick={likeOrDislike}>
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="icon-empty dislike-empty"
                  />
                  <FontAwesomeIcon
                    icon={solidThumbsDown}
                    className="icon-full dislike-full"
                  />
                </ButtonLikeDislike>
              </IconDiv>
              <ButtonDiv>
                <ButtonCard type="submit" value="Modifier" onClick = {modifyPost}  />
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

// {postData.map((postElement) => (
//   <Card key={postElement._id}>
//     <ImgDiv>
//       <ImgLoaded id="photo" src={postElement.imageUrl} alt="" />
//       <ImgP id="nameCard">
//         Pascale HOMET  le  {getFrenchDate(postElement.created_at)}
//       </ImgP>
//     </ImgDiv>
//     <MsgCard>
//       <Msg id="msgCard">
//         <MsgParagraph>{postElement.text}</MsgParagraph>
//       </Msg>
//       <LikeDiv id="likeOrdislike">
//         <IconDiv id="like">
//           <ButtonLikeDislike onClick={like}>
//             <FontAwesomeIcon
//               icon={faThumbsUp}
//               className="icon-empty like-empty"
//             />
//             <FontAwesomeIcon
//               icon={solidThumbsUp}
//               className="icon-full like-full"
//             />
//           </ButtonLikeDislike>
//         </IconDiv>
//         <IconDiv id="dislike">
//           <ButtonLikeDislike /*onClick={this.}*/>
//             <FontAwesomeIcon
//               icon={faThumbsDown}
//               className="icon-empty dislike-empty"
//             />
//             <FontAwesomeIcon
//               icon={solidThumbsDown}
//               className="icon-full dislike-full"
//             />
//           </ButtonLikeDislike>
//         </IconDiv>
//         <ButtonDiv>
//           <ButtonCard type="submit" value="Modifier" />
//           <ButtonCard type="submit" value="Supprimer" />
//         </ButtonDiv>
//       </LikeDiv>
//     </MsgCard>
//   </Card>
// ))}
