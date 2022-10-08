import { Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import {
  FormPage,
  Buttondisplay,
  TextDiv,
  Textarea,
  PhotoPath
} from "../../utils/style/stylepostform";

export default function PostForm() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const submitPost = async (e) => {
    e.preventDefault();

    let user = JSON.parse(localStorage.getItem("loginIdentifiers"));
    let token = user[2];
    let id = user[0];
    
    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}post`,
      data: {
        userId: id,
        text: text,
        image:image,
      },
      headers : { 'Authorization' : token }
    })
      .then((res) => {
        console.log(res);
        // if (res.data.errors) {
        // prenomError.innerHTML = res.data.errors.prenom;
        // nomError.innerHTML = res.data.errors.nom;
        // emailError.innerHTML = res.data.errors.email;
        // passwordError.innerHTML = res.data.errors.password;
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormPage action="" onSubmit={submitPost}>
      <TextDiv>
        <Textarea
          placeholder="Postez votre message"
          onChange={(e) => setText(e.target.value)}
          required
        />
        <Buttondisplay>
          <div className="parent-div">
            <button className="btn-upload">Choisir une photo</button>
            <input
              type="file"
              name="upfile"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0].name)}
              className="img_postform"
            />
          </div>
          <PhotoPath>{image} </PhotoPath>
          <Button type="submit" className="btn">
            Valider
          </Button>
        </Buttondisplay>
      </TextDiv>
    </FormPage>
  );
}
