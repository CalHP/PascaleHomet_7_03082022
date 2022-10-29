import styled from "styled-components";
import colors from "./colors";

export const FooterDiv = styled.div`
    background-color:${colors.backgroundLight};
    color:${colors.secondary};
    font-weight:bold;
    font-size:18px;
    height: 51px;
    @media (max-width: 768px) {
        height: 38px;
      }
`
export const FooterUl = styled.ul`
display:flex;
flex-direction:row;
justify-content: space-around;
list-style-type: none;  
padding-top: 0.7%;
margin: 0;
padding-bottom: 0.7%;
`