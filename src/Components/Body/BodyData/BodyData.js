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
const DateButton = styled.button`
  padding:50px;
  margin:
`;

export default function NasaPicture() {
  const [nasa, setNasa ] = useState([]);
  const [date, setDate] = useState([]);


  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=olBYwidSzG1KBoxDgoUcPMhX2R0QfW7aMxVkyl7X`)
        .then(response => {
          const nasa = response.data;
          console.log(nasa);
          setNasa(nasa);
        })
        .catch(error => {
          console.log("Sorry, no images being displayed");
        });
  }, [date]); 


  return (
    <Container>
      
         <Date>{nasa.date}</Date>
         <img className = "img-source" src = {nasa.url} />
         <Description> {nasa.explanation}</Description>
         <DateButton onClick={() => setDate(nasa.date)}>Random Date</DateButton>
      

    </Container>
  );
}
