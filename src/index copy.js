import './styles.css';
import './images/sun-thumb.png';

console.log('hello');

const sButton = document.querySelector('#s-btn');
sButton.addEventListener('click', () => {
  getWeather();
});

async function getWeather() {
  const apiKey = '35de153be2dd9e1cceca881f02755982';
  const city = document.querySelector('#city').value;

  if (!city) {
    alert('Please enter a valid city');
    return;
  }

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

  // Weather block
  try {
    const responseW = await fetch(weatherUrl, { mode: 'cors' });

    if (!responseW.ok) {
      throw new Error('Error fetching resource');
    }
    const responseWData = await responseW.json();
    console.log(responseWData);
  } catch (error) {
    console.error(error);
  }

  // Forecast block
  try {
    const responseFc = await fetch(forecastUrl, { mode: 'cors' });

    if (!responseFc.ok) {
      throw new Error('Error fetching resource');
    }
    const responseFcData = await responseFc.json();
    console.log(responseFcData);
  } catch (error) {
    console.error(error);
  }
}
