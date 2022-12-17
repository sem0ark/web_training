// function get(url, success, fail) {
function get(url) {
  return new Promise((res, rej) => {  
    let httpRequest = new XMLHttpRequest(); // we use AJAX request to get the data
    httpRequest.open('GET', url);
    
    httpRequest.onload = function () { // we use the callback to process the data
      if (httpRequest.status === 200) {
        res(httpRequest.responseText);
      } else {
        rej(httpRequest.status);
      }
    }
    
    // httpRequest.onload = function () { // we use the callback to process the data
    //   if (httpRequest.status === 200) {
    //     success(httpRequest.responseText);
    //   } else {
    //     fail(httpRequest.responseText);
    //   }
    // }
    httpRequest.send();
  });
};

function successHandler(data) {
  const dataObj = JSON.parse(data);
  const div = `
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
  return div;
}

function failHandler(err) {
  console.error('There is an error: ', err);
  // const weatherDiv = document.querySelector('#weather');
  // weatherDiv.classList.remove('hidden');
}

function tempToF(kelvin) {
  return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function readFilePromise(filename) {
  return new Promise((resolve, reject) => {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filename, false);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          resolve(rawFile.responseText);
        } else {
          reject(rawFile.status);
        }
      }
    }
    rawFile.send(null);
  })
}


document.addEventListener('DOMContentLoaded', function () {
  const weatherDiv = document.querySelector('#weather');

  const locations = [
    'los+angeles,us',
    'san+francisco,us',
    'lone+pine,us',
    'mariposa,us',
  ];

  // readFilePromise('./key.txt')
  // .then((key) => {
  //   const urls = locations.map((location) => {
  //     return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`
  //   });
  //   Promise.all(urls.map((e) => get(e)))
  //     .then((responses) => {
  //       return responses.map((res) => successHandler(res))
  //     }) // we use .then notation for the success
  //     .then((literals) => {
  //       weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
  //     })
  //     .catch((err) => failHandler(err))     // we use .catch notation for the fail
  //     .finally(() => {
  //       weatherDiv.classList.remove('hidden');
  //     }); // runs in the end
  //     // we can use there as many .then as we want and all of them would go to the catch in case of error
  // })
  // .catch((err) => console.error(err));

  (async () => { // we create and execute an asynchronous function
    let key = await readFilePromise('./key.txt');
    const urls = locations.map((location) => {
      return `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${key}`
    });


    try {
      let responses = [];
      for (let url of urls) {
        responses.push(await get(url));
        // we use await notation to get information from 
        // so it is waiting one by one for all the responses 
      }
      
      let literals = responses.map((res) => successHandler(res));

      weatherDiv.innerHTML = `<h1>Weather</h1>${literals.join('')}`;
      weatherDiv.classList.remove('hidden');
    } catch (status) {
      failHandler(status);
    } finally {
      weatherDiv.classList.remove('hidden');
    }
  })();
});
