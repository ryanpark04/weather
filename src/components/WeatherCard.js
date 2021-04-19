import React from 'react';
import '../stylesheets/WeatherCard.css';

const WeatherCard = ({ weatherData }) => {
    return (
        <div className="ui card">
            <div className="content">
                <div style={{ textAlign: "center" }} className="weather-icon">
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
                </div>
                <div style={{ textAlign: "center", marginBottom: "25px" }} className="header">{weatherData.weather[0].main}</div>
                <div className="ui container">
                    <div style={{ color: "#999999", textAlign: "center" }} className="ui grid">
                        <div className="ui row">
                            <div className="eight wide column">
                                Windspeed <br />
                                <div className="information">{weatherData.wind.speed} mph</div>
                            </div>
                            <div className="eight wide column">
                                Humidity <br />
                                <div className="information">{weatherData.main.humidity}%</div>
                            </div>
                        </div>
                        <div style={{ marginBottom: "25px" }} className="ui row">
                            <div className="eight wide column">
                                Pressure <br />
                                <div className="information">{weatherData.main.pressure} hPa</div>
                            </div>
                            <div className="eight wide column">
                                Visibility <br />
                                <div className="information">{Math.round(weatherData.visibility / 1000)} km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
