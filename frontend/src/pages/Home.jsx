import styled from "styled-components";
import image from "../assets/images/team-work-concept-groupe-de-mains-diverses-ensemble-proces-croisé-132757663.jpg";
import colors from "../utils/style/colors";

import { HomeForm } from "../utils/style/connexion";
import { HomeInput } from "../utils/style/connexion";
import { HomePage } from "../utils/style/connexion";
import { Button } from "../utils/style/connexion";
import { Label } from "../utils/style/connexion";

const HomeImg = styled.img`
  height: 30em;
  width: 100%;
  object-fit: cover;
  opacity: 0.5;
  position: absolute;
`;
const HomeDiv = styled.div`
  background: ${colors.primary};
  height: 30em;
`;

function Login() {
  return (
    <HomePage>
      <div>
        <HomeForm action="post">
        <Label htmlFor="email">Email</Label>
          <HomeInput type="email" name="email" id="email" required/>
          <p id="emailErrorMsg">{/*Message d'erreur*/}</p>
          <Label htmlFor="password">Mot de passe</Label>
          <HomeInput type="password" name="password" id="password" required />
          <p id="PasswoErrorMsg">{/*Message d'erreur*/}</p>
          <div>
            <Button type="submit" value="LOGIN" id="login" />
          </div>
       </HomeForm>
      </div>
    </HomePage>
  )
}

function SignIn() {
  return (
    <HomePage>
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
    </HomePage>
  );
}

function Home() {
  return (
    <HomeDiv>
      <HomeImg src={image} alt="Mains serrées" />
      <Login />
    </HomeDiv>
  );
}

export default Home;

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // Try changing to isLoggedIn={true}:
// root.render(<Greeting isLoggedIn={false} />);
