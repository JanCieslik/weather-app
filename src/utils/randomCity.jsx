    const cities = [
            "London", "Paris", "Berlin", "Madrid", "Rome",
            "Amsterdam", "Vienna", "Warsaw", "Prague",
            "New York", "Los Angeles", "Chicago", "Toronto", "Mexico City",
            "Buenos Aires", "São Paulo", "Rio de Janeiro", "Lima",
            "Tokyo", "Seoul", "Beijing", "Shanghai", "Bangkok", "Singapore", "Dubai",
            "Cairo", "Lagos", "Cape Town",
            "Sydney", "Melbourne"
        ];
export default function randomCity() {
    const random = [...cities].sort(() => Math.random() - 0.5);
    return random.slice(0,5);
}
