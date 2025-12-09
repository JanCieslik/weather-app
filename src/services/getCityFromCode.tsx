export default async function getCityFromCoords(lat, lon) {
    const res = await fetch(
        `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}`
    );
    
    const data = await res.json();
    
    if (data && data.results && data.results.length > 0) {
        return data.results[0].name;
    }
    
    return "Warsaw"; 
}