// This file is clean and should NOT trigger gitleaks
// Used to confirm normal code passes the scan

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello secure world 🚀");
});

app.listen(3000);
