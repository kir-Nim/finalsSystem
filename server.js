const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Node.js Backend</title>
        <style>
          body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
            text-align: center;
            padding-top: 80px;
          }
          h1 { font-size: 32px; }
          h2 { font-size: 24px; color: #555; }
          p { font-size: 20px; font-style: italic; color: #333; }
        </style>
      </head>
      <body>
        <h1>Earl Justin R. Cosmod</h1>
        <h2>BSIT-NT4101</h2>
        <p>"Keep Hacking for a Better Future."</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
