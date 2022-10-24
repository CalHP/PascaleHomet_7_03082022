import { useEffect, useState } from "react";
import axios from "axios";
import PostForm from "../components/PostForm/postform";

/* importation du style */
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
  LikeCount,
} from "../utils/style/stylepost";

// importation des icones like et dislike
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons";

function DisplayPosts(props) {
  const [postData, setPostData] = useState([]);
  const [countLike, setCountLike] = useState();
  const [countDislike, setCountDislike] = useState();
  // const [onePost, setOnePost] = useState([]);

  let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
  let token = user[2];
  let id = user[0];
  let role = user[1];

  /*Requête pour récupérer les post dans l'API */
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

  /* Affichage de la date Version France */
  function getFrenchDate(date) {
    var postDate = new Date(date).toLocaleString().slice(0, 10);
    return postDate;
  }
  /* Traitement des like et dislike*/
  function likeOrDislike(e, postId) {
    e.preventDefault();
    const emptyLike = document.querySelector(".like-empty");
    const fullLike = document.querySelector(".like-full");
    const emptyDislike = document.querySelector(".dislike-empty");
    const fullDislike = document.querySelector(".dislike-full");

    let likeordislikeform = new FormData();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/${postId}/like`,
      // data: {},
    });
  }

  /* suppression d'un post*/
  async function deletePost(e, idPost, index) {
    e.preventDefault();

    let deleteForm = new FormData();
    deleteForm.append("userId", id);

    await axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}post/${idPost}`,
      data: deleteForm,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          setPostData((postData) => postData.filter((item, i) => i !== index));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /* modification d'un post */
  async function modifyPost(e, idPost) {
    e.preventDefault();
    window.location = "/modify_post/" + idPost;
  }

  /* Affichage de la page des Post */
  return (
    <CardPage>
      <PostForm postData={postData} setPostData={setPostData} />
      {/* début Carte */}
      {postData.map((postElement, index) => (
        <Card key={index} id="card">
          <ImgDiv>
            <ImgLoaded id="photo" src={postElement.imageUrl} alt="" />
            <ImgP id="nameCard">
              {postElement.user.firstname} {postElement.user.name} le{" "}
              {getFrenchDate(postElement.created_at)}
            </ImgP>
          </ImgDiv>
          <MsgCard>
            <Msg id="msgCard">
              <MsgParagraph>{postElement.text}</MsgParagraph>
            </Msg>
            <LikeDiv id="likeOrdislike">
              <IconDiv id="like">
                <ButtonLikeDislike
                  onClick={(e) => {
                    likeOrDislike(e, postElement._id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    className="icon-empty like-empty"
                  />
                  <FontAwesomeIcon
                    icon={solidThumbsUp}
                    className="icon-full like-full"
                  />
                  <LikeCount> {countLike} </LikeCount>
                </ButtonLikeDislike>
              </IconDiv>
              <IconDiv id="dislike">
                <ButtonLikeDislike
                  onClick={(e) => {
                    likeOrDislike(e, postElement._id);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="icon-empty dislike-empty"
                  />
                  <FontAwesomeIcon
                    icon={solidThumbsDown}
                    className="icon-full dislike-full"
                  />
                  <LikeCount> {countDislike} </LikeCount>
                </ButtonLikeDislike>
              </IconDiv>
              {(postElement.user._id === id || role === true ) && (
                <ButtonDiv>
                  <ButtonCard
                    type="submit"
                    value="Modifier"
                    onClick={(e) => {
                      modifyPost(e, postElement._id);
                    }}
                  />
                  <ButtonCard
                    type="submit"
                    value="Supprimer"
                    onClick={(e) => {
                      deletePost(e, postElement._id, index);
                    }}
                  />
                </ButtonDiv>
              )}
            </LikeDiv>
          </MsgCard>
        </Card>
      ))}
      {/* Fin carte */}
    </CardPage>
  );
}

export default DisplayPosts;
