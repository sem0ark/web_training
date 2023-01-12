const express = require('express');
const router = express.Router();

module.exports = params => {

  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    res.render('layout/index', { pageTitle: 'Speakers', template: 'speakers', speakers });
  });

  router.get('/:shortname', async (req, res) => {
    // here we are using the parameter
    // we can get the values from request.params

    const speaker = await speakersService.getSpeaker();
    return res.send(`Detail page of ${req.params.shortname}`);
  });

  return router;
};
