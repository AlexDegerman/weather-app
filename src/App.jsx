import { useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecast, setForecast] = useState()

  const fetchWeather = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`

      const response = await axios.get(url)
      setWeatherData(response.data.current)
      setForecast(response.data.forecast.forecastday)
    } catch (error) {
        console.error("Error fetching weather data", error)
        setWeatherData(null)
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <p>search bar</p>
      {weatherData && (
        <p>weather cards</p>
      )}
    </div>
  )
}

export default App
