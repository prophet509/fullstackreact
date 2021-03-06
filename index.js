const  express = require('express');
const app =  express();
const  keys = require('./config/keys');
const  mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const  passport = require('passport');
const bodyPasser = require('body-parser');



require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

app.get('/',(req,res) => {
    res.send({
        hi:'I love bich tram'
    });
});

app.use(bodyPasser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
      })
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
// 373404414551-8886rfs6bbvjf1qbkb8if3tpn591jvcc.apps.googleusercontent.com
//h3l1803UJGKcecS-VZGglN9y
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const PORT = process.env.PORT || 5000;
app.listen(PORT);