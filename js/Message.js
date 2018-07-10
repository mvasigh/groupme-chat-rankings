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


module.exports = Message;
