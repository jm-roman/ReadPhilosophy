const models = require('../models/models');

const controllers = {};

controllers.getText = (req, res, next) => {
  try {
    models.Text.find({}).then((results) => {
      res.locals.text = results;
      next();
    });
  } catch (e) {
    {
      console.log('controller.getTexts: ERROR: ', e);
      res.status(400).send({
        err: 'Error occurred in controller.getText. Check server logs for more details.',
      });
    }
  }
};

controllers.getPrompts = (req, res, next) => {
  try {
    models.Prompt.find({}).then((results) => {
      res.locals.prompts = results;
      next();
    });
  } catch (e) {
    {
      console.log('controller.getPrompts: ERROR: ', e);
      res.status(400).send({
        err: 'Error occurred in controller.getPrompts. Check server logs for more details.',
      });
    }
  }
};

controllers.getNotes = (req, res, next) => {
  try {
    models.Note.find({}).then((results) => {
      res.locals.notes = results;
      next();
    });
  } catch (e) {
    {
      console.log('controller.getNotes: ERROR: ', e);
      res.status(400).send({
        err: 'Error occurred in controller.getNotes. Check server logs for more details.',
      });
    }
  }
};

controllers.createNote = (req, res, next) => {
  try {
    models.Note.create(req.body).then((results) => {
      res.locals.notes = results;
      next();
    });
  } catch (e) {
    {
      console.log('controller.getNotes: ERROR: ', e);
      res.status(400).send({
        err: 'Error occurred in controller.getNotes. Check server logs for more details.',
      });
    }
  }
};

controllers.deleteNote = (req, res, next) => {
  console.log(req.body);
  try {
    models.Note.findOneAndDelete({ note: req.body }).then(() => next());
  } catch (e) {
    {
      console.log('controller.getNotes: ERROR: ', e);
      res.status(400).send({
        err: 'Error occurred in controller.getNotes. Check server logs for more details.',
      });
    }
  }
};

module.exports = controllers;
