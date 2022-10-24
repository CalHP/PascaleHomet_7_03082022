import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import photo from "../../assets/images/photo_par_defaut.png";

import {
  FormPage,
  Buttondisplay,
  TextDiv,
  Textarea,
  PhotoPath,
  FormDiv,
  ImgLoadedCreatePost,
  DivImgLegende
} from "../../utils/style/stylepostform";

export default function PostForm({ postData, setPostData }) {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(photo);

  const submitPost = async (e) => {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
    let token = user[2];
    let id = user[0];

    let formdata = new FormData();
    formdata.append("user", id);
    formdata.append("text", text);
    formdata.append("image", image);

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}post`,
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
          window.location.reload();
          // setPostData((postData) => [res.data.post, ...postData]);
          setImage(null);
          setImageUrl(photo);
          document.querySelector("#textPostForm").value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadImage = async (e, target) => {
    e.preventDefault();
    // let defaultFile =new File( [photo.slice(14)], "photo", { webkitRelativePath: "", size: 503582, type: "image/png"} );

    setImage(target);
    setImageUrl(URL.createObjectURL(target));
  };

  return (
    <FormPage action="" onSubmit={submitPost}>
      <TextDiv>
        <FormDiv>
          <DivImgLegende>
            <ImgLoadedCreatePost id="photo" src={imageUrl} alt="" />
            <PhotoPath>{image ? image.name : ""} </PhotoPath>
          </DivImgLegende>
          <Textarea
            placeholder="Postez votre message"
            onChange={(e) => setText(e.target.value)}
            id="textPostForm"
            required
          />
        </FormDiv>
        <Buttondisplay>
          <div className="parent-div">
            <button className="btn-upload">Choisir une photo</button>
            <input
              type="file"
              name="upfile"
              accept="image/*"
              onChange={(e) => uploadImage(e, e.target.files[0])}
              className="img_postform"
              required
            />
          </div>
          <Button type="submit" className="btn">
            Valider
          </Button>
        </Buttondisplay>
      </TextDiv>
    </FormPage>
  );
}
