/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzPzE1NTMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles.css\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _images_sun_thumb_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/sun-thumb.png */ \"./src/images/sun-thumb.png\");\n\n\n\nconsole.log('hello');\n\nconst sButton = document.querySelector('#s-btn');\nsButton.addEventListener('click', () => {\n  getWeather();\n});\n\nfunction getWeather() {\n  const apiKey = '35de153be2dd9e1cceca881f02755982';\n  const city = document.querySelector('#city').value;\n\n  if (!city) {\n    alert('Please enter a valid city');\n    return;\n  }\n\n  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;\n  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;\n\n  displayLoadAnimation();\n\n  // Weather block\n  fetchApi(weatherUrl, 'weather');\n\n  // Forecast block\n  fetchApi(forecastUrl, 'forecast');\n}\n\nasync function fetchApi(url, displayAction) {\n  try {\n    const response = await fetch(url, { mode: 'cors' });\n\n    if (!response.ok) {\n      throw new Error('Error fetching resource');\n    }\n    const responseData = await response.json();\n    console.log(responseData);\n\n    endLoadAnimation();\n    displayAction === 'weather'\n      ? displayWeather(responseData)\n      : displayForecast(responseData);\n  } catch (error) {\n    console.error(error);\n    endLoadAnimation();\n    const weatherInfo = document.querySelector('#weather-info');\n\n    weatherInfo.innerHTML = `\n    <div class=\"error-msg\">\n        <p>Invalid city!</p>\n    </div>\n    `;\n  }\n}\n\nfunction displayWeather(responseData) {\n  console.log(\"Hello, let's display weather data\");\n  const tempDivInfo = document.querySelector('#temp-div');\n  const weatherInfo = document.querySelector('#weather-info');\n  const weatherIcon = document.querySelector('#weather-icon');\n\n  tempDivInfo.innerHTML = '';\n  weatherInfo.innerHTML = '';\n  tempDivInfo.innerHTML = '';\n\n  if (responseData.cod === '404') {\n    weatherInfo.innerHTML = `\n    <p>${data.message}</p>\n    `;\n  } else {\n    const cityName = responseData.name;\n    const temp = Math.round(responseData.main.temp - 273.15);\n    const iconCode = responseData.weather[0].icon;\n    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;\n    const desc = responseData.weather[0].description;\n\n    const formDesc = desc.replace(/(^\\w{1})|(\\s+\\w{1})/g, (letter) =>\n      letter.toUpperCase()\n    );\n\n    tempDivInfo.innerHTML = `\n    <p>${temp}°C</p>\n    `;\n    weatherInfo.innerHTML = `\n    <p>${cityName}</p>\n    <p>${formDesc}</p>\n    `;\n    weatherIcon.src = iconUrl;\n    weatherIcon.alt = desc;\n\n    renderImage();\n  }\n}\n\nfunction renderImage() {\n  const weatherIcon = document.querySelector('#weather-icon');\n  weatherIcon.style.display = 'block';\n}\n\nfunction displayForecast(responseData) {\n  console.log(\"Hello, let's display forecast data\");\n\n  const hourlyForecastDiv = document.querySelector('#hourly-forecast');\n  const next24hours = responseData.list.slice(0, 8);\n\n  next24hours.forEach((element) => {\n    const dateTime = new Date(element.dt * 1000);\n    const hour = dateTime.getHours();\n    const temp = Math.round(element.main.temp - 273.15);\n    const desc = element.weather[0].description;\n    const iconCode = element.weather[0].icon;\n    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;\n\n    const hourlyItemHTML = `\n    <div class=\"hourly-item\">\n        <span>${hour}</span>\n        <img src=\"${iconUrl}\" alt=\"${desc}\">\n        <span>${temp}°C</span>\n    </div>\n    `;\n    hourlyForecastDiv.innerHTML += hourlyItemHTML;\n  });\n}\n\nfunction clearInfos() {\n  const tempDivInfo = document.querySelector('#temp-div');\n  const weatherInfo = document.querySelector('#weather-info');\n  const weatherIcon = document.querySelector('#weather-icon');\n  const hourlyForecastDiv = document.querySelector('#hourly-forecast');\n\n  tempDivInfo.innerHTML = '';\n  weatherInfo.innerHTML = '';\n  tempDivInfo.innerHTML = '';\n  hourlyForecastDiv.innerHTML = '';\n  weatherIcon.style.display = 'none';\n}\n\nfunction displayLoadAnimation() {\n  clearInfos();\n  const weatherIcon = document.querySelector('#weather-icon');\n\n  const loaderDiv = document.createElement('div');\n  loaderDiv.classList.add('loader');\n  loaderDiv.setAttribute('id', 'loader');\n\n  weatherIcon.after(loaderDiv);\n}\n\nfunction endLoadAnimation() {\n  const loaderDiv = document.querySelector('#loader');\n  if (loaderDiv) {\n    loaderDiv.remove();\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXNCO0FBQ1U7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBFQUEwRSxLQUFLLFNBQVMsT0FBTztBQUMvRiw0RUFBNEUsS0FBSyxTQUFTLE9BQU87O0FBRWpHOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0MsY0FBYzs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVMsYUFBYTtBQUN0QjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsU0FBUztBQUNsRTs7QUFFQSx3Q0FBd0MsRUFBRSxTQUFTLEVBQUU7QUFDckQ7QUFDQTs7QUFFQTtBQUNBLFNBQVMsS0FBSztBQUNkO0FBQ0E7QUFDQSxTQUFTLFNBQVM7QUFDbEIsU0FBUyxTQUFTO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxTQUFTOztBQUVsRTtBQUNBO0FBQ0EsZ0JBQWdCLEtBQUs7QUFDckIsb0JBQW9CLFFBQVEsU0FBUyxLQUFLO0FBQzFDLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3N1bi10aHVtYi5wbmcnO1xuXG5jb25zb2xlLmxvZygnaGVsbG8nKTtcblxuY29uc3Qgc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzLWJ0bicpO1xuc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgZ2V0V2VhdGhlcigpO1xufSk7XG5cbmZ1bmN0aW9uIGdldFdlYXRoZXIoKSB7XG4gIGNvbnN0IGFwaUtleSA9ICczNWRlMTUzYmUyZGQ5ZTFjY2VjYTg4MWYwMjc1NTk4Mic7XG4gIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2l0eScpLnZhbHVlO1xuXG4gIGlmICghY2l0eSkge1xuICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjaXR5Jyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgd2VhdGhlclVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mYXBwaWQ9JHthcGlLZXl9YDtcbiAgY29uc3QgZm9yZWNhc3RVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZhcHBpZD0ke2FwaUtleX1gO1xuXG4gIGRpc3BsYXlMb2FkQW5pbWF0aW9uKCk7XG5cbiAgLy8gV2VhdGhlciBibG9ja1xuICBmZXRjaEFwaSh3ZWF0aGVyVXJsLCAnd2VhdGhlcicpO1xuXG4gIC8vIEZvcmVjYXN0IGJsb2NrXG4gIGZldGNoQXBpKGZvcmVjYXN0VXJsLCAnZm9yZWNhc3QnKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hBcGkodXJsLCBkaXNwbGF5QWN0aW9uKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogJ2NvcnMnIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBmZXRjaGluZyByZXNvdXJjZScpO1xuICAgIH1cbiAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcblxuICAgIGVuZExvYWRBbmltYXRpb24oKTtcbiAgICBkaXNwbGF5QWN0aW9uID09PSAnd2VhdGhlcidcbiAgICAgID8gZGlzcGxheVdlYXRoZXIocmVzcG9uc2VEYXRhKVxuICAgICAgOiBkaXNwbGF5Rm9yZWNhc3QocmVzcG9uc2VEYXRhKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICBlbmRMb2FkQW5pbWF0aW9uKCk7XG4gICAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pbmZvJyk7XG5cbiAgICB3ZWF0aGVySW5mby5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLW1zZ1wiPlxuICAgICAgICA8cD5JbnZhbGlkIGNpdHkhPC9wPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIocmVzcG9uc2VEYXRhKSB7XG4gIGNvbnNvbGUubG9nKFwiSGVsbG8sIGxldCdzIGRpc3BsYXkgd2VhdGhlciBkYXRhXCIpO1xuICBjb25zdCB0ZW1wRGl2SW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZW1wLWRpdicpO1xuICBjb25zdCB3ZWF0aGVySW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWluZm8nKTtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pY29uJyk7XG5cbiAgdGVtcERpdkluZm8uaW5uZXJIVE1MID0gJyc7XG4gIHdlYXRoZXJJbmZvLmlubmVySFRNTCA9ICcnO1xuICB0ZW1wRGl2SW5mby5pbm5lckhUTUwgPSAnJztcblxuICBpZiAocmVzcG9uc2VEYXRhLmNvZCA9PT0gJzQwNCcpIHtcbiAgICB3ZWF0aGVySW5mby5pbm5lckhUTUwgPSBgXG4gICAgPHA+JHtkYXRhLm1lc3NhZ2V9PC9wPlxuICAgIGA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2l0eU5hbWUgPSByZXNwb25zZURhdGEubmFtZTtcbiAgICBjb25zdCB0ZW1wID0gTWF0aC5yb3VuZChyZXNwb25zZURhdGEubWFpbi50ZW1wIC0gMjczLjE1KTtcbiAgICBjb25zdCBpY29uQ29kZSA9IHJlc3BvbnNlRGF0YS53ZWF0aGVyWzBdLmljb247XG4gICAgY29uc3QgaWNvblVybCA9IGBodHRwczovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtpY29uQ29kZX1ANHgucG5nYDtcbiAgICBjb25zdCBkZXNjID0gcmVzcG9uc2VEYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICBjb25zdCBmb3JtRGVzYyA9IGRlc2MucmVwbGFjZSgvKF5cXHd7MX0pfChcXHMrXFx3ezF9KS9nLCAobGV0dGVyKSA9PlxuICAgICAgbGV0dGVyLnRvVXBwZXJDYXNlKClcbiAgICApO1xuXG4gICAgdGVtcERpdkluZm8uaW5uZXJIVE1MID0gYFxuICAgIDxwPiR7dGVtcH3CsEM8L3A+XG4gICAgYDtcbiAgICB3ZWF0aGVySW5mby5pbm5lckhUTUwgPSBgXG4gICAgPHA+JHtjaXR5TmFtZX08L3A+XG4gICAgPHA+JHtmb3JtRGVzY308L3A+XG4gICAgYDtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uVXJsO1xuICAgIHdlYXRoZXJJY29uLmFsdCA9IGRlc2M7XG5cbiAgICByZW5kZXJJbWFnZSgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckltYWdlKCkge1xuICBjb25zdCB3ZWF0aGVySWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3ZWF0aGVyLWljb24nKTtcbiAgd2VhdGhlckljb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JlY2FzdChyZXNwb25zZURhdGEpIHtcbiAgY29uc29sZS5sb2coXCJIZWxsbywgbGV0J3MgZGlzcGxheSBmb3JlY2FzdCBkYXRhXCIpO1xuXG4gIGNvbnN0IGhvdXJseUZvcmVjYXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvdXJseS1mb3JlY2FzdCcpO1xuICBjb25zdCBuZXh0MjRob3VycyA9IHJlc3BvbnNlRGF0YS5saXN0LnNsaWNlKDAsIDgpO1xuXG4gIG5leHQyNGhvdXJzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBjb25zdCBkYXRlVGltZSA9IG5ldyBEYXRlKGVsZW1lbnQuZHQgKiAxMDAwKTtcbiAgICBjb25zdCBob3VyID0gZGF0ZVRpbWUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB0ZW1wID0gTWF0aC5yb3VuZChlbGVtZW50Lm1haW4udGVtcCAtIDI3My4xNSk7XG4gICAgY29uc3QgZGVzYyA9IGVsZW1lbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBpY29uQ29kZSA9IGVsZW1lbnQud2VhdGhlclswXS5pY29uO1xuICAgIGNvbnN0IGljb25VcmwgPSBgaHR0cHM6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aWNvbkNvZGV9LnBuZ2A7XG5cbiAgICBjb25zdCBob3VybHlJdGVtSFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiaG91cmx5LWl0ZW1cIj5cbiAgICAgICAgPHNwYW4+JHtob3VyfTwvc3Bhbj5cbiAgICAgICAgPGltZyBzcmM9XCIke2ljb25Vcmx9XCIgYWx0PVwiJHtkZXNjfVwiPlxuICAgICAgICA8c3Bhbj4ke3RlbXB9wrBDPC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIGA7XG4gICAgaG91cmx5Rm9yZWNhc3REaXYuaW5uZXJIVE1MICs9IGhvdXJseUl0ZW1IVE1MO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2xlYXJJbmZvcygpIHtcbiAgY29uc3QgdGVtcERpdkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC1kaXYnKTtcbiAgY29uc3Qgd2VhdGhlckluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pbmZvJyk7XG4gIGNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dlYXRoZXItaWNvbicpO1xuICBjb25zdCBob3VybHlGb3JlY2FzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3VybHktZm9yZWNhc3QnKTtcblxuICB0ZW1wRGl2SW5mby5pbm5lckhUTUwgPSAnJztcbiAgd2VhdGhlckluZm8uaW5uZXJIVE1MID0gJyc7XG4gIHRlbXBEaXZJbmZvLmlubmVySFRNTCA9ICcnO1xuICBob3VybHlGb3JlY2FzdERpdi5pbm5lckhUTUwgPSAnJztcbiAgd2VhdGhlckljb24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn1cblxuZnVuY3Rpb24gZGlzcGxheUxvYWRBbmltYXRpb24oKSB7XG4gIGNsZWFySW5mb3MoKTtcbiAgY29uc3Qgd2VhdGhlckljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2VhdGhlci1pY29uJyk7XG5cbiAgY29uc3QgbG9hZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxvYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdsb2FkZXInKTtcbiAgbG9hZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9hZGVyJyk7XG5cbiAgd2VhdGhlckljb24uYWZ0ZXIobG9hZGVyRGl2KTtcbn1cblxuZnVuY3Rpb24gZW5kTG9hZEFuaW1hdGlvbigpIHtcbiAgY29uc3QgbG9hZGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xvYWRlcicpO1xuICBpZiAobG9hZGVyRGl2KSB7XG4gICAgbG9hZGVyRGl2LnJlbW92ZSgpO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/images/sun-thumb.png":
/*!**********************************!*\
  !*** ./src/images/sun-thumb.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc1444d96ea0b92758e8.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;