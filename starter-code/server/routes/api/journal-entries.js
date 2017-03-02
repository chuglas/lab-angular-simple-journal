const express       = require('express');
const router        = express.Router();
const mongoose = require('mongoose');

const JournalEntry = require('../../models/journal-entry');


/* GET entries listing. */

router.get('/', (req, res, next) => {
  JournalEntry.find({})
    .exec((err, JournalEntry) => {
      if (err) {
        return res.send(err);
      }
      return res.json(JournalEntry);
    });
});


/* GET a single Entry. */
router.get('/entry/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }
  JournalEntry.findById(req.params.id, (err, entry) => {
      if (err) {
        return res.send(err);
      }
      return res.json(entry);
    });
});

/* ADD a single Entry. */

/* CREATE a new Phone. */
router.post('/', (req, res) => {
  const entry = new JournalEntry({
  	title: req.body.title,
    date: new Date(),
    content: req.body.content
  });

  entry.save((err) => {
    if (err) {
      return res.send(err);
    }

    return res.json({ message: 'New Entry created!' });
  });
});




module.exports = router;
