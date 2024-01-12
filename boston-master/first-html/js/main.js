

const link_api_key = "9e284d76901d1bba555af0892fa073c3"
const link_url = "https://api.openweathermap.org/data/2.5/weather"
const city = prompt("seher daxil et")


const quary = `?q= ${city}&APPID=${link_api_key}&units=metric`

var cityName = document.querySelector("#cityName")
var temp = document.querySelector("#temp")

var humidity = document.querySelector("#humidity")

var descriptiontemp = document.querySelector("#description")

var weatherIcon = document.querySelector("#weatherIcon")




const  functionFetch = async () => {
  const response = await fetch (`${link_url}${quary}`,{
    method:"GET"
  })
  console.log(response);

  const data = await response.json()
  console.log(data)
  info(data)
}

functionFetch()


function info(element){

  
  cityName.textContent = element.name
  temp.textContent = element.main.temp

  humidity.textContent = element.main.humidity

  windSpeed.textContent = element.wind.speed
  description.textContent = element.weather[0].description

  weatherIcon.src = `https://openweathermap.org/img/wn/${element.weather[0].icon}.png`

}



