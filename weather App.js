const cityinput=document.getElementById("cityinput");
const searchbtn=document.getElementById("searchbtn");
const weatherresult=document.getElementById("weatherresult");

const apikey="YOUR_API_KEY"  // ek key  jiska use baad me hoga //

async function getweather(city){  //function getweather  asunchronus function hai city jo user input lega uske based//

const url=`https://wttr.in/${city}?format=j1`    // url jisse hum api ko access kar payenge //
    const responce=await fetch(url)  // responce means ek request bhejna  aur await means jab tak data na aa jaye tab tak wiat karo fetch data lata hai//

    const data=await responce.json() //raw responce means string ko wo object me convert kar dega 

    weatherresult.innerHTML=`
  <h2>${city}</h2>
    <p>Temperature: ${data.current_condition[0].temp_C}°C</p>
    <p>Humidity: ${data.current_condition[0].humidity}%</p>
    <p>Wind Speed: ${data.current_condition[0].windspeedKmph} km/h</p>
  `
}

searchbtn.addEventListener("click",()=>{
    const city=cityinput.value // user jo city input liya hoga wahi display hoga//
    getweather(city)
})