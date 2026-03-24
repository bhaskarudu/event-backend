const { exec } = require("child_process");

app.post("/generate", (req, res) => {
  const name = req.body.name || "Guest";

  const output = `video-${Date.now()}.mp4`;

  const command = `ffmpeg -i template.mp4 -vf "drawtext=text='${name}':x=100:y=100:fontsize=40:fontcolor=white" public/${output}`;

  exec(command, (err) => {
    if (err) {
      return res.json({ videoUrl: "Error" });
    }

    res.json({
      videoUrl: `https://your-domain/${output}`
    });
  });
});
