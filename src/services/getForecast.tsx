import { decodeCity } from "./decodingCity"; 
import  formatForecast  from "../utils/formatForecast"   

export default async function getForecast(city) {
    const coords = await decodeCity(city);
    if (!coords) return null;

    const lat = coords.lat;
    const lon = coords.lon;
    const days = 6; 

     const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&forecast_days=${days}`);
    
    const data = await res.json();

    return formatForecast(data);
}