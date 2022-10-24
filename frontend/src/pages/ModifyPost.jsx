import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import photo from "../assets/images/photo_par_defaut.png";

import {
  Buttondisplay,
  TextDiv,
  PhotoPath,
  FormDiv,
  ImgLoadedCreatePost,
} from "../utils/style/stylepostform";

import {
  FormModifyPage,
  TextareaModifyPage,
} from "../utils/style/style_modify_post";

export default function ModifyPost() {
  const [onePostData, setOnePostData] = useState([]);
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(photo);

  let params = useParams();
  let id = params.id;

  let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
  let token = user[2];
  let idUser = user[0];
  let role = user[1];

  /**** Requête pour récupérer le post à modifier **********/
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}post/${id}`)
      .then((res) => {
        setOnePostData([res.data]);
        setImageUrl(res.data.imageUrl);
        setText(res.data.text);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [id]);

  const submitPost = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("user", idUser);
    formdata.append("text", text);
    formdata.append("file", image);

    await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}modify_post/${id}`,
      data: formdata,
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data.errors) {
          console.log('coucou 1')
          console.log(res.data.errors);
        } else {
          console.log(res.data);
          setOnePostData((onePostData) => [res.data.post, ...onePostData]);
        }
      })
      .catch((err) => {
        console.log('coucou 2')
        console.log(err);
      });
  };

  const uploadImage = async (e, target) => {
    e.preventDefault();

    setImage(target);
    setImageUrl(URL.createObjectURL(target));
  };

  return (
    <FormModifyPage action="" onSubmit={submitPost}>
      {/* début Carte */}
      {onePostData.map((onePost, index) => (
        <TextDiv key={index}>
          <FormDiv>
            <ImgLoadedCreatePost id="photo" src={imageUrl} alt="" />
            <TextareaModifyPage
              onChange={(e) => setText(e.target.value)}
              id="textPostForm"
              defaultValue={text}
              required
            />
          </FormDiv>
          <Buttondisplay>
            <div className="parent-div">
              <button className="btn-upload">Changer la photo ?</button>
              <input
                type="file"
                name="upfile"
                accept="image/*"
                onChange={(e) => uploadImage(e, e.target.files[0])}
                className="img_postform"
              />
            </div>
            <PhotoPath>{image ? image.name : ""} </PhotoPath>
            <Button type="submit" className="btn">
              Modifier
            </Button>
          </Buttondisplay>
        </TextDiv>
      ))}
      {/* Fin carte */}
    </FormModifyPage>
  );
}
