const express = require("express");
const axios = require("axios");
const { PIXABAY_KEY } = require("../src/config/config");
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/proxy", async (req, res) => {
  const { q, image_type } = req.query;
  const url = `https://pixabay.com/api/?key=${PIXABAY_KEY}&q=${q}&image_type=${image_type}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => {
  console.log("Proxy server running on http://localhost:3001");
});
