const express = require('express');
const path = require('path');


const app = express();

const logger = require('./middleware/logger')

// init middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//// don't need to do this
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello world</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API rout
app.use('/api/members', require('./routs/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
