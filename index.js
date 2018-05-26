const express = require('express'),
  rankingsRoutes = require('./routes/api/rankings');

const app = express();

// APP CONFIG
// ==========
app.use(express.static('public'));
app.set('view engine', 'ejs');

// ROUTES CONFIG
// =============
app.use('/api/rankings', rankingsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is running');
});
