const weatherDisplay = document.querySelector('.weather');
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input');

// fetch data from weather api
const fetchWeather = async (city) => {
  const url = `/api?q=${city}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.cod === '404') {
    alert('City not found');
    return
  }

  if (data.cod === '401') {
    alert('Invalid API key');
    return
  }

  const displayData = {
    city: data.name,
    temp: data.main.temp, // Temperature in Celcius
  }

  addWeatherToDOM(displayData);
}

const addWeatherToDOM = (data) => {
  weatherDisplay.innerHTML = `
    <h1>Weather in ${data.city}</h1>
    <h2>${data.temp} &deg;F</h2>
  `;

  cityInput.value = '';
}

// Change submition behavior
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (cityInput.value === '') {
    alert('Please, enter a city');
  } else {
    fetchWeather(cityInput.value);
  }
});

// Initial fetch
fetchWeather('Miami');
