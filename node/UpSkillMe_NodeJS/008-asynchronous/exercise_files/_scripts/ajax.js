function get(url, success, fail) {
  let httpRequest = new XMLHttpRequest(); // we use AJAX request to get the data
  httpRequest.open('GET', url);
  httpRequest.onload = function () { // we use the callback to process the data
    if (httpRequest.status === 200) {
      success(httpRequest.responseText);
    } else {
      fail(httpRequest.responseText);
    }
  }
  httpRequest.send();
};

function successHandler(data) {
  const dataObj = JSON.parse(data);
  const weatherDiv = document.querySelector('#weather');
  const weatherFragment = `
        <h1>Weather</h1>
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </p>
    `
  weatherDiv.innerHTML = weatherFragment;
  weatherDiv.classList.remove('hidden');
}

function failHandler(status) {
  console.log('There is an error: ', status);
  const weatherDiv = document.querySelector('#weather');
  weatherDiv.classList.remove('hidden');
}

function tempToF(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}


document.addEventListener('DOMContentLoaded', function () {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", './key.txt', false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=los+angeles&APPID=' + rawFile.responseText;
        get(url, successHandler);
      }
    }
  }
  rawFile.send(null);
});
