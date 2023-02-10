const path = require('path');
const express = require('express');

const app = express();
const cors = require('cors');

const PORT = 3000;
const mongoose = require('mongoose');
const controllers = require('./controllers/controllers');

require('dotenv').config();

const { MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    // sets the name of the DB that our collections are part of
    dbName: 'readphilosophy',
  })
  .then(() => console.log('Connected to MongoDB, readphilosophy'))
  .catch((err) => console.log(err));

// needed to fix fetching problem in react
app.use(cors());

// parses request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handles requests for static files
app.use('/public', express.static(path.join(__dirname, '../public')));

// TEXT ROUTES
app.get('/text', controllers.getText, (req, res) => {
  res.status(200).json(res.locals.text);
});

// PROMPTS ROUTES
app.get('/prompts', controllers.getPrompts, (req, res) => {
  res.status(200).json(res.locals.prompts);
});

// NOTES ROUTES
app.get('/notes', controllers.getNotes, (req, res) => {
  res.status(200).json(res.locals.notes);
});

app.post('/notes', controllers.createNote, (req, res) => {
  res.status(200).json(res.locals.notes);
});

app.delete('/notes', controllers.deleteNote, (req, res) => {
  res.status(200).json(res.locals.notes);
});

// LOGIN ROUTES
app.get('/login', controllers.verifyUser, (req, res) => {
  res.status(200).json();
});

// SIGNUP ROUTES
app.post('/signup', controllers.createUser, (req, res) => {
  res.status(200).json(res.locals.user);
});

// Confirms connection to PORT
app.listen(PORT, () => {
  console.log(`Success! App is running on port ${PORT}.`);
});

module.exports = app;
