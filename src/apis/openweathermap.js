import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        appid: '526dfcefb0c94c064ec17f694ee18d91',
        units: 'imperial'
    }
})
