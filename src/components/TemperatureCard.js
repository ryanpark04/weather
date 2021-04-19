import React from 'react';
import '../stylesheets/TemperatureCard.css';
class TemperatureCard extends React.Component {
    state = { fahrenheit: 'active', celcius: '', symbol: 'F' }

    fToC = (fahrenheit, temperature) => {
        return fahrenheit ? temperature : (temperature - 32) * 5 / 9;
    }

    updateHandler = () => {
        this.setState()
    }

    convertToCelcius = () => {
        this.setState({
            fahrenheit: '',
            celcius: 'active',
            symbol: 'C'
        });
    }

    convertToFahrenheit = () => {
        this.setState({
            fahrenheit: 'active',
            celcius: '',
            symbol: 'F'
        });
    }

    render() {
        return (
            <div className="ui card">
                <div className="content">
                    <div style={{ height: "110px", fontSize: "50px" }} className="header temperature">{Math.round(this.fToC(this.state.fahrenheit, this.props.weatherData.main.temp))} °{this.state.symbol}</div>
                    <div style={{ textAlign: "center", color: "#999999", marginBottom: "15px" }} className="header">L: {Math.round(this.fToC(this.state.fahrenheit, this.props.weatherData.main.temp_min))}° H: {Math.round(this.fToC(this.state.fahrenheit, this.props.weatherData.main.temp_max))}°</div>
                </div>
                <div className="extra content">
                    <div className="ui two buttons">
                        <div onClick={this.convertToFahrenheit} className={`ui ${this.state.fahrenheit} button`}>Fahrenheit</div>
                        <div onClick={this.convertToCelcius} className={`ui ${this.state.celcius} button`}>Celcius</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default TemperatureCard;