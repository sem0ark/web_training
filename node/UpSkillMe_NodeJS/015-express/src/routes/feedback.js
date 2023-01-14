const express = require('express');

const { check, validationResult } = require('express-validator');
// We can't trust the data from the user, so we need to check any posted data from the use
//   with something like Express validator to ensure that the data doesn't contain any malware
//   and is written proparly

const router = express.Router();

const validations = [
  // Here we've added a chaining of middleware
  //   so here we are validation all the data first
  //   and only then we are handling the data from the user

  // Any message we would later show to the user
  // this technique is also known as *Flash Cards*
  check('name')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('A name is required'),

  check('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('A valid email address is required'),

  check('title')
    .trim()
    .isLength({ min: 3 })
    .escape()
    .withMessage('A title is required'),
  
  check('message')
    .trim()
    .isLength({ min: 5 })
    .escape()
    .withMessage('A message is required'),
];

module.exports = (params) => {
  const { feedbackService } = params;

  router.get('/', async (req, res, next) => {
    try {
      const feedback = await feedbackService.getList();
      const errors = req.session.feedback ? req.session.feedback.errors : false;
      const successMessage = req.session.feedback ? req.session.feedback.message : false;
      req.session.feedback = {};

      return res.render('layout/index', {
        pageTitle: 'Feedback',
        template: 'feedback',
        feedback,
        errors,
        successMessage,
      });
    } catch (err) {
      return next(err);
    }
  });

  router.post(
    '/', validations,
    async (req, res, next) => {
      try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
          req.session.feedback = {
            errors: errors.array(),
          };
          return res.redirect('/feedback');
        }
        const {name, email, title, message} = req.body;

        await feedbackService.addEntry(name, email, title, message);

        req.session.feedback = {
          message: 'Thank you for your feedback!'
        }

        return res.redirect('/feedback');
      } catch (err) {
        return next(err);
      }
    }
  );

  router.post('/api', validations, async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if(!errors.isEmpty()) {
        return res.json({errors : errors.array()});
      }

      const {name, email, title, message} = req.body;
      await feedbackService.addEntry(name, email, title, message);
      const feedback = await feedbackService.getList();
      return res.json({ feedback, message: 'Thank you for your feedback!' });
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
