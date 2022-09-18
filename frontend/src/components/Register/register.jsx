import React from "react";

import { HomeForm, HomeInput, Button, Label, ButtonFormChange} from "../../utils/style/connexion";

//on passe le props en paramettre pour le récupérer
function Register(props) {
  return (
    <div>
      <div>
        <HomeForm action="post" id="newUser">
          <Label htmlFor="prenom">Prénom</Label>
          <HomeInput type="text" name="prenom" required />
          <p id="firstNameErrorMsg">{/*Message d'erreur*/}</p>
          <Label htmlFor="nom">Nom</Label>
          <HomeInput type="text" name="nom" required />
          <p id="NameErrorMsg">{/*Message d'erreur*/}</p>
          <Label htmlFor="email">Email</Label>
          <HomeInput type="email" name="email" id="email" required />
          <p id="emailErrorMsg">{/*Message d'erreur*/}</p>
          <Label htmlFor="password">Mot de passe</Label>
          <HomeInput type="password" name="password" id="password" required />
          <p id="PasswoErrorMsg">{/*Message d'erreur*/}</p>
          <div>
            <Button type="submit" value="Vous inscrire" onClick={SignIn()}/>
            <ButtonFormChange
              type="button"
              value="Vous avez déjà un compte ? Cliquez ici "
              //on met le props envoyé depuis la page home en utilisant son nom (change), pour activer la fonction que l'on a donné lors d'un click sur le bouton
              onClick={props.change}
              id="register"
            />
          </div>
        </HomeForm>
      </div>
    </div>
  );
}

function SignIn() {

}
export default Register;
