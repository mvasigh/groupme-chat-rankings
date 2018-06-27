const SCORE_CONFIG = require('../config/scores');
const AXIOS_CONFIG = require('../config/axios');
const axios = require('axios').create(AXIOS_CONFIG);

class Message {
  // takes a GroupMe message object
  constructor(message) {
    this.details = message;
  }

  async getReplies(
    messageId = this.details.id,
    groupId = this.details.group_id
  ) {
    const replies = await axios
      .get(`/groups/${groupId}/messages?after_id=${messageId}&limit=10`)
      .then(response => response.data.response.messages)
      .catch(err => console.log(err));
    return replies;
  }

  // getMessageScore
  async getScore(message = this.details, scoreConfig = SCORE_CONFIG) {
    // message score logic here
  }
}

module.exports = Message;
