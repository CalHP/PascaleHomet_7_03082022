import { Button } from "react-bootstrap";
import { useState } from "react";
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
  // let token = user[2];
  let idUser = user[0];

  /**** Requête pour récupérer le post à modifier **********/
  async function fetchData() {
    let modifyForm = new FormData();
    modifyForm.append("id", id);

    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}post/${id}`,
      data: modifyForm,
    })
      .then((res) => {
        console.log(res);
        setOnePostData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

fetchData();

  const submitPost = async (e) => {
    e.preventDefault();

    let formdata = new FormData();
    formdata.append("user", idUser);
    formdata.append("text", text);
    formdata.append("image", image);

    // await axios({
    //   method: "post",
    //   url: `${process.env.REACT_APP_API_URL}post`,
    //   data: formdata,
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    //   .then((res) => {
    //     if (res.data.errors) {
    //       console.log(res.data.errors);
    //     } else {
    //       console.log(res.data);
    //       // window.location.reload();
    //       setPostData((postData) => [res.data.post, ...postData]);
    //       setImage(null);
    //       setImageUrl(photo);
    //       document.querySelector("#textPostForm").value = "";
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const uploadImage = async (e, target) => {
    e.preventDefault();

    setImage(target);
    setImageUrl(URL.createObjectURL(target));
  };

  return (
    <FormModifyPage action="" onSubmit={submitPost}>
      <TextDiv>
        <FormDiv>
          <ImgLoadedCreatePost id="photo" src={imageUrl} alt="" />
          <TextareaModifyPage
            onChange={(e) => setText(e.target.value)}
            id="textPostForm"
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
    </FormModifyPage>
  );
}
