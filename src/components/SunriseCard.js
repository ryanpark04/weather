import React from 'react';
import '../stylesheets/SunriseCard.css'

const SunriseCard = ({ weatherData }) => {

    const sunrise = new Date(Math.round(((weatherData.sys.sunrise + weatherData.timezone) * 1000) / 60000) * 60000).toLocaleTimeString([], { timeZone: "UTC", timeStyle: 'short' });
    const sunset = new Date(Math.round(((weatherData.sys.sunset + weatherData.timezone) * 1000) / 60000) * 60000).toLocaleString([], { timeZone: "UTC", timeStyle: 'short' });

    return (
        <div className="ui card">
            <div style={{ textAlign: "center" }} className="content">
                <div style={{ marginTop: "5px" }}>
                    <img src="https://img.icons8.com/fluent-systems-regular/96/000000/sunrise.png" alt="sunrise" />
                </div>

                <div style={{ marginBottom: "20px" }} className="header">{sunrise}</div>
                <img src="https://img.icons8.com/fluent-systems-regular/96/000000/sunset.png" alt="sunset" />
                <div style={{ marginBottom: "20px" }} className="header">{sunset}</div>
            </div>



        </div>
    );
}

export default SunriseCard;
