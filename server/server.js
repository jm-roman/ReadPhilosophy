const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;
const fileController = require('./controllers/fileController');
const controllers = require('./controllers/controllers');

const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://johnroman:aJD4oymgHZBNz9rG@cluster0.lydtnnb.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // sets the name of the DB that our collections are part of
    dbName: 'readphilosophy',
  })
  .then(() => console.log('Connected to MongoDB, readphilosophy'))
  .catch((err) => console.log(err));

// needed to fix fetching problem in react
app.use(cors());

// listens, confirms connection
app.listen(PORT, () => {
  console.log(`Success! Your application is running on port ${PORT}.`);
});

// parses request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles requests for static files
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// // define route handlers
app.get('/text', controllers.getText, (req, res) => {
  res.status(200).json(res.locals.text);
});

app.get('/prompts', controllers.getPrompts, (req, res) => {
  res.status(200).json(res.locals.prompts);
});

app.get('/notes', controllers.getNotes, (req, res) => {
  res.status(200).json(res.locals.notes);
});

app.post('/notes', controllers.createNote, (req, res) => {
  res.status(200).json(res.locals.notes);
});

app.delete('/notes', controllers.deleteNote, (req, res) => {
  res.status(200).json(res.locals.notes);
});

module.exports = app;
