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

const DateStyle = styled.h2`
  color:BEIGE;
`;

const Description = styled.p`
  width:80%;
  margin:auto;
  color:black;
`;
const DateButton = styled.button`
  padding:50px;
`;

export default function NasaPicture() {
  const [nasa, setNasa ] = useState([]);
  const [date, setDate] = useState(new Date());


  // let dd = date.getDate();
  // let mm = date.getMonth()+1;
  // let yyyy = date.getFullYear();

  
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=olBYwidSzG1KBoxDgoUcPMhX2R0QfW7aMxVkyl7X&date=2018-10-28`)
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
      
         <DateStyle>{nasa.date}</DateStyle>
         <img className = "img-source" src = {nasa.url} />
         <Description> {nasa.explanation}</Description>
         <DateButton onClick={() => setDate({})}>Random Date</DateButton>
      

    </Container>
  );
}
