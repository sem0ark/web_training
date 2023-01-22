const express = require('express');
const UserModel = require('../../models/UserModel');

const router = express.Router();

module.exports = () => {
  router.get('/registration', (req, res) => res.render('users/registration', { success: req.query.success }));

  router.post('/registration', async (req, res, next) => {
    // We would implement the user creation logic here,
    // but we can always dump it into another file as a service
    try {
      const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await user.save(); // the user will be stored in the DB
      if (savedUser) return res.redirect('/users/registration?success=true');
      return next(new Error('failed to save user for unknown reasons'));
    } catch(err) {
      return next(err);
    }
  });

  router.get('/account', (req, res) => res.render('users/account', { user: req.user }));

  return router;
};
