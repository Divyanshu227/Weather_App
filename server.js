import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.static("public"));
const API_KEY = process.env.WEATHER_API_KEY;
app.get("/weather", async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: "City required" });
    }
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        if (!response.ok) {
            return res.status(response.status).json({
                error: data.message || "Failed to fetch weather"
            });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get("/", (_, res) => {
    res.sendFile(path.resolve("public/index.html"));
});
app.listen(3000, () => {
    console.log("✅ Server running on http://localhost:3000");
});
