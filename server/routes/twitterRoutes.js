const passport = require('passport')

module.exports = (app) => {
  app.get(
    '/auth/twitter',
    passport.authenticate('twitter', {
      scope: ['profile', 'email']
    })
  )

  app.get('/auth/twitter/callback', passport.authenticate('twitter'))
}
