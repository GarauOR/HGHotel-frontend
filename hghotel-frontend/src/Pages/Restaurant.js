import React from "react";
import Cuisine from "../Components/Cuisine";
import Header from '../Components/Header';
import Chef from "../Components/Chef";

function Restaurant(props) {
  return (
    <div>
      <section className="cover2">
        <h4 className="title2 h4">The Fisherman</h4>
        <Header />
      </section>

        <Cuisine />
        <Chef />

    </div>
  );
}

export default Restaurant;
