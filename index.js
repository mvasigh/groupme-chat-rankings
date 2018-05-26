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

app.listen(5000, () => {
  console.log('Server is running');
});
