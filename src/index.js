import './styles.css';
import './images/sun-thumb.png';

console.log('hello');

const sButton = document.querySelector('#s-btn');
sButton.addEventListener('click', () => {
  getWeather();
});

function getWeather() {
  const apiKey = '35de153be2dd9e1cceca881f02755982';
  const city = document.querySelector('#city').value;

  if (!city) {
    alert('Please enter a valid city');
    return;
  }

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  displayLoadAnimation();

  // Weather block
  fetchApi(weatherUrl, 'weather');

  // Forecast block
  fetchApi(forecastUrl, 'forecast');
}

async function fetchApi(url, displayAction) {
  try {
    const response = await fetch(url, { mode: 'cors' });

    if (!response.ok) {
      throw new Error('Error fetching resource');
    }
    const responseData = await response.json();
    console.log(responseData);

    endLoadAnimation();
    displayAction === 'weather'
      ? displayWeather(responseData)
      : displayForecast(responseData);
  } catch (error) {
    console.error(error);
    endLoadAnimation();
    const weatherInfo = document.querySelector('#weather-info');

    weatherInfo.innerHTML = `
    <div class="error-msg">
        <p>Invalid city!</p>
    </div>
    `;
  }
}

function displayWeather(responseData) {
  console.log("Hello, let's display weather data");
  const tempDivInfo = document.querySelector('#temp-div');
  const weatherInfo = document.querySelector('#weather-info');
  const weatherIcon = document.querySelector('#weather-icon');

  tempDivInfo.innerHTML = '';
  weatherInfo.innerHTML = '';
  tempDivInfo.innerHTML = '';

  if (responseData.cod === '404') {
    weatherInfo.innerHTML = `
    <p>${data.message}</p>
    `;
  } else {
    const cityName = responseData.name;
    const temp = Math.round(responseData.main.temp - 273.15);
    const iconCode = responseData.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    const desc = responseData.weather[0].description;

    const formDesc = desc.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
      letter.toUpperCase()
    );

    tempDivInfo.innerHTML = `
    <p>${temp}°C</p>
    `;
    weatherInfo.innerHTML = `
    <p>${cityName}</p>
    <p>${formDesc}</p>
    `;
    weatherIcon.src = iconUrl;
    weatherIcon.alt = desc;

    renderImage();
  }
}

function renderImage() {
  const weatherIcon = document.querySelector('#weather-icon');
  weatherIcon.style.display = 'block';
}

function displayForecast(responseData) {
  console.log("Hello, let's display forecast data");

  const hourlyForecastDiv = document.querySelector('#hourly-forecast');
  const next24hours = responseData.list.slice(0, 8);

  next24hours.forEach((element) => {
    const dateTime = new Date(element.dt * 1000);
    const hour = dateTime.getHours();
    const temp = Math.round(element.main.temp - 273.15);
    const desc = element.weather[0].description;
    const iconCode = element.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

    const hourlyItemHTML = `
    <div class="hourly-item">
        <span>${hour}</span>
        <img src="${iconUrl}" alt="${desc}">
        <span>${temp}°C</span>
    </div>
    `;
    hourlyForecastDiv.innerHTML += hourlyItemHTML;
  });
}

function clearInfos() {
  const tempDivInfo = document.querySelector('#temp-div');
  const weatherInfo = document.querySelector('#weather-info');
  const weatherIcon = document.querySelector('#weather-icon');
  const hourlyForecastDiv = document.querySelector('#hourly-forecast');

  tempDivInfo.innerHTML = '';
  weatherInfo.innerHTML = '';
  tempDivInfo.innerHTML = '';
  hourlyForecastDiv.innerHTML = '';
  weatherIcon.style.display = 'none';
}

function displayLoadAnimation() {
  clearInfos();
  const weatherIcon = document.querySelector('#weather-icon');

  const loaderDiv = document.createElement('div');
  loaderDiv.classList.add('loader');
  loaderDiv.setAttribute('id', 'loader');

  weatherIcon.after(loaderDiv);
}

function endLoadAnimation() {
  const loaderDiv = document.querySelector('#loader');
  if (loaderDiv) {
    loaderDiv.remove();
  }
}
