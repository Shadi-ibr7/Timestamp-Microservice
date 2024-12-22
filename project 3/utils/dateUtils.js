const parseDate = (dateStr) => {
  if (!dateStr) {
    return new Date();
  }
  
  return /^\d+$/.test(dateStr) 
    ? new Date(parseInt(dateStr))
    : new Date(dateStr);
};

const formatResponse = (date) => {
  if (date.toString() === 'Invalid Date') {
    return {
      statusCode: 200,
      body: JSON.stringify({ error: 'Invalid Date' })
    };
  }

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      unix: date.getTime(),
      utc: date.toUTCString()
    })
  };
};

module.exports = {
  parseDate,
  formatResponse
};