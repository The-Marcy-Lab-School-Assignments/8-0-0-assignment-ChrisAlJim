const express = require('express');
const app = express();

// controllers
// const serveIndex = (req, res, next) => {
//   res.sendFile(__dirname + '/index.html');
// }
const servePickles = (req, res, next) => {
  res.send('<h1>PICKLES</h1>');
}
const serveNumber15 = (req, res, next) => {
  res.send('<h2>Number 15<h2>');
}
const serveData = (req, res, next) => {
  const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
  res.send(data);
}
const serveGreeting = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`What's up ${name}`);
}

const serveBruh = (req, res, next) => {
  res.send('Bruh');
}

// endpoints
app.get('/about', servePickles);
app.get('/number15', serveNumber15);
app.get('/api/data', serveData);
app.get('/api/greeting', serveGreeting)
app.get('*',serveBruh ) 

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 