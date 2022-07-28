const city = document.getElementById("city")
const search = document.getElementById("search")


async function fetchWeather(cityName) {

    let apiKey = "fd58563d7e66df546d92a647b21108e5"
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    try {
        let response = await fetch(api)
        let result = await response.json()
        document.getElementById("temp").innerText = result.main.temp
        document.getElementById("maxTemp").innerText = result.main.temp_max
        document.getElementById("minTemp").innerText = result.main.temp_min
        document.getElementById("humidity").innerText = result.main.humidity

    }
    catch (error) {
        console.log(error)
    }



}


// on click  on search button(adding event listner)
search.addEventListener("click", (e) => {

    // grab input from city input field  
    let cityName = city.value

    // ask weather app  to give me weather data of that city
     fetchWeather(cityName)

    // fetch(api)
    // .then((response)=>{
    //  return response.json()
    // })
    // .then((response)=>{
    //     console.log(response)
    //    })
    // .catch((error)=>{
    //     console.log(error)
    // })
})