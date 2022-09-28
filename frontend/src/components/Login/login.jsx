import React, { useState } from "react";
import axios from "axios";

import {
  HomeFormLogin,
  HomeInput,
  ButtonLogin,
  LabelLogin,
  ButtonFormChange,
  ErrorConnexionLogin,
} from "../../utils/style/connexion";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}auth/login`,
      data: { email: email, password: password },
    })
      .then((res) => {
        const userId = res.data.userId; 
        window.location = "/display_posts/"+ userId;
      })
      .catch((err) => {
        if (err.response.data) {
          document.querySelector("#PasswoErrorMsg").innerHTML =
            err.response.data.message;
        }
      });
  };

  return (
    <div>
      <HomeFormLogin action="" onSubmit={handleLogin} id="login_form">
        <ErrorConnexionLogin id="PasswoErrorMsg">
          {/*Message d'erreur*/}
        </ErrorConnexionLogin>
        <LabelLogin htmlFor="email">Email</LabelLogin>
        <HomeInput
          type="email"
          name="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <LabelLogin htmlFor="password">Mot de passe</LabelLogin>
        <HomeInput
          type="password"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div>
          <ButtonLogin type="submit" value="Vous connecter" />
          <ButtonFormChange
            type="button"
            value="Pas encore inscrit ? Cliquez ici "
            //on met le props envoyé depuis la page home en utilisant son nom (change), pour activer la fonction que l'on a donné lors d'un click sur le bouton
            onClick={props.change}
            id="login"
          />
        </div>
      </HomeFormLogin>
    </div>
  );
};

export default Login;
