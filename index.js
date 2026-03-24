const express = require("express");
const app = express();

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// Generate API
app.post("/generate", (req, res) => {
  const name = req.body.name || "Guest";

  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  res.json({ videoUrl });
});

// IMPORTANT (Render uses dynamic port)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
