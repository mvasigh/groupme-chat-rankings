const ACCESS_TOKEN = require('./keys').ACCESS_TOKEN;

module.exports = {
  baseURL: 'https://api.groupme.com/v3',
  headers: {
    'X-Access-Token': ACCESS_TOKEN
  }
};
