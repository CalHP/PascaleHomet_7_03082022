import React from "react";

import styled from "styled-components";
import colors from "../../utils/style/colors";

import { HomeForm } from "../../utils/style/connexion";
import { HomeInput } from "../../utils/style/connexion";
import { Button } from "../../utils/style/connexion";
import { Label } from "../../utils/style/connexion";
import {ButtonPasInscrit} from "../../utils/style/connexion";

function Login() {
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
            <Button type="submit" value="LOGIN" id="login" />
            <ButtonPasInscrit
              type="button"
              value="Pas encore inscrit ? Cliquez ici "
              // onClick={() => console.log("")}
              id="signin"
            />
          </div>
        </HomeForm>
      </div>
    </div>
  );
}

export default Login;
