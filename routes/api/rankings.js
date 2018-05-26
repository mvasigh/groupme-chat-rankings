const express = require('express'),
  router = express.Router(),
  GroupChat = require('../../js/GroupChat');

const GROUP_ID = process.env.GROUP_ID || require('../../config/keys').GROUP_ID;
const SCORE_CONFIG = require('../../config/scores');

router.get('/', (req, res) => {
  const period = req.query.period || 'week';
  GroupChat.getRankings(GROUP_ID, SCORE_CONFIG, period).then(data =>
    Promise.all(data).then(rankings => {
      res.json(rankings.sort((a, b) => b.score - a.score));
    })
  );
});

module.exports = router;
