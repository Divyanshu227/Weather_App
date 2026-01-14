# 🌦️ Weather App

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5">
  <img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3">
  <img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=javascript">
  <img src="https://img.shields.io/badge/API-OpenWeatherMap-green?style=for-the-badge">
  <br>
  <img src="https://img.shields.io/badge/NODEJS-purple?style=for-the-badge&logo=nodejs">
  <img src="https://img.shields.io/badge/EXPRESSJS-orange?style=for-the-badge&logo=expressjs">
</p>


A lightweight weather web app: responsive frontend (HTML/CSS/JS) with a minimal Express backend that proxies requests to the OpenWeatherMap API.

---

## Highlights

- Search weather by city name
- Shows temperature (°C), conditions, humidity and wind
- Framework-free frontend and a small server to keep the API key off the client
- Smooth UI transitions and subtle animations

---

## How it works

- Frontend (in `public/`) calls `/weather?city=City+Name` on the local server.
- The server reads `WEATHER_API_KEY` from `.env` and forwards the request to OpenWeatherMap, returning the JSON response to the client.

---

## Quickstart

Prerequisites: Node.js 16+ and an OpenWeatherMap API key.

1. Clone and install

```bash
git clone <repo-url>
cd Weather_App
npm install
```

2. Create a `.env` file in the project root with your API key:

```
WEATHER_API_KEY=your_openweathermap_api_key
```

3. Add `.env` to `.gitignore` (do not commit your key).

4. Start the server

```bash
npm start
# then open http://localhost:3000
```

Notes:
- `npm start` runs `node server.js` (the project uses ES module mode via `type: "module"`).
- If you prefer testing only the frontend, you can use a static server / Live Server, but local server is recommended so the API key remains hidden.

---

## Project structure

- `server.js` — Express server and `/weather` endpoint
- `public/` — `index.html`, `script.js`, `style.css`
- `.env` — local environment variables (not committed)
- `package.json` — scripts & dependencies

---

## Troubleshooting

- `City required` from `/weather`: ensure the client sends the `city` query param.
- API errors: verify `WEATHER_API_KEY`, check for rate limits, and confirm network connectivity.
- If server fails to start, run `node --version` and ensure Node 16+ is installed.

---

## What I learned

- Consuming REST APIs from the frontend
- Writing clean async code using `async/await`
- Handling API errors and edge cases
- Applying UI transitions and micro-interactions without overdesign

---

## Future improvements

- Dynamic weather icons
- Dark / night mode
- Geolocation-based default weather
- °C / °F toggle
- Skeleton loaders and accessibility improvements

---
