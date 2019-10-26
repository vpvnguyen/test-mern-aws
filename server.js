const express = require('express');
const app = express();
const passportSetup = require('./config/passport-setup');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/env_config');
const apiRoutes = require('./routes/api-routes');
const authRoutes = require('./routes/auth-routes');
const cors = require('cors');
const path = require('path');

//node server port 
const PORT = process.env.PORT || 5000;


//express middleware 
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//use cookie encoder to save cookies for one day 
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

//use development files 
// app.use(express.static('development'))

//setting cors headers to allow react app to hit REST API 
// app.use(
//     cors({
//       origin: "http://localhost:3000", // allow to server to accept request from different origin
//       methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//       credentials: true // allow session cookie from browser to pass through
//     })
//   );

//going to need to add an authcheck here




// / Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Define API routes here
//auth routes
app.use('/auth', authRoutes);

//api routes
app.use('/api', apiRoutes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  // res.send('yo')
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// //displays dummy html for development only
// app.get('/', (req, res) => {
//     res.send(express.static('/index.html'))
// }); 

//making app listen on Port
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`app listening on port ${PORT}`);
}); 