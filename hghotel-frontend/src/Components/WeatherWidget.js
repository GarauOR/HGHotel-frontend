import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

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
    }).then(()=>{
        setMax(weather.main.temp_max);
        setMin(weather.main.temp_min);
        setSky(weather.weather[0].description);
    });
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://i0.wp.com/upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Weather-sun-clouds-rain.svg/1024px-Weather-sun-clouds-rain.svg.png"
        />
        <Card.Body>
          <Card.Title>Today's weather at Oasis Bay</Card.Title>
          <Card.Text>
            <p>{`The sky will have ${sky}`}</p>
            <p>{`${wind}`}</p>
            <p>{`Maximum temperature of ${max} Celsius`}</p>
            <p>{`Minimum temperature of ${min} Celsius`}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default WeatherWidget;
