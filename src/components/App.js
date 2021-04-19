import React from 'react';
import '../stylesheets/App.css'
import openweathermap from '../apis/openweathermap';
import Spinner from './Spinner';
import Heading from './Heading';
import WeatherCard from './WeatherCard';
import TemperatureCard from './TemperatureCard';
import SunriseCard from './SunriseCard';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { weatherData: {}, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.fetchWeatherData(position.coords.latitude, position.coords.longitude);
            },
            err => this.setState({ errMessage: err })
        )
    }

    fetchWeatherData = async (latitude, longitude) => {
        const response = await openweathermap.get('/weather', {
            params: {
                lat: latitude,
                lon: longitude
            }
        })
        this.setState({
            weatherData: response.data
        });
    }

    onTermSubmit = async term => {
        const response = await openweathermap.get('/weather', {
            params: {
                q: term
            }
        })
        this.setState({
            weatherData: response.data
        });
    }

    renderContent() {
        if (this.state.errorMessage && Object.keys(this.state.weatherData).length === 0) {
            return <div>Error {this.state.errMessage}</div>;
        }

        if (!this.state.errorMessage && Object.keys(this.state.weatherData).length > 0) {
            return (
                <div className="ui container">
                    <div style={{ display: "flex", justifyContent: "center" }} className="ui grid">
                        <div style={{ marginTop: "20vh" }} className="ui row"><Heading weatherData={this.state.weatherData} /></div>
                        <div className="ui row"><SearchBar onFormSubmit={this.onTermSubmit} /></div>

                        <div style={{ marginTop: "5vh" }} className="ui row">
                            <div className="five wide column">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <WeatherCard weatherData={this.state.weatherData} />
                                </div>
                            </div>
                            <div className="five wide column">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <TemperatureCard  weatherData={this.state.weatherData} />
                                </div>
                            </div>
                            <div className="five wide column">
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <SunriseCard weatherData={this.state.weatherData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        }

        return <Spinner message="Please accept location request" />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default App;