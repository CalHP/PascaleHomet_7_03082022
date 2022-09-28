import { Button } from "react-bootstrap";
import { useState } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

import {
  FormPage,
  Buttondisplay,
  TextDiv,
  Textarea,
} from "../../utils/style/stylepostform";

export default function PostForm() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const { id } = useParams();

  const submitPost = async (e) => {
    e.preventDefault();

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}post`,
      data: {
        userId: `${id}`,
        text: text,
        imageUrl: image
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          // prenomError.innerHTML = res.data.errors.prenom;
          // nomError.innerHTML = res.data.errors.nom;
          // emailError.innerHTML = res.data.errors.email;
          // passwordError.innerHTML = res.data.errors.password;
        }
      })
      .catch((err) => {
        console.log(image)
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
            <input type="file" name="upfile" accept="image/*"onChange={(e) => setImage(e.target.value)}/>
          </div>
          <Button type="submit" className="btn">
            Valider
          </Button>
        </Buttondisplay>
      </TextDiv>
    </FormPage>
  );
}
