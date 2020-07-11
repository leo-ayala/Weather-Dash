// API key: 3e48a68a50e12b82f2ba32bcf44f8ba8
// Endpoint: api.openweathermap.org
// Example of a call: http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8

var searchEl = document.querySelector("#searchBtn");

var searchCity = function() {
    var searchedCity = document.getElementById("searchText").value;
        fetch(
        'http://api.openweathermap.org/data/2.5/weather?q=' +
        searchedCity +
        '&APPID=3e48a68a50e12b82f2ba32bcf44f8ba8&units=imperial')
    .then(res => res.json())
    .then(function(data) {
        secondcall(data);
        thirdcall(data);
})
}
function secondcall (data) {
    console.log(data);
        var cityName = data.name;
        var cityHum = data.main.humidity + " %";
        var cityTemp = data.main.temp + " °F";
    var tempEl =document.getElementById("temp")
         tempEl.innerHTML = ("Temperature: "+ cityTemp)
    var HumEl =document.getElementById("Hum")
         HumEl.innerHTML = ("Humidity: "+ cityHum)
        document.getElementById("city-name").innerHTML = (cityName)
        // cityNameEl.innerHTML = (cityName)
        // console.dir(cityNameEl)

}
function thirdcall (data) {
    console.log(data.name)
}

searchEl.addEventListener("click", searchCity);