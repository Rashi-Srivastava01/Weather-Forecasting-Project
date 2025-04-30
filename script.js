const apikey="bec0ac594d1e1c596457db7ec1c8ef62";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
async function CheckWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apikey}`);
    var data=await response.json();

   

    document.querySelector(".City").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp +"°C";
    document.querySelector(".Humidity").innerHTML=data.main.humidity+ "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + "km/hr"; 
    
    if(data.weather[0].main=='Clouds'){
        weatherIcon.src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-1024.png";
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="https://cdn3.iconfinder.com/data/icons/stylized-weather-icons/745/501ModerateRain.png";
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="https://static-00.iconduck.com/assets.00/weather-clear-symbolic-icon-2048x2048-v4afvu7m.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="https://cdn1.iconfinder.com/data/icons/weather-filled-line-8/64/drizzle_weather_forecast_climate_meteorology-512.png";
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/512/10630/10630000.png";
    }
    else if(data.weather[0].main=='Snow'){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/512/6543/6543583.png";
    }

    document.querySelector(".weather").style.display="block";
    
}
    searchButton.addEventListener("click", ()=>{
        CheckWeather(searchBox.value);

    })