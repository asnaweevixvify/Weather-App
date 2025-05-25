const key = ''
let city = ''
const country = 'th'
let info;
let tempText = document.querySelector('.temptext')
let tempInfo = document.querySelector('.tempinfo')
let weatherInfo = document.querySelector('.info1')
let humidInfo = document.querySelector('.info2')
let windInfo = document.querySelector('.info3')
let cityInfo = document.querySelector('.province')
let typeCity = document.querySelector('.type')
let btn = document.querySelector('.button')

btn.addEventListener('click',async function(){
    try{
    city = typeCity.value.trim();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${key}`
    await fetch(url)
    .then(res=>res.json())
    .then(json => {
        info=json
        if (info.cod !== 200) {
            Swal.fire({
                icon: "error",
                title: `<h1 class="alert">ไม่พบชื่อเมือง</h1>`,
              });
            return;
        }
        const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
        cityInfo.innerHTML=`${capitalizedCity}`
        tempText.innerHTML=`${info.main.temp}°C`
        tempInfo.innerHTML=`min ${info.main.temp_min} °C max ${info.main.temp_max} °C`
        weatherInfo.innerHTML=`${info.weather[0].main}`
        humidInfo.innerHTML=`Humiduty : ${info.main.humidity}`
        windInfo.innerHTML=`Wind : ${info.wind.speed}`
    })
}catch(err){
    alert("error")
}
})






