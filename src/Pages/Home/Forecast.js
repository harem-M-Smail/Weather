const Forecasting = ({ forecast }) => {
  const arrayOfDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="forecast">
      {forecast.forecastday.map((day) => (
        <div className="day" key={day.date}>
            <p>{arrayOfDays[new Date(day.date).getDay()]}</p>
            <img src={day.day.condition.icon}/> 
            <p>{day.day.avgtemp_c} °c</p>
        </div>
      ))}
    </div>
  );
};
export default Forecasting;
