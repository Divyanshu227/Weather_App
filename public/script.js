console.log("script.js loaded");
function createRain() {
    const rainContainer = document.getElementById("rainContainer");
    if (!rainContainer) return;

    rainContainer.innerHTML = "";

    const drops = 200;
    for (let i = 0; i < drops; i++) {
        const drop = document.createElement("div");
        drop.className = "rain-drop";
        drop.style.left = Math.random() * 100 + "%";
        drop.style.animationDelay = Math.random() * 0.6 + "s";
        drop.style.opacity = Math.random() * 0.5 + 0.3;
        rainContainer.appendChild(drop);
    }
}

document.addEventListener("DOMContentLoaded", createRain);

const footer = document.querySelector("footer");
footer.innerHTML = `© ${new Date().getFullYear()} Weather App. All rights reserved.`;

async function getWeather() {
    const city = document.getElementById("cityname").value.trim();
    const errorEl = document.getElementById("error");
    const weatherEl = document.getElementById("weather");
    errorEl.textContent = "";
    errorEl.classList.remove("show");
    weatherEl.classList.remove("show");
    if (!city) {
        errorEl.textContent = "Please enter a city name";
        errorEl.classList.add("show");
        return;
    }
    try {
        const res = await fetch(`/weather?city=${encodeURIComponent(city)}`);
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || "City not found");
        }
        document.getElementById("city").innerText = `${data.name}, ${data.sys.country}`;
        document.getElementById("temp").innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById("condition").innerText = `Condition: ${data.weather[0].description}`;
        document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").innerText = `Wind Speed: ${data.wind.speed} m/s`;
        const icon = document.getElementById("icon");
        icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        icon.alt = data.weather[0].description;
        weatherEl.classList.add("show");
    } catch (err) {
        errorEl.textContent = err.message;
        errorEl.classList.add("show");
    }
}
