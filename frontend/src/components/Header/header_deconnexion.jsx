import logo from "../../assets/logo/icon-left-font.png";

import {
  HomeImageHeader,
  HeaderDivImage,
  HeaderNav,
  HeaderNavUl,
  HeaderNavLi,
  HeaderNavLink,
} from "../../utils/style/styleheader";

export default function Header(props) {
  return (
    <HeaderDivImage>
      <div>
        <HomeImageHeader src={logo} alt="logo" />
      </div>
      <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            <HeaderNavLink to="#" className={props.change}>
              Déconnexion
            </HeaderNavLink>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderNav>
    </HeaderDivImage>
  );
}
