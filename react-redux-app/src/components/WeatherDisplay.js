import React from "react";
import { connect } from "react-redux";

const WeatherDisplay = () => {
  return <h1>Weather Here</h1>;
};

const mapStateToProps = state => {
  console.log(state.weather);
  return {
    isLoading: state.isLoading,
    weather: state.weather
  };
};

export default connect(
  mapStateToProps,
  {}
)(WeatherDisplay);
