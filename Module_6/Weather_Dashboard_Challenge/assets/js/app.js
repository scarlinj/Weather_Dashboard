// OpenWeather.org, generated API key = b50f611b32ae342cc1fd60d8843c9a81


// to pass API key
var repoContainerEl = document.querySelector("#repos-container");
var searchZip = document.querySelector("#search-zip");
var weatherResult = document.querySelector('#weather');

var getWeatherRepos = function (zip) {
    var apiKey = 'b50f611b32ae342cc1fd60d8843c9a81';
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}`;
    fetch(apiUrl).then(function (response) {
            // response was successful
            if (response.ok) {
                response.json().then(function (data) {
                    var city = document.createElement("h3");
                    var temp = document.createElement("p");
                    weatherResult.appendChild(city);
                    weatherResult.appendChild(temp);
                    city.textContent = data.name;
                    temp.textContent = data.main.temp;
                    console.log(data);
                });
            } else {
                console.log(response);
                alert("Error: Github user not found.");
            }
        })
        .catch(function (error) {
            //Notice this `.catch()` getting chained onto the end of the `.then()` method
            alert("Unable to connect to GitHub");
        });
};

searchZip.addEventListener("submit", function (event) {
    event.preventDefault();
    var zip = document.querySelector('#zipValue').value;
    getWeatherRepos(zip)
})
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