import express from "express";
const app = express();

app.get("/webhook", (req, res) => {
  const VERIFY_TOKEN = "botcake123";
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

app.post("/webhook", (req, res) => {
  console.log("POST data received");
  res.sendStatus(200);
});

app.listen(3000, () => console.log("✅ FB Verify Webhook running on port 3000"));

