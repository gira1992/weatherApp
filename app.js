// api.openweathermap.org/data/2.5/weather?q={city name}&appid={85707fb72d2f5523c0bf27cb567feb6b}

// window.addEventListener("load", () =>) {
//     let long;
//     let lat;

//     if(navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition => {
//             console.log()
//         }
//     }
// }

const api = {
    key: "7da1438f56bfc7b3fbeafcc5157ea681",
    base:"https://api.openweathermap.org/data/2.5/"
    
    
}



//SEARCH BAR
const searchBox = document.querySelector(".searchBox");
searchBox.addEventListener('keypress', setQuery);



function setQuery(evt){
    //13 "enter" on keyboard
    if (evt.keyCode == 13){
        getResults(searchBox.value);
        console.log(searchBox.value);
    }
}

function getResults(query) {
    // feteched from the api(base:url)
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    
    .then(weather => {
        return weather.json();
   }).then(displayResults);
}

function displayResults(weather){
    console.log(weather);
    let city = document.querySelector(".location .city")
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

   
    let icon = document.querySelector(".weatherIcon");
      
    // icon.innerHTML = `<img src="./img/${weather.weather[0].main}.png">`;
    
    let temp = document.querySelector(".current .temp");
    //fetching the temp from w
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>&deg;c</span>`;

    let weatherEl = document.querySelector(".current .weather");
    weatherEl.innerHTML = weather.weather[0].description;
   

    let hiLow = document.querySelector(".hi-low");
    hiLow.innerHTML =  `${weather.main.temp_min}&deg;c / ${weather.main.temp_max}&deg;c`;

}
