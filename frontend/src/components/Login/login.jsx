import React from "react";

import { HomeForm } from "../../utils/style/connexion";
import { HomeInput } from "../../utils/style/connexion";
import { Button } from "../../utils/style/connexion";
import { Label } from "../../utils/style/connexion";
import { ButtonFormChange } from "../../utils/style/connexion";

//on passe le props en paramettre pour le récupérer
function Login(props) {
  return (
    <div>
      <div>
        <HomeForm action="post">
          <Label htmlFor="email">Email</Label>
          <HomeInput type="email" name="email" id="email" required />
          <p id="emailErrorMsg">{/*Message d'erreur*/}</p>
          <Label htmlFor="password">Mot de passe</Label>
          <HomeInput type="password" name="password" id="password" required />
          <p id="PasswoErrorMsg">{/*Message d'erreur*/}</p>
          <div>
            <Button type="submit" value="LOGIN" />
            <ButtonFormChange
              type="button"
              value="Pas encore inscrit ? Cliquez ici "
              //on met le props envoyé depuis la page home en utilisant son nom (change), pour activer la fonction que l'on a donné lors d'un click sur le bouton
              onClick={props.change}
              id="login"
            />
          </div>
        </HomeForm>
      </div>
    </div>
  );
}

export default Login;
