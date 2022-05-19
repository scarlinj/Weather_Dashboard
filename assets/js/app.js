// OpenWeather.org, generated API key = b50f611b32ae342cc1fd60d8843c9a81
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city

// to pass API key
var repoContainerEl = document.querySelector("#repos-container");
var searchZip = document.querySelector("#search-zip");
var weatherResult = document.querySelector('#weather');

var getWeatherRepos = function (zip) {
    var apiKey = 'b50f611b32ae342cc1fd60d8843c9a81';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
    fetch(apiUrl).then(function (response) {
            // response was successful, show current weather data
            if (response.ok) {
                response.json().then(function (data) {
                    var city = document.createElement("h3");
                    var weather = document.createElement("h3");
                    var temp = document.createElement("p");
                    var humidity = document.createElement("p");
                    var wind = document.createElement("p");
                    var UvIndex = document.createElement("p");

                    weatherResult.appendChild(city);
                    weatherResult.appendChild(weather);
                    weatherResult.appendChild(temp);
                    weatherResult.appendChild(humidity);
                    weatherResult.appendChild(wind);
                    weatherResult.appendChild(UvIndex);

                    city.textContent = data.name;
                    temp.textContent = data.main.temp;
                    console.log(data);
                });
            } else {
                console.log(response);
                alert("Error: ZIP code not found.");
            }
        })
        .catch(function (error) {
            //Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to OpenWeather");
        });
};

searchZip.addEventListener("submit", function (event) {
    event.preventDefault();
    var zip = document.querySelector('#zipValue').value;
    getWeatherRepos(zip)
})

// use the above method to pull data for  other categories besides temperature


// original fetch code, before update after update 6.3:
// fetch(apiUrl)
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (weatherResponse) {
//         console.log(weatherResponse);
//     });;

// 
// .search {
//     float: left;
//     display: block;
//     color: black;
//     text - align: center;
//     padding: 14 px 16 px;
//     text - decoration: none;
//     font - size: 17 px;
// }

// fetch(apiUrl).then(function (response) {
//         // response was successful
//         if (response.ok) {
//             response.json().then(function (data) {
//                 displayRepos(data, user);
//             });
//         } else {
//             alert("Error: Github user not found.");
//         }
//         // console.log(data);
//     })
//     .catch(function (error) {
//         //Notice this `.catch()` getting chained onto the end of the `.then()` method
//         alert("Unable to connect to GitHub");
//     });


var button = document.getElementsByClassName('button');