const SCORE_CONFIG = require('../config/scores'),
  AXIOS_CONFIG = require('../config/axios'),
  axios = require('axios').create(AXIOS_CONFIG),
  Algo = require('./Algo');

class GroupChat {
  constructor(groupId, scoreConfig = SCORE_CONFIG) {
    this.groupId = groupId;
    this.scoreConfig = scoreConfig;
  }

  async getLeaderboard(period = 'week') {
    const periods = ['day', 'week', 'month'];
    if (!periods.includes(period)) {
      period = 'week';
    }
    const leaderboard = await axios
      .get(`/groups/${this.groupId}/likes?period=${period}`)
      .then(response => response.data.response.messages)
      .then(messages => messages.filter(msg => msg.name != 'GroupMe'));
    return leaderboard;
  }

  async getReplies(messageId, groupId = this.groupId) {
    if (!messageId) {
      return;
    }
    return axios
      .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
      .then(response => response.data.response.messages);
  }

  async getRankings(period = 'week') {
    const leaderboard = await this.getLeaderboard(period);
    const rankings = await leaderboard.map(async message => {
      const replies = await this.getReplies(message.id);
      return { ...message, replies: replies.map(reply => reply.text) };
    });
    return rankings;

    // return rankings
    //   .map(msg => {
    //     const message = { message: msg };
    //     const score = 20;
    //     return { ...message, score };
    //   })
    //   .sort((a, b) => b.score - a.score);
  }
}

module.exports = GroupChat;
