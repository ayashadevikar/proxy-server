const express = require("express");
const axios = require("axios");
const app = express();

app.get("/api/Employee", async (req, res) => {
  try {
    const response = await axios.get("http://harrypottter-001-site1.qtempurl.com/api/Employee");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching from .NET API:", error.message);
    res.status(500).json({ error: "Proxy failed" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
