import React, {useState, useEffect} from "react";
// import ReactDOM from "react-dom";
// import "../../../App.css";
import axios from "axios";
import NasaCard from "./BodyDataButton"
import styled from "styled-components";


const Container = styled.div `
  margin: auto;
  text-align: center;
  background:#778899;
  padding:20px;
`;

const Date = styled.h2`
  color:BEIGE;
`;

const Description = styled.p`
  width:80%;
  margin:auto;
  color:black;
`;

export default function NasaPicture() {
  const [nasa, setNasa ] = useState([])
  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2011-09-01`)
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
    <Container>
      
         <Date>{nasa.date}</Date>
         <img className = "img-source" src = {nasa.url} />
         <Description> {nasa.explanation}</Description>
      

    </Container>
  )
}
