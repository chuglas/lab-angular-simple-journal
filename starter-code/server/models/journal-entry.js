const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const journalSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  title: {
    type: String,
    required: [true, 'Please enter a title']
  },
  content: {
    type: String,
    required: [true, 'Please enter content']
  }
});

module.exports = mongoose.model('JournalEntry', journalSchema);
