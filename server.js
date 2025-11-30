const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
res.send(`
<html>
<head>
<title>Simple Backend Page</title>
<style>
body {
background-color: #e3f2fd;
font-family: Arial, sans-serif;
text-align: center;
padding-top: 100px;
}
h1 { font-size: 32px; }
p { font-size: 20px; }
</style>
</head>
<body>
<h1>Earl Cosmod - BSIT Section</h1>
<p>"Success is built on consistency, not intensity."</p>
</body>
</html>
`);
});


app.listen(PORT, () => {
console.log(`Server running on http://localhost:${PORT}`);
});