import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import NasaCard from "./BodyDataButton"
import "../../../App.css";

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
    <div className = "container-image">
      
         <img className = "img-source" src = {nasa.hdurl} />
         <h2 className = "date">{nasa.date}</h2>
         <p className = "Explanation"> {nasa.explanation}</p>
      

    </div>
  )
}
