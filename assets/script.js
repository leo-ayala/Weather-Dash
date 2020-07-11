// API key: 3e48a68a50e12b82f2ba32bcf44f8ba8
// Endpoint: api.openweathermap.org
// Example of a call: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
currentDayEl = document.getElementById("currentDay")
currentDayEl.textContent = today;


var searchEl = document.querySelector("#searchBtn");

var searchCity = function() {

    var searchedCity = document.getElementById("searchText").value;
        fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        searchedCity +
        '&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8&units=imperial')
    .then(res => res.json())
    .then(function(data) {
        topSection(data);
        thirdcall(data);
})
}
function topSection (data) {
    console.log(data);
        var cityName = data.name;
        var cityHum = data.main.humidity + " %";
        var cityTemp = data.main.temp + " °F";
        var cityWS = data.wind.speed + " mph";
        var dayIcon = data.weather[0].icon + ".png";
    var tempEl = document.getElementById("temp")
         tempEl.innerHTML = ("Temperature: "+ cityTemp)
    var HumEl = document.getElementById("Hum")
         HumEl.innerHTML = ("Humidity: "+ cityHum)
    document.getElementById("city-name").innerHTML = (cityName)
    var WindEl = document.getElementById("wind")
         WindEl.innerHTML = ("Wind Speed: "+ cityWS)
    var iconEl = document.getElementById("icon")
         iconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayIcon)
}
function thirdcall (data) {
    console.log(data.name)
}
function styleChange() {
    var topEl = document.getElementById("header");
    topEl.style.backgroundPositionY = "-191px";
}

searchEl.addEventListener("click", searchCity);
searchEl.addEventListener("click", styleChange);