const AXIOS_CONFIG = require('../../config/axios');
const axios = require('axios').create(AXIOS_CONFIG);

const GROUP_ID = require('../../config/keys').GROUP_ID;

const MESSAGE_ID = '152467666540647594';

// GET most liked messages for 'groupId' in period 'period'
// 'period' must be 'day', 'week' or 'month'
// Returns a promise that resolves to an array of messages
async function getLeaderboard(groupId, period = 'month') {
  if (period != 'day' || period != 'week' || period != 'month') {
    period = 'month';
  }

  return await axios
    .get(`/groups/${groupId}/likes?period=${period}`)
    .then(response => response.data.response.messages)
    .catch(err => console.log(err));
}

// Calculate message score for 'message' (object) in 'groupId' (string)
async function getMessageReplies(messageId, groupId) {
  return await axios
    .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
    .then(response => response.data.response.messages)
    .catch(err => console.log(err));
}

// Awaits resolution of getLeaderboard and getMessageReplies and prints
// each leaderboard entry with an array of replies
// TODO: calculate score for each leaderboard entry
const test = async () => {
  const leaderboard = await getLeaderboard(GROUP_ID);

  if (leaderboard) {
    leaderboard.forEach(async entry => {
      const replies = await getMessageReplies(entry.id, GROUP_ID);
      if (replies) {
        console.log('Entry ID: ', entry.id);
        console.log('Replies:');
        replies.forEach(reply => console.log(reply.id));
      }
    });
  }
};

test();

