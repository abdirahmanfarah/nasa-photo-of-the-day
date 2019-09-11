import React from "react";


const NasaCard = props => {

  return (
    <div className = "nasa-card">
      <img className = "nasa-image" alt = "nasa image" src ={props.hdurl} />

    </div>

  )
}
export default NasaCard;