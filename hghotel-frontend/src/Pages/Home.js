import React from "react";
import "../CSS/Home.css";
import Searchbar from "../Components/Searchbar";
import HotelInfo from "../Components/HotelInfo";
import FoodSlider from "../Components/FoodSlider";
import WeatherWidget from "../Components/WeatherWidget";

function Home(props) {
  return (
    <div>
      <section className="cover">
        <h4>Oasis Bay by HGHotel</h4>
      </section>

      <Searchbar />

      {/* <div>
      <FoodSlider />
      <HotelInfo />
      <WeatherWidget />
      </div> */}

      <div>
        <HotelInfo />
        <FoodSlider />
        <WeatherWidget />
      </div>
    </div>
  );
}

export default Home;
