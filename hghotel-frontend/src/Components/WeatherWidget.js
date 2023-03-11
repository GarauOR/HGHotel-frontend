import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Weather from "./img/weather.gif";

function WeatherWidget(props) {
  const server = process.env.REACT_APP_SERVER_URL;
  const [weather, setWeather] = useState({});
  const [wind, setWind] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [sky, setSky] = useState("");

  axios
    .get(`${server}/weather`)
    .then((res) => {
      setWeather(res.data);
    })
    .then(() => {
      if (weather.wind.speed < 5) {
        setWind("With no wind");
      } else if (weather.wind.speed >= 5 && weather.wind.speed < 18) {
        setWind("With a light breeze");
      } else if (weather.wind.speed >= 18 && weather.wind.speed < 40) {
        setWind("With moderate winds");
      } else {
        setWind("With strong winds");
      }
    })
    .then(() => {
      setMax(weather.main.temp_max);
      setMin(weather.main.temp_min);
      setSky(weather.weather[0].description);
    });

  return (
    <div>
      <Card className="weatherCard color">
        <Card.Header className="h4 centre">
          Today's weather at Oasis Bay
        </Card.Header>
        <Card.Img bsPrefix="weather-img" src={Weather} />
        <Card.Text style={{ margin: "20px" }}>
          <span
            style={{ display: "block", marginBottom: "15px" }}
            className="h7"
          >{`The sky will have ${sky}`}</span>
          <span
            style={{ display: "block", marginBottom: "15px" }}
            className="h7"
          >{`${wind}`}</span>
          <span
            style={{ display: "block", marginBottom: "15px" }}
            className="h7"
          >{`Maximum temperature of ${max} Celsius`}</span>
          <span
            style={{ display: "block", marginBottom: "15px" }}
            className="h7"
          >{`Minimum temperature of ${min} Celsius`}</span>
        </Card.Text>
      </Card>
    </div>
  );
}

export default WeatherWidget;
