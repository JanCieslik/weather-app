export default function getIconUrl(weatherCode) {
    const weatherIconMap = {
    0: "01d",              // Clear sky
    1: "02d",              // Mostly clear
    2: "03d",              // Partly cloudy
    3: "04d",              // Overcast

    45: "50d",             // Fog
    48: "50d",             // Depositing rime fog

    51: "09d",             // Drizzle: light
    53: "09d",             // Drizzle: moderate
    55: "09d",             // Drizzle: dense

    56: "09d",             // Freezing drizzle: light
    57: "09d",             // Freezing drizzle: dense

    61: "10d",             // Rain: light
    63: "10d",             // Rain: moderate
    65: "10d",             // Rain: heavy

    66: "10d",             // Freezing rain: light
    67: "10d",             // Freezing rain: heavy

    71: "13d",             // Snow fall: slight
    73: "13d",             // Snow fall: moderate
    75: "13d",             // Snow fall: heavy

    77: "13d",             // Snow grains

    80: "09d",             // Rain showers: slight
    81: "09d",             // Rain showers: moderate
    82: "09d",             // Rain showers: violent

    85: "13d",             // Snow showers: slight
    86: "13d",             // Snow showers: heavy

    95: "11d",             // Thunderstorm
    96: "11d",             // Thunderstorm with hail
    99: "11d",             // Thunderstorm with heavy hail
    };

    const icon = weatherIconMap[weatherCode];
    return `https://openweathermap.org/img/wn/${icon}.png`;
}
