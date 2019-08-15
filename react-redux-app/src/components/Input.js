import React, { useState } from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Input = props => {
  const [queryTerm, setQueryTerm] = useState("");

  const handleChange = e => {
    setQueryTerm(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setQueryTerm("");
  };

  return (
    <>
      <h3>Weather App</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={queryTerm}
          name="queryTerm"
        />
        <button onClick={() => props.getData(queryTerm)}>Get Weather</button>
      </form>
    </>
  );
};

export default connect(
  null,
  { getData }
)(Input);
