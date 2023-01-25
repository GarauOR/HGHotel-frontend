import React from "react";
import '../CSS/Home.css';
import Searchbar from "../Components/Searchbar";

function Home(props) {
  return (
    <div>
      <section className="cover">
      <h4>Oasis Bay by HGHotel</h4>
      </section>

      <Searchbar />

    </div>
  );
}

export default Home;
