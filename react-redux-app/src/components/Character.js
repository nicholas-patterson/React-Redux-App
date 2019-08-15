import React from "react";

const Character = props => {
  return (
    <div>
      <img src={props.character.image} alt={props.character.name} />
      <h3>Name: {props.character.name}</h3>
      <p>Species: {props.character.species}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Status: {props.character.status}</p>
    </div>
  );
};

export default Character;
