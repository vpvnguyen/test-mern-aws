const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// parse json middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static files if env is production
app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Express listening on ${PORT}`);
}); 