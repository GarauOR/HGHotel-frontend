import React from "react";
import Searchbar from "../Components/Searchbar";
import Header from '../Components/Header';
import HotelInfo from "../Components/HotelInfo";
import FoodSlider from "../Components/FoodSlider";
import WeatherWidget from "../Components/WeatherWidget";

function Home(props) {
  return (
    <div>
      <section className="cover">
        <h4 className="h4 title">Oasis Bay by HGhotel</h4>
        <Header />
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
