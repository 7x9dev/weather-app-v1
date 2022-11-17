const api = {
   endpoint: "https://api.openweathermap.org/data/2.5/",
   key: "5166d6bfe55bc81ec2d7bb78b538650f",
};

// default weather
async function defaultWeather(city) {
   const defaultCity = await fetch(
      `${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`
   );
   const defaultWeather = await defaultCity.json();
   displayDefault(defaultWeather);
}
function displayDefault(defaultWeather) {
   let getDefaultCity = document.querySelector("#city");
   getDefaultCity.innerHTML = `<i class="fa-solid fa-location-dot fa-sm"></i> ${defaultWeather.name}, ${defaultWeather.sys.country}`;

   let defaultTemp = document.querySelector("#temperature");
   defaultTemp.innerHTML = `${Math.round(defaultWeather.main.temp)}°`;

   let defaultFeelsLike = document.querySelector("#feelsLike");
   defaultFeelsLike.innerHTML = `Feels ${Math.round(
      defaultWeather.main.feels_like
   )}°`;

   let defaultTempVariation = document.querySelector("#variation");
   defaultTempVariation.innerHTML = `Min ${Math.round(
      defaultWeather.main.temp_min
   )}° | Max ${Math.round(defaultWeather.main.temp_max)}°`;
}
defaultWeather("Toronto");

// date
function getDate() {
   const today = new Date();
   const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];
   const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];
   let day = days[today.getDay()];
   let date = today.getDate();
   let month = months[today.getMonth()];
   let year = today.getFullYear();
   let todayDate = document.querySelector("#date");
   todayDate.textContent = `${day}, ${date} ${month} ${year}`;
}
getDate();

// search
const input = document.querySelector("#search");
input.addEventListener("keydown", enter);

function enter(e) {
   if (e.keyCode === 13) {
      getInfo(input.value);
   }
}
async function getInfo(data) {
   const result = await fetch(
      `${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`
   );
   const endResult = await result.json();
   displayResult(endResult);
}
function displayResult(endResult) {
   let city = document.querySelector("#city");
   city.innerHTML = `<i class="fa-solid fa-location-dot fa-sm"></i> ${endResult.name}, ${endResult.sys.country}`;

   let temp = document.querySelector("#temperature");
   temp.innerHTML = `${Math.round(endResult.main.temp)}°`;

   let feelsLike = document.querySelector("#feelsLike");
   feelsLike.innerHTML = `Feels ${Math.round(endResult.main.feels_like)}°`;

   let tempVariation = document.querySelector("#variation");
   tempVariation.innerHTML = `Min ${Math.round(
      endResult.main.temp_min
   )}° | Max ${Math.round(endResult.main.temp_max)}°`;
}
