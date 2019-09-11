import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import NasaCard from "./BodyDataButton"

export default function NasaPicture() {
  const [nasa, setNasa ] = useState([])
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          const nasa = response.data;
          console.log(nasa);
          setNasa(nasa);
        })
        .catch(error => {
          console.log("Sorry, no images being displayed");
        });
  }, []); 


  return (
    <div className = "container">
      
         <img src = {nasa.hdurl} />
        
      

    </div>
  )
}
