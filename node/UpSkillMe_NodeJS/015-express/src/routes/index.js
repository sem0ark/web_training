const express = require('express');
const router = express.Router();

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res, next) => {
    try {
      // if(!req.session.visitCount) { req.session.visitCount = 0; }
      // Keeps the data in Cookies
      // req.session.visitCount += 1;
      // console.log(`Number of visits: ${req.session.visitCount}`);
      const artwork = await speakersService.getAllArtwork();
      const topSpeakers = await speakersService.getList();
      // console.log(topSpeakers);
      return res.render('layout/index', {
        pageTitle: 'Welcome',
        template: 'index',
        topSpeakers,
        artwork,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};

// so here we've created index.js sub-route
//   we are using an arrow function to create some possible
//   changes to the router as a parameters, it is a Constructor pattern all in all
