import styled from "styled-components";
import colors from "./colors";
import { Link } from "react-router-dom";

export const HomeImageHeader = styled.img`
  width: 73%;
  padding-top: 2%;
  @media (max-width: 768px) {
    padding-top: 6%;
  }
  @media (max-width: 454px) {
    width: 85%;
  }
`;
export const HeaderDivImage = styled.div`
  display: flex;
  flex-direction: row;
  height: 150px;
  background-color: ${colors.backgroundLight};
  @media (max-width: 768px) {
    height: 180px;
  }
  @media (max-width: 454px) {
    height: 127px;
    flex-direction: column;
  }
`;
export const HeaderNav = styled.nav`
  margin-left: 27%;
  margin-right: 10%;
  @media (max-width: 1024px) {
    margin-left: 0;
  }
  @media (max-width: 768px) {
    margin-left: 0;
    margin-right: 2%;
  }
  @media (max-width: 454px) {
    margin: 0;
    padding: 0;
  }
`;
export const HeaderNavUl = styled.div`
  list-style-type: none;
`;
export const HeaderNavLi = styled.li`
  padding-top: 50%;
  @media (max-width: 768px) {
    padding-top: 97%;
  }
  @media (max-width: 454px) {
    padding: 0;
    margin: -5% -1% 0 0;
  }
`;
export const HeaderNavLink = styled(Link)`
  text-decoration: none;
  color: ${colors.secondary};
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: bold;
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    font-size: 17px;
  }
  @media (max-width: 454px) {
    margin-left: 70%;
    font-size: 14px;
  }
`;
