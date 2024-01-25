import { useLoaderData } from "react-router-dom";
import Forecasting from "./Forecast";

const Home = (props) => {
  const data = useLoaderData();
  console.log(data)
  const current = data.current;
  const weatherData = {
    wind_kph: current.wind_kph,
    temp_c: current.temp_c,
    pressure_mbt: current.pressure_mb,
    precip_mm: current.precip_mm,
    is_day: current.is_day,
    icon: current.condition.icon,
    text: current.condition.text,
  };
  return (
    
    <div className="home">
      <h1 className="region-name">{data.location.region}</h1>
      <p className="region-name">{data.location.country}</p>
      <div className="container">
        <div className="top">
          <div className="top-left">
            <img className="weather-condition-icon" src={weatherData.icon} />
            <p>{weatherData.text}</p>
          </div>
          <div className="top-right">
            <p>Wind: {weatherData.wind_kph} kmph</p>
            <p>Precip: {weatherData.precip_mm} mm</p>
            <p>Presure: {weatherData.pressure_mbt} mb</p>
          </div>
        </div>
        <div className="center">
          <p>{weatherData.temp_c} °c</p>
        </div>
        <div className="bottom">
          <Forecasting forecast={data.forecast} />
        </div>
      </div>
    </div>
  );
};
export default Home;

export const homeLoader = async (city) => {
  if(!city){
    city="Irbil"
  }
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=8ca52f7fba7744b682685231230108&q=${city}&days=10&aqi=no&alerts=no`
  );
  if (!res.ok) {
    throw new Error("couldnot fetch the data");
  } else {
    const data = await res.json();
    return data;
  }
};
