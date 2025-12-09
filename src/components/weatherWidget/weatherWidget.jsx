import React from "react";
import './weatherWidget.css';
import WeatherIcon from '../../assets/01_sunny_color.svg';
import heartIcon from '../../assets/heart.svg';
import closeIcon from '../../assets/close.svg';
import windIcon from '../../assets/windIcon.svg'
import getActualWeather from "../../services/getActualWeather";
import formatWeatherData from "../../utils/formatWeatherData.jsx"
import getForecast from "../../services/getForecast.jsx";
import { toCelsius, toKelvin, toFahrenheit} from  "../../utils/formatTemperature.jsx";



export default class WeatherWidget extends React.Component {
    state = {
        weatherData: null,
        forecastData: null
    };


    async componentDidMount() {
        const rawData = await getActualWeather(this.props.city);
        console.log("RAW DATA:", rawData);
        const data = await formatWeatherData(rawData);
        

        const dataForecast = await getForecast(this.props.city);
        console.log("Forecast data", dataForecast)

        this.setState({
            weatherData:data,
            forecastData:dataForecast
        });
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.city !== this.props.city) {
            const rawData = await getActualWeather(this.props.city);
            console.log("RAW DATA:", rawData);
            const data = await formatWeatherData(rawData);
            

            const dataForecast = await getForecast(this.props.city);
            console.log("Forecast data", dataForecast)
            

            this.setState({
                weatherData:data,
                forecastData:dataForecast
            });  
        }
    }


  render() {
    const {weatherData, forecastData } = this.state;

    const displayTemp = (temp) => {
        temp = Number(temp);
        switch(this.props.tempFormat) { 
            case 1: return `${toCelsius(temp)} °C`;
            case 2: return `${toKelvin(temp)} K`;
            case 3: return `${toFahrenheit(temp)} °F`;
            default: return `${toCelsius(temp)} °C`;
        }
    };


    if (!this.state.weatherData) {
        return <div>Loading...</div>
        }


    return (
        <div className="container-xl weather_widget_wrapper">
            <div className="left_div">
                <div className="title_div">
                    <h2>{weatherData.cityName}</h2>
                    <button className="likeButton"
                            onClick={this.props.onToggleFavourite}>
                        <i className={this.props.isFavourite ? "bi bi-heart-fill" : "bi bi-heart"}></i>
                    </button>
                </div>
                <h3>{weatherData.date}</h3>
                <div className="weather_info">
                    <img src={weatherData.iconUrl} alt="" />
                    <div className="temperature_div">
                        <p className="temperature">{displayTemp(weatherData.temperature)}</p>
                        <p className="temperature_description">{weatherData.weatherDescription}</p>
                    </div>
                </div>
                <div className="widgets">
                    <div className="widget">
                        <img src={WeatherIcon} alt="" />
                        <h4>Feels like</h4>
                        <p>{displayTemp(weatherData.feelsLike)}</p>
                    </div>
                    <div className="widget">
                        <img src={WeatherIcon} alt="" />
                        <h4>Cloudiness</h4>
                        <p>{weatherData.cloudiness}%</p>
                    </div>
                    <div className="widget">
                        <img src={WeatherIcon} alt="" />
                        <h4>Visibility</h4>
                        <p>{weatherData.visibility} m</p>
                    </div>
                    <div className="widget">
                        <img src={windIcon} style={{rotate: `${weatherData.windDeg}deg`}} alt="" />
                        <h4>Wind</h4>
                        <p>{weatherData.windSpeed} m/s</p>
                    </div>
                </div>
                <h2>5 Days Forecast</h2>
                <div className="future_weather_wrapper">
                    <div className="future_weather">
                        <h4>{forecastData[0].date}</h4>
                        <img src={forecastData[0].icon} alt="" />
                        <p><span className="temperature_future">{displayTemp(forecastData[0].avg)}</span></p>
                    </div>
                     <div className="future_weather">
                        <h4>{forecastData[1].date}</h4>
                        <img src={forecastData[1].icon} alt="" />
                        <p><span className="temperature_future">{displayTemp(forecastData[1].avg)}</span></p>
                    </div>
                    <div className="future_weather">
                        <h4>{forecastData[2].date}</h4>
                        <img src={forecastData[2].icon} alt="" />
                        <p><span className="temperature_future">{displayTemp(forecastData[2].avg)}</span></p>
                    </div>
                    <div className="future_weather">
                        <h4>{forecastData[3].date}</h4>
                        <img src={forecastData[3].icon} alt="" />
                        <p><span className="temperature_future">{displayTemp(forecastData[3].avg)}</span></p>
                    </div>
                    <div className="future_weather">
                        <h4>{forecastData[4].date}</h4>
                        <img src={forecastData[4].icon} alt="" />
                        <p><span className="temperature_future">{displayTemp(forecastData[4].avg)}</span></p>
                    </div>
                </div>
            </div>
            <div className="right_div">
                <div className="detail_div">
                    <h2>Details</h2>
                    <button className="closeButton"
                    onClick={this.props.onClose}>
                        <img src={closeIcon} alt="" />
                    </button>
                </div>
                    <div className="detail_weather">
                        <p>Weather describtion</p>
                        <p>{weatherData.weatherDescription}</p>
                    </div>
                    <div className="detail_weather">
                        <p>Local Time</p>
                        <p>{weatherData.localTime}</p>
                    </div>
                    <div className="detail_weather">
                        <p>Pressure</p>
                        <p>{weatherData.pressure} Hpa</p>
                    </div>
                    <div className="detail_weather">
                        <p>Humidity</p>
                        <p>{weatherData.humidity} %</p>
                    </div>
                    <div className="detail_weather">
                        <p>Minimum temperature </p>
                        <p>{weatherData.tempMin} *C</p>
                    </div>
                    <div className="detail_weather">
                        <p>Maximum temperature</p>
                        <p>{weatherData.tempMax} *C</p>
                    </div>
                    <div className="detail_weather">
                        <p>Sea level</p>
                        <p>{weatherData.seaLevel} Hpa</p>
                    </div>
                    <div className="detail_weather">
                        <p>Sunrise</p>
                        <p>{weatherData.sunrise}</p>
                    </div>
                    <div className="detail_weather">
                        <p>Sunset</p>
                        <p>{weatherData.sunset}</p>
                    </div>
            </div>
        </div>
    );
    }
}