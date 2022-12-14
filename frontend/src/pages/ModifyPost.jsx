import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import photo from "../assets/images/photo_par_defaut.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare as PenToSquare } from "@fortawesome/free-solid-svg-icons";

import {
  TextDiv,
  PhotoPath,
  DivImgLegende,
} from "../utils/style/stylepostform";

import {
  FormModifyPage,
  TextareaModifyPage,
  ButtonDisplayModify,
  FormDivModify,
  ImgLoadedModifyPost,
} from "../utils/style/style_modify_post";

export default function ModifyPost() {
  const [text, setText] = useState("");
  const [image, setImage] = useState();
  const [imageUrl, setImageUrl] = useState(photo);
  const [previousImage, setPreviousImage] = useState();

  let params = useParams();
  let id = params.id;

  let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
  let token = user[2];
  let idUser = user[0];

  /**** Requête pour récupérer le post à modifier **********/
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}post/${id}`)
      .then((res) => {
        setPreviousImage(res.data.imageUrl);
        setText(res.data.text);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [id]);

  const uploadImage = async (e, target) => {
    e.preventDefault();
    setImage(target);
    setImageUrl(URL.createObjectURL(target));
  };

  const submitPost = async (e) => {
    e.preventDefault();
    let formdata = new FormData();

    formdata.append("user", idUser);
    formdata.append("text", text);
    if (image) {
      formdata.append("image", image);
    }

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}post/${id}`,
      data: formdata,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          window.location = "/display_posts/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormModifyPage action="" onSubmit={submitPost}>
      {/* début Carte */}
      <TextDiv>
        <FormDivModify>
          <DivImgLegende>
            <ImgLoadedModifyPost
              id="photo"
              src={image ? imageUrl : previousImage}
              alt=""
            />
            <PhotoPath>{image ? image.name : ""} </PhotoPath>
          </DivImgLegende>
          <TextareaModifyPage
            onChange={(e) => setText(e.target.value)}
            id="textPostForm"
            defaultValue={text}
            required
          />
        </FormDivModify>
        <ButtonDisplayModify>
          <div className="parent-div">
            <button className="btn-upload">Changer la photo</button>
            <input
              type="file"
              name="upfile"
              accept="image/*"
              onChange={(e) => uploadImage(e, e.target.files[0])}
              className="img_postform"
            />
          </div>
          <Button type="submit" className="btn">
            <FontAwesomeIcon
              icon={PenToSquare}
              className="btn-icon icon-modify-delete"
            />
          </Button>
        </ButtonDisplayModify>
      </TextDiv>
      {/* Fin carte */}
    </FormModifyPage>
  );
}
