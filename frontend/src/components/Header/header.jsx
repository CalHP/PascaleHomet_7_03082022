// import { Link } from 'react-router-dom'

import logo from "../../assets/logo/icon-left-font.png";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const HomeImageHeader = styled.img`
  width: 80%;
  margin-top: 3%;
`;
const HeaderDivImage = styled.div`
  display: flex;
  flex-direction: row;
  height: 180px;
  background-color: ${colors.backgroundLight};
`;
// const HeaderNav = styled.nav`
//   margin-left:30%;
// `;
// const HeaderNavUl = styled.div`
//   list-style-type: none;  
// `
// const HeaderNavLi = styled.li`
// padding-top : 50%;
// `
// const HeaderNavLink = styled(Link)`
// text-decoration: none;
// color:white;
// font-size:20px;
// letter-spacing:3px;
// font-weight : bold;
// `
export default function Header() {
  return (
    <HeaderDivImage>
      <div>
        <HomeImageHeader src={logo} alt="logo" />
      </div>
      {/* <HeaderNav>
        <HeaderNavUl>
          <HeaderNavLi>
            <HeaderNavLink to = "#">Déconnexion</HeaderNavLink>
          </HeaderNavLi>
        </HeaderNavUl>
      </HeaderNav> */}
    </HeaderDivImage>
  );
}
