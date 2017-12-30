const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

passport.use(new GoogleStrategy());

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
