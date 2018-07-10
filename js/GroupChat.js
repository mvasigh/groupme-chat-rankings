const CHAT_CONFIG = require('../config/chat');
const AXIOS_CONFIG = require('../config/axios');
const axios = require('axios').create(AXIOS_CONFIG);

const Message = require('./Message');

class GroupChat {
  constructor(groupId) {
    this.groupId = groupId;
  }

  async getLeaderboard(
    groupId = this.groupId,
    period = CHAT_CONFIG.periods[0]
  ) {
    period = CHAT_CONFIG.includes(period) ? period : CHAT_CONFIG.periods[0];
    const leaderboard = await axios
      .get(`/groups/${groupId}/likes?period=${period}`)
      .then(response => response.data.response.messages)
      .then(messages => messages.filter(msg => msg.name != 'GroupMe'))
      .catch(err => console.log(err));
    return leaderboard;
  }

  // getRankings
}

function getLeaderboard(groupId, period = CHAT_CONFIG.periods[0]) {
  const periodOpts = ['day', 'week', 'month'];
  if (!periodOpts.includes(period)) period = 'week';

  return axios
    .get(`/groups/${groupId}/likes?period=${period}`)
    .then(response => response.data.response.messages)
    .then(messages => messages.filter(msg => msg.name != 'GroupMe'))
    .catch(err => console.log(err));
}

function getMessageReplies(messageId, groupId) {
  return axios
    .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
    .then(response => response.data.response.messages)
    .catch(err => console.log(err));
}

function getMessageScore(message, scoreConfig) {
  let score = scoreConfig.like * message.favorited_by.length;
  const triggers = Object.keys(scoreConfig.triggers);
  // TODO: Use RegExp for this. Maybe change the triggers config to regex strings
  // and create a new regexp object for each trigger here

  // Use String.prototype.match() to match against regex.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
  return getMessageReplies(message.id, message.group_id)
    .then(replies => {
      replies.forEach(reply => {
        triggers.forEach(trigger => {
          if (reply.text && reply.text.includes(trigger)) {
            score += scoreConfig.triggers[trigger];
          }
        });
      });
      return score;
    })
    .catch(e => console.log(e));
}

function getRankings(groupId, scoreConfig, period = 'week') {
  return getLeaderboard(groupId, period).then(entries => {
    return entries.map(entry => {
      return getMessageScore(entry, scoreConfig).then(score => {
        console.log({ ...entry, score });
        return { ...entry, score };
      });
    });
  });
}

module.exports = {
  getLeaderboard,
  getMessageReplies,
  getMessageScore,
  getRankings
};
