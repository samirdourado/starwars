import axios from 'axios';

const apiPlanets = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 5000
});

export default apiPlanets;
