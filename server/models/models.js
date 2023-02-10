const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

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

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre('save', async (next) => {
  try {
    const hashedPassword = await bcrypt.hash(this.password, SALT_WORK_FACTOR);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});

const Text = mongoose.model('text', textSchema);
const Prompt = mongoose.model('prompt', promptSchema);
const Note = mongoose.model('note', noteSchema);
const User = mongoose.model('user', userSchema);

module.exports = {
  Text,
  Prompt,
  Note,
  User,
};
