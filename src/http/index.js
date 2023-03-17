import axios from "axios";
const API_URL = 'http://localhost:3000';

const $host = axios.create({
    baseURL: API_URL,
});

export{
    $host,
}