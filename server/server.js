const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

const fileController = require('./controllers/fileController');

app.use(cors());

app.listen(PORT, () => {
  console.log(`Success! Your application is running on port ${PORT}.`);
});

// parses request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles requests for static files
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  console.log('hello');
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// // define route handlers
app.get('/text', fileController.getText, (req, res) => {
  res.status(200).json(res.locals);
});

app.get('/prompts', fileController.getPrompts, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = app;
