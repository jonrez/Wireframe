const btn = document.getElementById('search')
const info = document.getElementById('info')



function nextCall(response) {
  const lat = response.coord.lat
  const lon = response.coord.lon
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=&appid=1fed46fccb392859a4c0fbbd0c450fed`)
  .then(data => data.json())
  .then(data => makeHtml(response, data))

};

function makeHtml(response, data) {
  var activity;
  var html = `<p>`
  html += `<header class="row">
    <div class="col">Day</div>
    <div class="col">Temperature</div>
    <div class="col">Activity</div>
  </header>`
  for (var i = 0; i < data.daily.length; i++){
    if ((data.daily[i].temp.day-273.15) < 0 || data.daily[i].rain > 1){
      activity = "Jiu-Jitsu"
    }else if ((data.daily[i].temp.day-273.15) < 11){
      activity = "Tennis"
    }else{
      activity = "Boxing"
    }
    html += `<div class="row">
            <div class="col">${i}</div>
            <div class="col">${((data.daily[i].temp.day)-273.15).toFixed(2)}</div>
            <div class="col">${activity}</div>
            </div>`

  }
  info.innerHTML = html
  console.log(data)
}

btn.addEventListener('click', () => {
  btn.style.display = 'none'
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${'Apex'}&appid=1fed46fccb392859a4c0fbbd0c450fed`)
  .then(data => data.json())
  .then(data => nextCall(data))
})
