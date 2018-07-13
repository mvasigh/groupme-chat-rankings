const SCORE_CONFIG = require('../config/scores'),
  AXIOS_CONFIG = require('../config/axios'),
  axios = require('axios').create(AXIOS_CONFIG);

class Message {
  // takes a GroupMe message object
  constructor(msg) {
    this.state = { ...msg };
  }

  async getReplies(messageId = this.state.id) {
    const replies = await axios
      .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
      .then(response => response.data.response.messages);
    return replies;
  }

  async getScore(scoreConfig = SCORE_CONFIG) {
    let total = 0;
    const { base, triggers } = scoreConfig;
    const likes = this.state.favorited_by.length;
    const replies = await this.getReplies();

    // Add points for likes
    total += likes * base.like;

    // Iterate over replies and check for highest scoring trigger
    replies.forEach(reply => {
      for (let i = triggers.length; i > 0; i--) {
        const { name, pattern, score } = triggers[i];
        const matches = pattern.exec(reply.text);
        if (matches) {
          total +=
            score * (1 + base.multiplier * (matches[0].length - name.length));
          break;
        }
      }
    });

    return total;
  }
}

module.exports = Message;
