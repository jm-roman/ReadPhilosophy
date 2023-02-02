const fs = require('fs');
const path = require('path');

const fileController = {};

fileController.getText = (req, res, next) => {
  try {
    const results = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/text.json'), 'UTF-8')
    );
    res.locals.text = results;
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
    res.locals.prompts = results;
    next();
  } catch (e) {
    console.log('fileController.getText: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in fileController.getPrompts. Check server logs for more details.',
    });
  }
};

fileController.getNotes = (req, res, next) => {
  try {
    const results = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, '../data/notes.json'), 'UTF-8')
    );
    res.locals.notes = results;
    next();
  } catch (e) {
    console.log('fileController.getText: ERROR: ', e);
    res.status(400).send({
      err: 'Error occurred in fileController.getPrompts. Check server logs for more details.',
    });
  }
};

// fileController.makeNote = (req, res, next) => {
//   // use writeFileSync()
//     try {
//       fs.readFile(path.resolve(__dirname, '../data/characters.json'), 'UTF-8')
//       .then((data) => {
//         const parsedData = JSON.parse(data);
//       fs.writeFile(
//         path.resolve(__dirname, '../data/notes.json'),
//         JSON.stringify(parsedData),
//         'UTF-8'
//       ).then(() => {
//         if (res.locals.updates) res.locals.updatedCharacter = finalCharacter;
//         else res.locals.newCharacter = finalCharacter;
//         return next();
//     } catch (e) {
//       console.log('fileController.makeNote: ERROR: ', e);
//       res.status(400).send({
//         err: 'Error occurred in fileController.makeNote. Check server logs for more details.',
//       })
//     }

// };

module.exports = fileController;
