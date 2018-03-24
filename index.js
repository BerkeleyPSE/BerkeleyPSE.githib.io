// node modules
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

/* mLab MongoDB databases */
require("./databases/application");
require("./databases/static");

// local imports
const keys = require("./config/keys.js");

// start express server instance
const app = express();

/* models */
require("./models/Application");
require("./models/Brother");
require("./models/Fulltime");
require("./models/Internship");
require("./models/Regform");

/* middleware */
app.use(bodyParser.json());

/* routes */
require("./routes/applicationRoutes")(app);
require("./routes/brotherRoutes")(app);
require("./routes/fulltimeRoutes")(app);
require("./routes/internshipRoutes")(app);
require("./routes/regformRoutes")(app);

/* start the server */
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build/", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
