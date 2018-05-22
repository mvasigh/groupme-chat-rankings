const SCORE_CONFIG = require('../../config/scores');
const AXIOS_CONFIG = require('../../config/axios');

const axios = require('axios').create(AXIOS_CONFIG);

// GET most liked messages for 'groupId' in period 'period'
// 'period' must be 'day', 'week' or 'month'
// Returns a promise that resolves to an array of messages
async function getLeaderboard(groupId, period = 'week') {
  if (period != 'day' || period != 'week' || period != 'month') {
    period = 'month';
  }

  return await axios
    .get(`/groups/${groupId}/likes?period=${period}`)
    .then(response => response.data.response.messages)
    .catch(err => console.log(err));
}

// Calculate message score for 'messageId' (string) in 'groupId' (string)
async function getMessageReplies(messageId, groupId) {
  return await axios
    .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
    .then(response => response.data.response.messages)
    .catch(err => console.log(err));
}

async function getMessageScore(message, config) {
  let score = config.like * message.favorited_by.length;
  const replies = await getMessageReplies(message.id, message.group_id);
  return score;
}

// Awaits resolution of getLeaderboard and getMessageReplies and prints
// each leaderboard entry with an array of replies

module.exports = { getLeaderboard, getMessageReplies, getMessageScore };
