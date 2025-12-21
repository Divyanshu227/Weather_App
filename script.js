const apiKey = API_KEY;

function createRain() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer) return;
    for (let i = 0; i < 50; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDelay = Math.random() * 0.6 + 's';
        drop.style.opacity = Math.random() * 0.5 + 0.3;
        rainContainer.appendChild(drop);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    createRain();
});

async function getWeather() {
    const city = document.getElementById("cityname").value.trim();
    const errorEl = document.getElementById("error");
    const weatherEl = document.getElementById("weather");
    errorEl.innerText = "";
    errorEl.classList.remove('show');
    weatherEl.classList.remove('show');

    if (city === "") {
        errorEl.innerText = "Please enter a city name";
        errorEl.classList.add('show');
        return;
    }

    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("City not found");
        }
        const data = await res.json();
        document.getElementById("city").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        const iconEl = document.getElementById('icon');
        iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        iconEl.alt = data.weather[0].description;
        weatherEl.classList.add('show');
    } catch (err) {
        errorEl.innerText = err.message || 'An error occurred';
        errorEl.classList.add('show');
    }
}