import getIconUrl from '../utils/getIcon'

function getDayName(dateString) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date(dateString);
    return days[date.getDay()];
}

export default function formatForecast(rawData) {
    const forecasts = [];
    
    for (let i = 1; i <= 5; i++) {
        const min = rawData.daily.temperature_2m_min[i];
        const max = rawData.daily.temperature_2m_max[i];
        const dateString = rawData.daily.time[i];
        const icon = getIconUrl(rawData.daily.weathercode[i]);
        
        forecasts.push({
            date: getDayName(dateString),
            min: min,
            max: max,
            icon: icon,
            avg: ((min + max) / 2).toFixed(1) 
        });
    }
    
    return forecasts;
}