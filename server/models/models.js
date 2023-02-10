const mongoose = require('mongoose');

// build schemata for texts, prompts, and notes
const textSchema = new mongoose.Schema({
  paraNum: { type: Number, required: true },
  text: { type: String, required: true },
  original: String,
});

const promptSchema = new mongoose.Schema({
  paraNum: { type: Number, required: true },
  text: { type: String, required: true },
  original: String,
});

const noteSchema = new mongoose.Schema({
  paraNum: { type: Number, required: true },
  text: { type: String, required: true },
  original: String,
});

const Text = mongoose.model('text', textSchema);
const Prompt = mongoose.model('prompt', promptSchema);
const Note = mongoose.model('note', noteSchema);

module.exports = {
  Text,
  Prompt,
  Note,
};
