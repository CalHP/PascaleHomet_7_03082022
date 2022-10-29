import { useEffect, useState } from "react";
import React from "react";
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
  LikeButtonDiv,
  ImgDiv,
  ImgP,
  ImgLoaded,
  Msg,
  MsgParagraph,
  IconDiv,
  LikeCount,
  DisplayLikeDiv
} from "../utils/style/stylepost";

// importation des icones like et dislike, supprimer , modifier
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import { faThumbsDown } from "@fortawesome/free-regular-svg-icons";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan as TrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as PenToSquare } from "@fortawesome/free-solid-svg-icons";

function DisplayPosts(props) {
  const [postData, setPostData] = useState([]);
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
  let token = user[2];
  let userId = user[0];
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
  function likeOrDislike(e, postId, like) {
    e.preventDefault();
    const emptyLike = document.querySelector(".like-empty");
    const fullLike = document.querySelector(".like-full");
    const emptyDislike = document.querySelector(".dislike-empty");
    const fullDislike = document.querySelector(".dislike-full");

    let likeordislikeform = new FormData();
    likeordislikeform.append("id", postId);
    likeordislikeform.append("like", like);

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}${userId}/${like}`,
      data: likeordislikeform,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          switch (like) {
            case 1:
              React.render.findDOMNode(fullLike).className = "like-full";
              break;
            case -1:
              React.render.findDOMNode(fullDislike).className = "dislike-full";
              break;
            case 0:
              React.render.findDOMNode(emptyLike).className = "like-empty";
              React.render.findDOMNode(emptyDislike).className =
                "dislike-empty";
              break;
            default:
          }
          // const element = document.getElementById("ID");
          // ReactDOM.findDOMNode(element).className = "className"
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /* suppression d'un post*/
  async function deletePost(e, idPost, index) {
    e.preventDefault();

    let deleteForm = new FormData();
    deleteForm.append("userId", userId);

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
            <LikeButtonDiv id="likeOrdislike">
              <DisplayLikeDiv>
              <IconDiv id="like">
                <ButtonLikeDislike
                  onClick={(e) => {
                    like === 0 ? setLike(1) : setLike(0);
                    likeOrDislike(e, postElement._id, like);
                  }}
                >
                  <FontAwesomeIcon icon={faThumbsUp} className="like-empty" />
                  <FontAwesomeIcon icon={solidThumbsUp} className="like-full" />
                  <LikeCount>{postElement.likes} </LikeCount>
                </ButtonLikeDislike>
              </IconDiv>
              <IconDiv id="dislike">
                <ButtonLikeDislike
                  onClick={(e) => {
                    like === 0 ? setLike(-1) : setLike(0);
                    likeOrDislike(e, postElement._id, like);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faThumbsDown}
                    className="dislike-empty"
                  />
                  <FontAwesomeIcon
                    icon={solidThumbsDown}
                    className="dislike-full"
                  />
                  <LikeCount>{postElement.dislikes} </LikeCount>
                </ButtonLikeDislike>
              </IconDiv>
              </DisplayLikeDiv>
              {(postElement.user._id === userId || role === true) && (
                <ButtonDiv>
                  <ButtonCard
                    type="submit"
                    value="Modifier"
                    onClick={(e) => {
                      modifyPost(e, postElement._id);
                    }}
                  >
                    <FontAwesomeIcon icon={PenToSquare} className="btn-icon icon-modify-delete" />
                  </ButtonCard>
                  <ButtonCard
                    type="submit"
                    value="Supprimer"
                    onClick={(e) => {
                      deletePost(e, postElement._id, index);
                    }}
                  >
                    <FontAwesomeIcon icon={TrashCan} className="btn-icon icon-modify-delete" />
                  </ButtonCard>
                </ButtonDiv>
              )}
            </LikeButtonDiv>
          </MsgCard>
        </Card>
      ))}
      {/* Fin carte */}
    </CardPage>
  );
}

export default DisplayPosts;
