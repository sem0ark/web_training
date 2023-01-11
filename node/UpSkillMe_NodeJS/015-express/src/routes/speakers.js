const express = require('express');
const router = express.Router();

module.exports = params => {

  const { speakersService } = params;

  router.get('/', async (req, res) => {
    const speakers = await speakersService.getList();
    return res.json(speakers);
  });

  router.get('/:shortname', (req, res) => {
    // here we are using the parameter
    // we can get the values from request.params
    return res.send(`Detail page of ${req.params.shortname}`);
  });

  return router;
};
