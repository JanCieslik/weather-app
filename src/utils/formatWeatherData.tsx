export default function formatWeatherData(rawData) {
    const today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formatedDate = `${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;



    const now = new Date();
    const currentTime = now.toLocaleTimeString("pl-PL", { hour: '2-digit', minute: '2-digit' });

    const utc = Date.now() + new Date().getTimezoneOffset() * 60000; 
    const cityTime = new Date(utc + rawData.timezone * 1000); 
    const cityTimeStr = cityTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });








    const iconCode = rawData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const sunrise = new Date(rawData.sys.sunrise * 1000);
    const sunset = new Date(rawData.sys.sunset * 1000);









    return { 
        weatherStatus: rawData.weather[0].main,
        weatherDescription: rawData.weather[0].description,
        temperature: Math.round(rawData.main.temp),
        feelsLike: Math.round(rawData.main.feels_like),
        tempMin: Math.round(rawData.main.temp_min),
        tempMax: Math.round(rawData.main.temp_max),
        pressure: rawData.main.pressure,
        humidity: rawData.main.humidity,
        seaLevel: rawData.main.sea_level,
        visibility: rawData.visibility,
        windSpeed: rawData.wind.speed,
        windDeg: rawData.wind.deg,
        cloudiness: rawData.clouds.all,
        currentTime: currentTime,
        date: formatedDate,
        localTime: cityTimeStr,
        sunrise: sunrise.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
        sunset: sunset.toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'}),
        cityName : rawData.name,
        iconUrl: iconUrl,
    }
}

