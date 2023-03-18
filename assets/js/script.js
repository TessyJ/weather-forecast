//dclaring necessary variables
var API_KEY = "98e415a404b9842fbcee260ea9a8c56e";
var searchFormEl = document.querySelector("#search-form");
var searchInputEl = document.querySelector("#search-input");
var searchHistoryEl = document.querySelector("#search-history");
var currentWeatherEl = document.querySelector("#current-weather");
var forecastEls = document.querySelectorAll("#forecast");
var searchBtnEl = document.querySelector("#search-btn");
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// Variables
var searchHistory = [];

//function search 
function searchHandler(event) {
    event.preventDefault();
    const searchInputEl = document.querySelector("#search-input");
    const city = searchInputEl.value.trim();

    if (!city) {
        return;
    }

    getWeather(city);
    searchInputEl.value = "";
}

searchBtnEl.addEventListener('click',searchHandler)
