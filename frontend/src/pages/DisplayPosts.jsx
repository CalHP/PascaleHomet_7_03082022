import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import PostForm from "../components/PostForm/postform";
import DisplayCards from "../components/Card/card";

/* importation du style */
import { CardPage } from "../utils/style/stylepost";

function DisplayPosts(props) {
  const [postData, setPostData] = useState([]);
  /*Requête pour récupérer les post dans l'API */
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}post`)
      .then((res) => {
        setPostData(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  /* Affichage de la page des Posts */
  return (
    <CardPage>
      <PostForm postData={postData} setPostData={setPostData} />
      {/* début Carte */}
      {postData.map((postElement, index) => (
        <DisplayCards
          item={postElement}
          key={index}
          index={index}
          postData={postData}
          setPostData={setPostData}
        />
      ))}
      {/* Fin carte */}
    </CardPage>
  );
}

export default DisplayPosts;
