const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/:date?', (req, res) => {
  let date;
  const paramDate = req.params.date;

  if (!paramDate) {
    // If no date provided, use current date
    date = new Date();
  } else {
    // Check if it's a unix timestamp (number)
    if (/^\d+$/.test(paramDate)) {
      date = new Date(parseInt(paramDate));
    } else {
      date = new Date(paramDate);
    }
  }

  // Check if date is valid
  if (date.toString() === 'Invalid Date') {
    res.json({ error: 'Invalid Date' });
    return;
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});