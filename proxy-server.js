const express = require("express");
const axios = require("axios");
const cors = require("cors");  // Import cors package

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/api/Employee", async (req, res) => {
  try {
    const response = await axios.get("http://harrypottter-001-site1.qtempurl.com/api/Employee");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Proxy failed" });
  }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
