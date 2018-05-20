const AXIOS_CONFIG = require('../../config/axios');
const axios = require('axios').create(AXIOS_CONFIG);

const GROUP_ID = require('../../config/keys').GROUP_ID;

// Algorithm specs:
// LMFAO! > LMFAO > LMAO! = lmfao > LMAO > lmao! > lmao
// LOL = lol = 1 like

// GET most liked messages for 'groupId' in period 'period'
// 'period' must be 'day', 'week' or 'month'
function getLeaderboard(groupId, period = 'month') {
  if (period != 'day' || period != 'week' || period != 'month') {
    period = 'month';
  }

  axios
    .get(`/groups/${groupId}/likes?period=${period}`)
    .then(response => {
      const leaderboard = response.data.response.messages;
      console.log(leaderboard);
    })
    .catch(err => console.log(err));
}

function getMessageScore(messageId) {}
