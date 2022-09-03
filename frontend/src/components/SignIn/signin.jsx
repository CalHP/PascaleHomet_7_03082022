import React from "react";

import { HomeForm } from "../../utils/style/connexion";
import { HomeInput } from "../../utils/style/connexion";
import { Button } from "../../utils/style/connexion";
import { Label } from "../../utils/style/connexion";

function SignIn() {
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
            <Button type="submit" value="Vous inscrire" id="login" />
          </div>
        </HomeForm>
      </div>
    </div>
  );
}

export default SignIn;
