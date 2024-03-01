function getWeather() {
  const apiKey = "da71bc089d32e0a66fa89cf43f99121e";
  const city = "Saltillo";

  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(currentWeatherUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching current weather data: ", error);
      alert("Error fetching current weather data. Please try again.");
    });
}

function displayWeather(data) {
  const weatherCity = document.getElementById("city");
  const weather = document.getElementById("weather");

  weather.innerHTML = "";
  weatherCity.innerHTML = "";

  if (data.cod === "404") {
    weather.innerHTML = `
    <p>${data.message}</p>
    `;
  } else {
    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15);

    const weatherHTML = `
    <p>${cityName}</p>
    `;

    const temperatureHTML = `
    <p>${temperature}°C</p>
    `;

    weatherCity.innerHTML = weatherHTML;
    weather.innerHTML = temperatureHTML;
  }
}

getWeather();
