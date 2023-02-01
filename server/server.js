const path = require('path');
const express = require('express');

const app = express();

const PORT = 3000;

// parses request body
app.use(express.json());

// handles requests for static files
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// define route handlers
app.get(
  'data/text',
  fileController.getText,
  (req, res) => res.status(200).json(res.locals)
  // eslint-disable-next-line function-paren-newline
);

app.listen(3000);
