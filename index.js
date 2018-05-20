const express = require('express'),
  router = require('./router');

const app = express();

// APP CONFIG
// ==========
app.use(express.static('public'));
app.set('view engine', 'ejs');

// ROUTES CONFIG
// =============
app.use('/', router);

app.listen(3000, () => {
  console.log('Server is running');
});
