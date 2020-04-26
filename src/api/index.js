import express from 'express';

// Initialize the app
let app = express();

// Send timestamp
app.get('/api/timestamp', (req, res) => {
  return res.json({
    timestamp: (new Date()).getTime(),
  });
});
export default app;
