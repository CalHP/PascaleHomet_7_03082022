import logo from "../../assets/logo/icon-left-font.png";

import {
  HomeImageHeader,
  HeaderDivImage,
  HeaderNav,
  HeaderNavUl,
  HeaderNavLi,
  HeaderNavLink,
} from "../../utils/style/styleheader";

const Logout = () =>{
  localStorage.clear();
  window.location.href = "/"
}
export default function Header(props) {
  return (
    <HeaderDivImage>
      <div>
        <HomeImageHeader src={logo} alt="logo" />
      </div>
      <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            <HeaderNavLink to="#" onClick={Logout}>
              Déconnexion
            </HeaderNavLink>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderNav>
    </HeaderDivImage>
  );
}
