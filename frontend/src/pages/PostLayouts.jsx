import colors from "../utils/style/colors";
import styled from "styled-components";

import photo from "../assets/images/profile.png";

const CardPage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin:1% 25%;  
`;

const MsgCard = styled.div`
  display: flex;
  flex-direction: row;
`;

function DisplayPosts() {
  return (
    <CardPage>
      <div>
        <p id="nameCard">Pascale HOMET</p>
        <MsgCard>
          <img id="photoCard" src={photo} alt="" />
          <div id="msgCard">
            {" "}
            Ce n'est pas parce que les choses sont difficiles que nous n'osons
            pas, c'est parce que nous n'osons pas qu'elles sont difficiles
          </div>
        </MsgCard>
        <div id="like">like dislike</div>
      </div>
      <div>
        <p id="nameCard">Pascale HOMET</p>
        <MsgCard>
          <img id="photoCard" src={photo} alt="" />
          <div id="msgCard">
            {" "}
            Ce n'est pas parce que les choses sont difficiles que nous n'osons
            pas, c'est parce que nous n'osons pas qu'elles sont difficiles
          </div>
        </MsgCard>
        <div id="like">like dislike</div>
      </div>
    </CardPage>
  );
}

export default DisplayPosts;
