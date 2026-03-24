const express = require("express");
const app = express();

app.use(express.json());

app.post("/generate", (req, res) => {
  const name = req.body.name;

  // Fake video (demo)
  const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  res.json({ videoUrl });
});

app.listen(10000, () => console.log("Server running"));