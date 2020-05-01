const Auth0Strategy = require("passport-auth0");
const passport = require("passport");

const strategy = new ({
  domain: "express-starter-kit.auth0.com",
  clientID: "06gakYPu7dEebKy2RDPBamB7WetqDX9P",
  // TODO: Replace this with the client secret for my own app
  clientSecret:
    "33jz33d_0j7MiuH7khFahtND7UHXCyF0M0Sfo0swLWqO6kjZvXKApZFQI1MLbiyV",
  callbackURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/callback"
      : // TODO: Replace this with the with my own heroku app URL
        "https://expresspanel.herokuapp.com/callback",
  state: true,
},
function (accessToken, refreshToken, extraParams, profile, done) {
  return done(null, profile);
})();
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(strategy);
