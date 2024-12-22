const express = require('express');
const cors = require('cors');
const { parseDate, formatResponse } = require('./utils/dateUtils');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;
  const date = parseDate(dateParam);
  const response = formatResponse(date);
  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});