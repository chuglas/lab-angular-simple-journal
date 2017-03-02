
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/journal-entry');

const JournalEntry = require('../models/journal-entry');


const entries = [
  {
    date: new Date(),
    title: 'Title 1',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 2',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 3',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 4',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 5',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 6',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 7',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 8',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 9',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  },
  {
    date: new Date(),
    title: 'Title 10',
    content: 'Content Content Content Content Content Content Content Content Content Content '
  }
];

JournalEntry.create(entries, (err, docs)=> {
  if(err) {throw err; }
  docs.forEach( (entry) => {
    console.log(entry.title);
  });
  mongoose.connection.close();
});
