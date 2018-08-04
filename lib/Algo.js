const SCORE_CONFIG = require('../config/scores');

class Algo {
  static getScoredMessage(message, scoreConfig = SCORE_CONFIG) {
    let total = 0;
    const { base, triggers } = scoreConfig;
    const likes = message.favorited_by.length;
    const { replies } = message;

    // Add points for likes
    total += likes * base.like;

    // Iterate over replies and check for highest scoring trigger
    const scoredReplies = replies.map(reply => {
      let replyScore = 0;
      for (let i = triggers.length - 1; i >= 0; i--) {
        const { name, pattern, score } = triggers[i];
        const matches = pattern.exec(reply);
        if (matches) {
          replyScore +=
            score * (1 + base.multiplier * (matches[0].length - name.length));
          break;
        }
      }
      return { text: reply, score: replyScore };
    });

    total += scoredReplies.reduce((sum, reply) => sum + reply.score, 0);

    return { ...message, score: total, replies: scoredReplies };
  }
}

module.exports = Algo;
