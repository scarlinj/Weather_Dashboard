var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  var requestUrl = 'https://api.github.com/users?per_page=5';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // TODO: Loop through the data and generate your HTML
      for (let i = 0; i <= 5; i++) {

        const userURL = data[i].user.url;
        const userInfo = data[i] = data[i].user.login;
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
      }

    });
}
fetchButton.addEventListener('click', getApi);