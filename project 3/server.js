const express = require('express');
const cors = require('cors');
const { parseDate, formatResponse } = require('./utils/dateUtils');

const app = express();
const port = 3000;

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date;
  const date = parseDate(dateParam);
  const response = formatResponse(date);
  res.json(JSON.parse(response.body));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});