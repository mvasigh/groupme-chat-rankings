const SCORE_CONFIG = require('../config/scores'),
  AXIOS_CONFIG = require('../config/axios'),
  axios = require('axios').create(AXIOS_CONFIG),
  Message = require('./Message');

class GroupChat {
  constructor(groupId, scoreConfig = SCORE_CONFIG) {
    this.state = { groupId, scoreConfig };
  }

  async getLeaderboard(period = 'week') {
    const periods = ['day', 'week', 'month'];
    if (!periods.includes(period)) {
      period = 'week';
    }
    const leaderboard = await axios
      .get(`/groups/${this.state.groupId}/likes?period=${period}`)
      .then(response => response.data.response.messages)
      .then(messages => messages.filter(msg => msg.name != 'GroupMe'));
    return leaderboard;
  }

  async getRankings(period = 'week') {
    const rankings = await this.getLeaderboard(period);

    return rankings
      .map(msg => {
        const message = new Message(msg);
        // placeholder score;
        const score = 20;
        return { ...message, score };
      })
      .sort((a, b) => b.score - a.score);
  }
}

module.exports = GroupChat;
