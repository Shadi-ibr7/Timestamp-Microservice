const parseDate = (dateStr) => {
  if (!dateStr) {
    return new Date();
  }
  
  // Handle Unix timestamp (milliseconds)
  if (/^\d+$/.test(dateStr)) {
    return new Date(parseInt(dateStr));
  }
  
  // Handle date string
  const parsedDate = new Date(dateStr);
  if (parsedDate.toString() === 'Invalid Date') {
    return parsedDate;
  }
  
  return parsedDate;
};

const formatResponse = (date) => {
  if (date.toString() === 'Invalid Date') {
    return { error: 'Invalid Date' };
  }

  return {
    unix: date.getTime(),
    utc: date.toUTCString()
  };
};

module.exports = {
  parseDate,
  formatResponse
};