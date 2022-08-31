import { Link } from 'react-router-dom'

import styled from "styled-components";
import colors from "../../utils/style/colors";

const FooterDiv = styled.div`
    background-color:${colors.backgroundLight};
    height:60px;    
    color:${colors.white};
    font-weight:bold;
    font-size:18px;
`
const FooterUl = styled.ul`
display:flex;
flex-direction:row;
justify-content: space-around;
list-style-type: none;  
padding-top:1.5%;
margin:0;
`

function Footer(){
    return (
       <FooterDiv>
        <FooterUl>
            <li><Link to="#"/>Mentions légales</li>
            <li><Link to="#"/>Contacts</li>
        </FooterUl>
       </FooterDiv>             
    )
}

export default Footer;