import React, { useState } from "react";
import axios from "axios";

import {
  HomeFormRegister,
  HomeInput,
  ButtonRegister,
  LabelRegister,
  ButtonFormChange,
  DivCheckbox,
  LabelTerms,
  ErrorConnexion,
  FormDisplayDiv,
  LabelDisplayDiv,
} from "../../utils/style/connexion";

function Register(props) {
  const validChar = new RegExp("^[a-zA-Z-àâäéèêëïîôöùûüç]{3,30}$");
  const validMail = new RegExp(
    "^[a-zA-Z-àâäéèêëïîôöùûüç]+(?:.[a-zA-Z-àâäéèêëïîôöùûüç]+)*@groupomania.fr"
  );
  const validPassword = new RegExp("^.{8,}$");

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordConf] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    const terms = document.querySelector("#terms");
    const termsError = document.querySelector(".terms.errors");
    const prenomError = document.querySelector("#firstNameErrorMsg");
    const nomError = document.querySelector("#NameErrorMsg");
    const emailError = document.querySelector("#emailErrorMsg");
    const passwordError = document.querySelector("#PasswoErrorMsg");
    const passwordConfError = document.querySelector("#ConfirmErrorMsg");

    passwordError.innerHTML = "";
    passwordConfError.innerHTML = "";
    termsError.innerHTML = "";
    prenomError.innerHTML = "";
    nomError.innerHTML = "";

    if (
      !validPassword.test(password) ||
      password !== passwordconf ||
      !terms.checked ||
      !validChar.test(prenom) ||
      !validChar.test(nom)
    ) {
      if (!validPassword.test(password)) {
        passwordError.innerHTML = "8 caractères minimum, merci";
        passwordConfError.innerHTML = "8 caractères minimum, merci";
      }
      if (password !== passwordconf) {
        passwordError.innerHTML = "Les mots de passe ne correspondent pas";
        passwordConfError.innerHTML = "Les mots de passe ne correspondent pas";
      }
      if (!terms.checked) {
        termsError.innerHTML = "Merci de valider les conditions générales";
      }
      if (!validChar.test(prenom)) {
        prenomError.innerHTML =
          "Caractères autorisés : tiret, minuscules, majuscules, 3 caractères minimum et 30 maximum";
      }
      if (!validChar.test(nom)) {
        nomError.innerHTML =
          "Caractères autorisés : tiret, minuscules, majuscules, 3 caractères minimum et 30 maximum";
      }
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}auth/signin`,
        data: {
          firstname: prenom,
          name: nom,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.errors) {
            prenomError.innerHTML = res.data.errors.prenom;
            nomError.innerHTML = res.data.errors.nom;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
            passwordConfError.innerHTML = res.data.errors.password;
          }
          alert("Vous êtes inscrit sur le réseau de Groupomania");
          window.location = "/display_posts";
        })
        .catch((err) => {
          if (err.response.data.message) {
            emailError.innerHTML = err.response.data.message;
          }
        });
    }
  };
  return (
    <div>
      <div>
        <HomeFormRegister action="" onSubmit={handleRegister} id="newUser">
          <FormDisplayDiv>
            <LabelDisplayDiv>
              <LabelRegister htmlFor="prenom">Prénom</LabelRegister>
              <HomeInput
                type="text"
                name="prenom"
                id="prenom"
                onChange={(e) => setPrenom(e.target.value)}
                value={prenom}
                required
              />
              <ErrorConnexion id="firstNameErrorMsg">
                {/*Message d'erreur*/}
              </ErrorConnexion>
              <LabelRegister htmlFor="nom">Nom</LabelRegister>
              <HomeInput
                type="text"
                name="nom"
                id="nom"
                onChange={(e) => setNom(e.target.value)}
                value={nom}
                required
              />
              <ErrorConnexion id="NameErrorMsg">
                {/*Message d'erreur*/}
              </ErrorConnexion>
            </LabelDisplayDiv>
            <LabelDisplayDiv>
              <LabelRegister htmlFor="email">Email</LabelRegister>
              <HomeInput
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <ErrorConnexion id="emailErrorMsg">
                {/*Message d'erreur*/}
              </ErrorConnexion>
              <LabelRegister htmlFor="password">Mot de passe</LabelRegister>
              <HomeInput
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <ErrorConnexion id="PasswoErrorMsg">
                {/*Message d'erreur*/}
              </ErrorConnexion>
              <LabelRegister htmlFor="passwordconf">
                Confirmer votre mot de passe
              </LabelRegister>
              <HomeInput
                type="password"
                name="password-confirm"
                id="password-confirm"
                onChange={(e) => setPasswordConf(e.target.value)}
                value={passwordconf}
                required
              />
              <ErrorConnexion id="ConfirmErrorMsg">
                {/*Message d'erreur*/}
              </ErrorConnexion>
            </LabelDisplayDiv>
          </FormDisplayDiv>
          <DivCheckbox>
            <input type="checkbox" id="terms" />
            <LabelTerms htmlFor="terms">
              J'accepte les
              <a href="/" className="labelTerms">
                {" "}
                conditions générales
              </a>
            </LabelTerms>
            <ErrorConnexion className="terms errors"></ErrorConnexion>
          </DivCheckbox>
          <div>
            <ButtonRegister type="submit" value="Vous inscrire" />
            <ButtonFormChange
              type="button"
              value="Vous avez déjà un compte ? Cliquez ici "
              //on met le props envoyé depuis la page home en utilisant son nom (change), pour activer la fonction que l'on a donné lors d'un click sur le bouton
              onClick={props.change}
              id="register"
            />
          </div>
        </HomeFormRegister>
      </div>
    </div>
  );
}

export default Register;
