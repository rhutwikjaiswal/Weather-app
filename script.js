const city = document.getElementById("text");
const button = document.getElementById("button");

async function fetchWeather(cityName) {
  let apiKey = "fd58563d7e66df546d92a647b21108e5";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  try {
    let response = await fetch(api);
    let result = await response.json();
    console.log(result);
 
    let Orgtemp = Math.trunc(result.main.temp - 273);
    document.getElementById("temp").innerText = Orgtemp+" ºC";
    document.getElementById("cit").innerText = " Weather in "+result.name;
    document.getElementById("weather").innerText = result.weather[0].main;
    document.getElementById("humidity").innerText = "Humidity: "+result.main.humidity+"%";
    document.getElementById("wind").innerText ="Wind Speed: "+ result.wind.speed+" km/hr";

    // if(  result.weather[0].main == "rain"){
    //   document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1100946/pexels-photo-1100946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')";
    //   console.log(result.weather[0].main);
    // }
 
  } catch (error) {
    console.log(error);
  }


}

button.addEventListener("click", (e) => {
  let cityName = city.value;
  fetchWeather(cityName);
  if(city.value = " "){
    
  };
});