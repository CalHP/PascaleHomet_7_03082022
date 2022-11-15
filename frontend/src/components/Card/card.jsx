import React, { useState, useEffect } from "react";
import axios from "axios";

/* importation du style */
import {
  ButtonCard,
  ButtonDiv,
  ButtonLikeDislike,
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
  DisplayLikeDiv,
} from "../../utils/style/stylepost";

// importation des icones like et dislike, supprimer , modifier
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as solidThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown as solidThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan as TrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare as PenToSquare } from "@fortawesome/free-solid-svg-icons";

function DisplayCards(props) {
  let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
  let token = user[2];
  let userId = user[0];
  let role = user[1];
  let postData = props.postData;
  const setPostData = props.setPostData;

  const postElement = props.item;
  const key = props.index;
  const [likeCurrentUser, setLikeCurrentUser] = useState();
  const [dislikeCurrentUser, setDislikeCurrentUser] = useState();
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  const [likeClass, setLikeClass] = useState();
  const [dislikeClass, setDislikeClass] = useState();
  const [onClick, setOnClick] = useState(false);

  /* Affichage de la date Version France */
  function getFrenchDate(date) {
    var postDate = new Date(date).toLocaleString().slice(0, 10);
    return postDate;
  }

  /* Traitement des like et dislike*/
  async function getIfLiked(usersLiked) {
    let test = usersLiked.includes(userId);
    setOnClick(true);
    if (test) {
      return 0;
    } else {
      return 1;
    }
  }

  async function getIfDisliked(usersDisliked) {
    let test = usersDisliked.includes(userId);
    setOnClick(true);
    if (test) {
      return 0;
    } else {
      return -1;
    }
  }
  useEffect(() => {
    if (!postElement.usersLiked.includes(userId)) {
      setLikeCurrentUser(0);
      setLikeClass("icon-black");
    } else {
      setLikeCurrentUser(1);
      setLikeClass("like-green");
    }
    if (!postElement.usersDisliked.includes(userId)) {
      setDislikeCurrentUser(0);
      setDislikeClass("icon-black");
    } else {
      setDislikeCurrentUser(1);
      setDislikeClass("dislike-red");
    }
    setCountLike(postElement.likes);
    setCountDislike(postElement.dislikes);
  }, [
    postElement.dislikes,
    postElement.likes,
    postElement.usersDisliked,
    postElement.usersLiked,
    userId,
  ]);

  async function likeOrDislike(e, postId, like, index) {
    e.preventDefault();

    like.then((value) => {
      if (
        (value === 1 &&
          (postElement.usersDisliked.includes(userId) ||
            dislikeCurrentUser === 1 ||
            onClick === true)) ||
        (value === -1 &&
          (postElement.usersLiked.includes(userId) ||
            likeCurrentUser === 1 ||
            onClick === true))
      ) {
        const data = { like: 0 };
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}post/${postId}/like`,
          data: data,
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.data.errors) {
              console.log(res.data.errors);
            } else {
             if (res.data.message === "Like supprimé !") {
              console.log("coucou like suppr 1")
                setLikeCurrentUser(0);
                setCountLike(countLike - 1);
                setLikeClass("icon-black");
              } else if (res.data.message === "Dislike supprimé !") {
                console.log("coucou disl suppr 1")
                setDislikeCurrentUser(0);
                setCountDislike(countDislike - 1);
                setDislikeClass("icon-black");
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
        const data = { like: value };
        axios({
          method: "post",
          url: `${process.env.REACT_APP_API_URL}post/${postId}/like`,
          data: data,
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            if (res.data.errors) {
              console.log(res.data.errors);
            } else {
              if (res.data.message === "Like ajouté !") {
                console.log("coucou like ajout")
                setCountLike(countLike + 1);
                setLikeClass("like-green");
              } else if (res.data.message === "Dislike ajouté !") {
                console.log("coucou dislike ajout")
                setCountDislike(countDislike + 1);
                setDislikeClass("dislike-red");
              } else if (res.data.message === "Like supprimé !") {
                console.log("coucou like suppr 2")
                setLikeCurrentUser(0);
                setCountLike(countLike - 1);
                setLikeClass("icon-black");
              } else if (res.data.message === "Dislike supprimé !") {
                console.log("coucou dislike suppr 2")
                setDislikeCurrentUser(0);
                setCountDislike(countDislike - 1);
                setDislikeClass("icon-black");
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          postData = postData.filter((key, i) => i !== index);

          setPostData(postData);
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
  return (
    <Card key={key} id="card">
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
                  likeOrDislike(
                    e,
                    postElement._id,
                    getIfLiked(postElement.usersLiked)
                  );
                }}
              >
                <FontAwesomeIcon icon={solidThumbsUp} className={likeClass} />
                <LikeCount> {countLike} </LikeCount>
              </ButtonLikeDislike>
            </IconDiv>
            <IconDiv id="dislike">
              <ButtonLikeDislike
                onClick={(e) => {
                  likeOrDislike(
                    e,
                    postElement._id,
                    getIfDisliked(postElement.usersDisliked),
                    key
                  );
                }}
              >
                <FontAwesomeIcon
                  icon={solidThumbsDown}
                  className={dislikeClass}
                />
                <LikeCount>{countDislike}</LikeCount>
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
                <FontAwesomeIcon
                  icon={PenToSquare}
                  className="btn-icon icon-modify-delete"
                />
              </ButtonCard>
              <ButtonCard
                type="submit"
                value="Supprimer"
                onClick={(e) => {
                  deletePost(e, postElement._id, key);
                }}
              >
                <FontAwesomeIcon
                  icon={TrashCan}
                  className="btn-icon icon-modify-delete"
                />
              </ButtonCard>
            </ButtonDiv>
          )}
        </LikeButtonDiv>
      </MsgCard>
    </Card>
  );
}
export default DisplayCards;
