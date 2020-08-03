const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const cookieSession = require("cookie-session");
const passport = require("passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, //30 days in miliseconds
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/hello", (req, res) => {
  res.send({ eh: "asjdh" });
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Port running at ${port}`));
