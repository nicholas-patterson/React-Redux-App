import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import { getData } from "../actions";
import Loader from "react-loader-spinner";

const CharacterList = props => {
  console.log("PROPS IN CHARACTER LIST", props.characters);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Characters</h1>
      <button onClick={() => props.getData()}>
        {props.isLoading ? (
          <Loader type="Rings" color="#00BFFF" height={100} width={100} />
        ) : (
          "Get Characters"
        )}
      </button>
      {props.characters.map(character => (
        <Character key={character.id} character={character} />
      ))}
    </>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(CharacterList);
