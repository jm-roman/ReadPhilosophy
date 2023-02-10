const models = require('../models/models');

const controllers = {};

// Text Controller

controllers.getText = (req, res, next) => {
  try {
    models.Text.find({}).then((results) => {
      res.locals.text = results;
      next();
    });
  } catch (e) {
    console.log('controller.getTexts: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.getText. Check server logs for more details.',
    });
  }
};

// Prompt Controller

controllers.getPrompts = (req, res, next) => {
  try {
    models.Prompt.find({}).then((results) => {
      res.locals.prompts = results;
      next();
    });
  } catch (e) {
    console.log('controller.getPrompts: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.getPrompts. Check server logs for more details.',
    });
  }
};

/// Note Controllers

controllers.getNotes = (req, res, next) => {
  try {
    models.Note.find({}).then((results) => {
      res.locals.notes = results;
      next();
    });
  } catch (e) {
    console.log('controller.getNotes: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.getNotes. Check server logs for more details.',
    });
  }
};

controllers.createNote = (req, res, next) => {
  const { note } = req.body;
  try {
    models.Note.create(note).then((results) => {
      res.locals.notes = results;
      next();
    });
  } catch (e) {
    console.log('controller.createNote: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.createNote. Check server logs for more details.',
    });
  }
};

controllers.deleteNote = (req, res, next) => {
  console.log(req.body);
  try {
    models.Note.findOneAndDelete({ note: req.body }).then(() => next());
  } catch (e) {
    console.log('controller.deleteNote: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.deleteNote. Check server logs for more details.',
    });
  }
};

// User Controllers

controllers.createUser = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const newUser = await new models.User({ username, password });
    newUser.save();
    res.locals.user = newUser;
    next();
  } catch (e) {
    console.log('controller.createUser: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.createUser. Check server logs for more details.',
    });
  }
};

// verify user's username and password
controllers.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  try {
    models.User.findOne({ username, password }).then(() => next());
  } catch (e) {
    console.log('controller.createUser: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in controller.createUser. Check server logs for more details.',
    });
  }
};

module.exports = controllers;
