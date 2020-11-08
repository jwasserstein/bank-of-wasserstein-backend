require('dotenv').config();
const express = require('express'),
	  app     = express(),
	  bodyParser = require('body-parser'),
	  cors       = require('cors'),
	  authRoutes = require('./routes/auth'),
	  transactionRoutes = require('./routes/transactions');

app.use(cors());
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
app.use('/api/transactions/:userId', transactionRoutes);

app.listen(3000, () => console.log('Listening on port 3000'));