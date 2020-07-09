// API key: 3e48a68a50e12b82f2ba32bcf44f8ba8
// Endpoint: api.openweathermap.org
// Example of a call: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8

var searchEl = document.querySelector("#searchBtn");

var searchCity = function() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Orlando,us&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8")
    .then(res => res.json())
    .then(data => console.log(data.main.temp))
}

//search bar to look at API doc
//add function that reads index text

searchEl.addEventListener("click", searchCity);