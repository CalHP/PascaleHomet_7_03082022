import { Link } from 'react-router-dom'

import {FooterDiv, FooterUl} from "../../utils/style/stylefooter"

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