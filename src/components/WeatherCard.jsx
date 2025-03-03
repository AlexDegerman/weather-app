
const WeatherCard = ({ weather, forecast }) => {

  return (
    <div>
      <div>
        <h2>{forecast[0].date}</h2>
        <img src={weather.condition.icon} alt={weather.condition.text}/>
        <p>{weather.temp_c}°C</p>
        <p>Condition: {weather.condition.text}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind: {weather.wind_kph}</p>
      </div>
      <div>
        {forecast.map((day, index) => (
          <div key={index}>
            <p>{new Date(day.date).toLocaleDateString("en-US", { weekday: "long" })}</p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <p>{day.day.avgtemp_c}°C</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WeatherCard