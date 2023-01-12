const express = require('express');
const router = express.Router();

module.exports = (params) => {
  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const artwork = await speakersService.getAllArtwork();
    const speakers = await speakersService.getList();
    res.render('layout/index', { pageTitle: 'Speakers', template: 'speakers', speakers, artwork });
  });

  router.get('/:shortname', async (req, res) => {
    // here we are using the parameter
    // we can get the values from request.params
    const artwork = await speakersService.getArtworkForSpeaker(req.params.shortname);
    const speaker = await speakersService.getSpeaker(req.params.shortname);
    res.render('layout/index', {
      pageTitle: 'Speakers',
      template: 'speakers-detail',
      speaker,
      artwork,
    });
  });

  return router;
};
