const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

// Set static folder
app.use(express.static('public'));

// Rate limiter
const limit = rateLimit({
  windowMs: 10*60*1000, // 10 minutes
  max: 100,
});

app.use(limit);
app.set('trust proxy', 1);

// routes
app.use('/api', require('./routes/index'));

app.use(cors());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));