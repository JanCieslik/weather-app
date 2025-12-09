import { decodeCity } from "./decodingCity";
const API_KEY = import.meta.env.VITE_API_KEY;

export default async function getActualWeather(city, unit = "metric") {

    const coords = await decodeCity(city);
    if (!coords) return null;

    const lat = coords.lat;
    const lon = coords.lon;

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`);
    const data = await res.json();
    return data;
}


