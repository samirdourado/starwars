import axios from 'axios';

const apiPlanets = axios.create({
    baseURL: 'https://swapi.dev/api',
    timeout: 10000
});

export default apiPlanets;
