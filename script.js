const apiKey = 'xxxxxxxxxxxx25dff3e9fb952c0c8f97'; //  Replace this with your actual OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();

  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found.");
      }
      return response.json();
    })
    .then(data => {
      const weatherHTML = `
        <p><strong>${data.name}, ${data.sys.country}</strong></p>
        <p>🌡️ Temperature: ${data.main.temp}°C</p>
        <p>☁️ Condition: ${data.weather[0].description}</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
        <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
      `;
      document.getElementById('weatherInfo').innerHTML = weatherHTML;
    })
    .catch(error => {
      document.getElementById('weatherInfo').innerHTML = `<p style="color:red;">${error.message}</p>`;
    });
}
