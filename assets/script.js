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

var searchCity = function () {

    var searchedCity = document.getElementById("searchText").value;
    document.getElementById("searchText").value = "";
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        searchedCity +
        '&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8&units=imperial')
        .then(res => res.json())
        .then(function (data) {
            topSection(data);
            thirdcall(data);
        })
    var cityList = document.getElementById("city-list")
    var list = document.createElement("ul")
    var listline = document.createElement("li")

    listline.textContent = (searchedCity)
    list.appendChild(listline)
    cityList.appendChild(list)
    localStorage.setItem("city", searchedCity)

}
function topSection(data) {
    console.log(data);
    var cityName = data.name;
    var cityHum = data.main.humidity + " %";
    var cityTemp = data.main.temp + " °F";
    var cityWS = data.wind.speed + " mph";
    var dayIcon = data.weather[0].icon + ".png";
    var tempEl = document.getElementById("temp")
     tempEl.innerHTML = ("Temperature: " + cityTemp)
    var HumEl = document.getElementById("Hum")
     HumEl.innerHTML = ("Humidity: " + cityHum)
    document.getElementById("city-name").innerHTML = (cityName)
    var WindEl = document.getElementById("wind")
     WindEl.innerHTML = ("Wind Speed: " + cityWS)
    var iconEl = document.getElementById("icon")
     iconEl.setAttribute("src", "http://openweathermap.org/img/w/" + dayIcon)
}
function thirdcall(data) {
    var lat = data.coord.lat
    var lon = data.coord.lon

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' +
        lat + '&lon=' + lon +
        '&exclude=hourly,minutely&units=imperial' +
        '&appid=3e48a68a50e12b82f2ba32bcf44f8ba8')
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayUvi(data);
                    displayFiveDay(data);
                    console.log(data)
                });
            }
        });
}

function displayUvi(data) {
    var uviEl = document.getElementById("UV")
    uviEl.innerHTML = ("UV Index: " + (data.daily[0].uvi))
}

function displayFiveDay(data) {
    var futureEl = document.getElementById("Forecast")
    futureEl.innerHTML = "";
    for (var i = 1; i < 6; i++) {

        var futureDayEl = document.createElement("div")
        futureDayEl.className = "futuredays"

        var DateEl = document.createElement("p")
        var tempEl = document.createElement("p")
        var HumEl = document.createElement("p")
        var iconEl = document.createElement("img")
        
        iconEl.classList = ("img")
        iconEl.setAttribute = ("src", "http://openweathermap.org/img/w/" + (data.daily[i].weather[0].icon + ".png"))
        tempEl.textContent = "Temp: " + Math.round(data.daily[i].temp.day) + " °F"
        HumEl.textContent = "Humidity: " + (data.daily[i].humidity) + " %"

        console.log(iconEl)
        futureDayEl.appendChild(iconEl)
        futureDayEl.appendChild(tempEl)
        futureDayEl.appendChild(HumEl)
        futureEl.appendChild(futureDayEl)
    }
}

function styleChange() {
    var topEl = document.getElementById("header");
    topEl.style.backgroundPositionY = "-195px";

}

searchEl.addEventListener("click", searchCity);
searchEl.addEventListener("click", styleChange);