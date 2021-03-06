const express = require('express'),
  path = require('path'),
  rankingsRoutes = require('./routes/api/rankings');

const app = express();

// APP CONFIG
// ==========
app.use(express.static(path.join(__dirname, 'client/build')));
app.set('view engine', 'ejs');

// ROUTES CONFIG
// =============
app.use('/api/rankings', rankingsRoutes);
app.get('/', (req, res) => res.redirect('/api/rankings'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running');
});
