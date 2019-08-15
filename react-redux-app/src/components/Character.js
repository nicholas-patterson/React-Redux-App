import React from "react";

const Character = props => {
  return (
    <>
      <img src={props.character.image} />
      <h3>{props.character.name}</h3>
      <p>{props.character.species}</p>
    </>
  );
};

export default Character;
