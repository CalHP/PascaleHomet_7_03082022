import React, { useState } from "react";
import axios from "axios";

import {
  HomeFormLogin,
  HomeInput,
  ButtonLogin,
  LabelLogin,
  ButtonFormChange,
  ErrorConnexionLogin,
  ConnexionDiv
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
        const role = res.data.role;
        const token = res.data.token;
        let identifiers = JSON.parse(localStorage.getItem("loginIdentifiers"));

        if(identifiers){
          localStorage.clear();
        }
        identifiers = [];
        identifiers.push(userId, role, token);
        localStorage.setItem("loginIdentifiers", JSON.stringify(identifiers));
        window.location = "/display_posts" ;
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
        <ConnexionDiv>
          <ButtonLogin type="submit" value="Vous connecter" />
          <ButtonFormChange
            type="button"
            value="Pas encore inscrit ? Cliquez ici "
            //on met le props envoyé depuis la page home en utilisant son nom (change), pour activer la fonction que l'on a donné lors d'un click sur le bouton
            onClick={props.change}
            id="login"
          />
        </ConnexionDiv>
      </HomeFormLogin>
    </div>
  );
};

export default Login;
