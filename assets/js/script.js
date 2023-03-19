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

//function getWeather

async function getWeather(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const weatherData = await response.json();
        const coords = {
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
        };

        console.log(weatherData)
        // saveCity(city);
        // displayWeather(weatherData, city);
        // getForecast(coords); 
    } catch (error) {
        alert("Could not load city./n Try Another City")
    }
}

//function getCurrendate

function getCurrentDate(){

}

// Displays the current weather data for a city 
function displayWeather(data) {

}

//Retrieves the 5-day forecast data for a city
function getForecast(coords){

}

// Saves a city to local storage
function saveCity(city){

} 

//display   search  history
function displaySearchHistory() {

}

//Displays the 5-day forecast data for a city

function displayForecast(data){

}

function historyHandler(event) {
}

displaySearchHistory()