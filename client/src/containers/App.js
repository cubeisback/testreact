import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import { carsFetchData } from "../actions/cars";

class App extends Component {

  componentDidMount() {
    this.props.fetchData("/api/brands");
  }

  render() {
    return (
      <div className="container">
          {this.props.cars.map((car, index)=>{
            return <div className="car_item" key={index}>
              <div><b>Name is:</b> {car.name}</div>
              <div><b>Photo is:</b> {car.photo}</div>
              <div><b>Info is:</b> {car.description}</div>
              <div><b>Status is:</b> {car.status}</div>
            </div>
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(carsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
