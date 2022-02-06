const API_KEY = "3adddbbe38405de883037d5131fe5195";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weather span");
        const weather = data.weather[0].main;
        const city = data.name;
        const temp = Math.floor(data.main.temp);
        weatherContainer.innerText = `${temp}º ${weather}
        ${city}`
    });

}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);