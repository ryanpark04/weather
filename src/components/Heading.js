import React from 'react';
import isoCountries from '../utils/countrymap'
import '../stylesheets/Heading.css';

const Heading = ({ weatherData }) => {
    return (
        <div className={'heading-display'}>
            Weather in {weatherData.name}, {isoCountries[weatherData.sys.country]}
        </div>
    );
}

export default Heading;
