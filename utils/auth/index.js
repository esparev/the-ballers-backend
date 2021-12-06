const passport = require('passport');
const LocalStrategy = require('./strategies/local.strategy');
// Using local passportjs strategy
passport.use(LocalStrategy);
