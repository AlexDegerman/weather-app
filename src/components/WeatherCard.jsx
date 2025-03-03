import '../styles/WeatherCard.css'
const WeatherCard = ({ weather, forecast }) => {

  return (
    <div className="weather-card">
      <div className="main-info">
      <h2>
        {new Date(`${forecast[0].date}T00:00:00`).toLocaleDateString("en-GB", { 
          weekday: "long", 
          day: "2-digit", 
          month: "2-digit", 
          year: "numeric" 
        })}
      </h2>
        <img src={weather.condition.icon} alt={weather.condition.text}/>
        <p>{weather.temp_c}°C</p>
        <p>Condition: {weather.condition.text}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind: {weather.wind_kph}</p>
      </div>
      <div className="forecast">
      {forecast.slice(1).map((day, index) => (
          <div key={index} className="forecast-day">
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