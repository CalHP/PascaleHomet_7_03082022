// import { Link } from 'react-router-dom'

import logo from "../../assets/logo/icon-left-font.png";

import {HomeImageHeader, HeaderDivImage} from "../../utils/style/styleheader"

export default function Header() {
  return (
    <HeaderDivImage>
      <div>
        <HomeImageHeader src={logo} alt="logo" />
      </div>
    </HeaderDivImage>
  );
}
