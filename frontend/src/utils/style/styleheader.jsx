import styled from "styled-components";
import colors from "./colors";
import { Link } from "react-router-dom";

export const HomeImageHeader = styled.img`
  width: 73%;
  padding-top: 2%;
`;
export const HeaderDivImage = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  background-color: ${colors.backgroundLight};
`;
export const HeaderNav = styled.nav`
  margin-left: 30%;
`;
export const HeaderNavUl = styled.div`
  list-style-type: none;
`;
export const HeaderNavLi = styled.li`
  padding-top: 50%;
`;
export const HeaderNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: bold;
  &:hover{
    color : ${colors.primary};
  }
`;
