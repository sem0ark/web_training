const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./members')
const app = express();

// const logger = require('./middleware/logger')

// init middleware
// app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Homepage route
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Member App',
    members
  })
});

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));


//// don't need to do this
// app.get('/', (req, res) => {
//   // res.send('<h1>Hello world</h1>');
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });


// Members API routes
app.use('/api/members', require('./routs/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port: ${PORT}`));
