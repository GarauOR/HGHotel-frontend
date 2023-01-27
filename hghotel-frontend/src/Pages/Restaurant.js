import React from "react";
import "../CSS/Restaurant.css";
import Cuisine from "../Components/Cuisine";
import Chef from "../Components/Chef";

function Restaurant(props) {
  return (
    <div>
      <section className="cover2">
        <h4>The Fisherman at Oasis Bay</h4>
      </section>

        <Cuisine />
        <Chef />

    </div>
  );
}

export default Restaurant;
