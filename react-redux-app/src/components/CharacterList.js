import React from "react";
import { connect } from "react-redux";
import Character from "./Character";
import { getData } from "../actions";
import Loader from "react-loader-spinner";
import "../../src/CharacterList.css";

const CharacterList = props => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Characters</h1>
        <button class="btn" onClick={() => props.getData()}>
          {props.isLoading ? (
            <Loader type="Rings" color="#FFF" height={100} width={100} />
          ) : (
            "Get Characters"
          )}
        </button>
      </div>
      <div className="app">
        {props.characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
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
