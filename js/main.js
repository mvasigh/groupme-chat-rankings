const GROUP_ID = require('../config/keys').GROUP_ID;
const SCORE_CONFIG = require('../config/scores');

const chat = require('./modules/chat');

const test = async () => {
  const leaderboard = await chat.getLeaderboard(GROUP_ID, 'week');
  if (leaderboard) {
    leaderboard.forEach(async message => {
      const score = await chat.getMessageScore(message, SCORE_CONFIG);
      console.log(score);
    });
  }
};

test();
