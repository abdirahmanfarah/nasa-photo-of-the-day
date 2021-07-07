import React from "react";
import styled from "styled-components";

const Card = styled.div `
  margin: auto;
  backround: teal;

`;


const NasaCard = props => {

  return (
    <Card>
      <img className = "nasa-image" alt = "nasa image" src ={props.url} />

    </Card>

  )
}
export default NasaCard;