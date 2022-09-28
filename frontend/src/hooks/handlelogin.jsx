import {useEffect} from "react"

export const HandleLogin = (e) => {
    e.preventDefault();
    useEffect(() => {
      fetch(`${process.env.REACT_APP_API_URL}/auth/login`)
      .then((response) =>response.json())
      .then((data) => {
        console.log(data);
        })
      .catch((err) => console.log("Erreur : " + err));
    }, []);  
  };
