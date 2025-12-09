const API_KEY = import.meta.env.VITE_API_KEY;

export async function decodeCity(city, limit = 1) {
    const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${limit}&appid=f609b20313ba65e5ad2051e4ebf3d281`);
    const data = await res.json();

    if (data.length === 0) return null;

    const lat = data[0].lat;
    const lon = data[0].lon;
    return { lat, lon };
}

