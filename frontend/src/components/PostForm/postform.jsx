import { Button } from "react-bootstrap";

import {FormPage, Buttondisplay, TextDiv, Textarea, } from "../../utils/style/stylepostform"

export default function PostForm() {
  return (
    <FormPage type="post">
      <TextDiv>
        <Textarea placeholder="Postez votre message" required />
        <Buttondisplay>
          <div className="parent-div">
            <button className="btn-upload">Choisir une photo</button>
            <input type="file" name="upfile" accept="image/*" />
          </div>
          <Button type="submit" className="btn">
            Valider
          </Button>
        </Buttondisplay>
      </TextDiv>
    </FormPage>
  );
}
