const apiKey = "ca018df54353f065aaed7d802825b8be";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = " Please enter a city name";
        return;
    }

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                result.innerHTML = " City not found";
                return;
            }

            result.innerHTML = `
                 <b>${data.name}, ${data.sys.country}</b><br>
                 <b>Weather:</b> ${data.weather[0].description}<br>
                 <b>Temperature:</b> ${data.main.temp} °C<br>
                 <b>Feels Like:</b> ${data.main.feels_like} °C<br>  
                 <b>Humidity:</b> ${data.main.humidity}%<br>
                 <b>Wind Speed:</b> ${data.wind.speed} m/s<br>
               
            `;
        })
        .catch(() => {
            result.innerHTML = " Error fetching data";
        });
}
