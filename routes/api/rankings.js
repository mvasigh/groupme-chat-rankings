const express = require('express'),
  router = express.Router(),
  _ = require('lodash'),
  GroupChat = require('../../lib/GroupChat'),
  Algo = require('../../lib/Algo');

const GROUP_ID = process.env.GROUP_ID || require('../../config/keys').GROUP_ID;
const groupChat = new GroupChat(GROUP_ID);

router.get('/', async (req, res) => {
  const period = req.query.period || 'week';
  const leaderboard = await groupChat.getRankings(period);
  Promise.all(leaderboard).then(messages => {
    const rankings = messages.map(message => Algo.getScoredMessage(message));
    const sorted = _.sortBy(rankings, 'score').reverse();
    res.json(sorted);
  });
});

module.exports = router;
