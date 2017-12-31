const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      // user comming back from google
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);
/* internal identifiar by google asking
google to give us information about profile and email
*/
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// clientID 328377180571-tgqhuhqfnfmiri6elnb7gma738t5f3dp.apps.googleusercontent.com
// clientSecret 0OPFQr4SsSyJsQJqSdeApD4y

// Route handler with express
// app.get("/", (req, res) => {
//   res.send({ hi: "there" });
// });
/**
 * Use it in production enviroment or in development
 */

const PORT = process.env.PORT || 5000;
app.listen(PORT);
