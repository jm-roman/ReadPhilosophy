const fs = require('fs');
const path = require('path');

const fileController = {};

fileController.getText = (req, res, next) => {
  try {
    const results = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/text.json'), 'UTF-8')
    );
    res.locals = results;
    next();
  } catch (e) {
    console.log('fileController.getText: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in fileController.getText. Check server logs for more details.',
    });
  }
};

fileController.getPrompts = (req, res, next) => {
  try {
    const results = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/prompts.json'), 'UTF-8')
    );
    res.locals = results;
    next();
  } catch (e) {
    console.log('fileController.getText: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in fileController.getPrompts. Check server logs for more details.',
    });
  }
};

module.exports = fileController;
