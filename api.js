var apiKey='d3c1450b0f021a1473e7810e627bd664';

function getData(){
    var inputVal = document.getElementById("City").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
    console.log(data)
    document.getElementById("p1").innerHTML = "Temp : "+data.main.temp;
    document.getElementById("p2").innerHTML = "Temp : "+data.name;
    var icon="http://openweathermap.org/img/w/" +data.weather[0].icon + ".png";
    document.getElementById("icon").src = icon;
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city :weary:";
    });
}