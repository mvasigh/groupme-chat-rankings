const express = require('express'),
  router = express.Router(),
  GroupChat = require('../../lib/GroupChat');

const GROUP_ID = process.env.GROUP_ID || require('../../config/keys').GROUP_ID;
const groupChat = new GroupChat(GROUP_ID);

router.get('/', async (req, res) => {
  const period = req.query.period || 'week';
  const rankings = await groupChat.getRankings(period);
  res.json(rankings);
});

module.exports = router;
