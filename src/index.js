// search function

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city");
  city = city.value;

  let cityName = document.querySelector("#city-name");
  cityName.innerHTML = city;

  let apiKey = "4e076de3815daadecc113ca47e581546";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;

  axios.get(`${apiUrl}&appid=${apiKey}`).then(getWeather);
}

function getWeather(response) {
  let cityTemp = Math.round(response.data.main.temp);
  let appTemp = document.querySelector("#temp-in-units");
  appTemp.innerHTML = `${cityTemp}°C`;

  let cityHumidity = response.data.main.humidity;
  let appHumidity = document.querySelector("#humidity");
  appHumidity.innerHTML = `${cityHumidity}%`;

  let cityWindSpeed = response.data.wind.speed;
  let appWindSpeed = document.querySelector("#wind-speed");
  appWindSpeed.innerHTML = `${cityWindSpeed} m/s`;
}

let searchForm = document.querySelector("#search-city-form");
searchForm.addEventListener("submit", searchCity);

// time and date
function zeroMinutes(date) {
  return (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
}
let now = new Date();

let updatedDate = document.querySelector("#current-date");
let updatedTime = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
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
let month = months[now.getMonth()];

let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();

updatedDate.innerHTML = `${day} ${date}th ${month}`;
updatedTime.innerHTML = `${hour}:${zeroMinutes(new Date())}`;
