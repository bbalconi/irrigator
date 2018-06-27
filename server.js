let express = require('express');
let http = require('http');
let app = require('express')();
let server = require('http').Server(app);
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let path = require('path');
const io = require('socket.io');
const DarkSky = require('dark-sky');
const schedule = require('node-schedule')
let mongoose = require('mongoose');
let uriUtil = require('mongodb-uri');
let Timer = require('./models/Timer');
require('dotenv').config();

let mongodbUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@ds153380.mlab.com:53380/irrigator`

const darksky = new DarkSky(process.env.DARK_SKY);
const allowedOrigins = "http://localhost:*";
const ioServer = io(server, {
  origins: allowedOrigins
})

var mongooseUri = uriUtil.formatMongoose(mongodbUri);
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

mongoose.connect(mongooseUri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connected to mLab!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('./front-end/build'));
} else {
  app.use(express.static('public'));
}

app.post('/socketUrl', (req, res)=>{
  if (process.env.PORT){
    res.json('https://coffee-pot-pi.herokuapp.com:');
  } else {
    res.json('http://localhost:5000')
  }
});


app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/locationTest', (req, res, next) => {
  const result = darksky
    .coordinates({ 
      lat: 42.3242516,
      lng: -83.26521699999999 
    })
    .exclude('minutely')
    .get()
    .then((data) => {
      res.json(data);
    })
    .catch(console.log);
  })

app.post('/saveSettings', (req, res, next) => {
  let newTime = new Timer();
  newTime.startTime = req.body.startTime,
  newTime.runTime = req.body.runTime;
  newTime.save((err, timeSaved) => {
    if (err) {
      next(err)
    } else {
      res.json(timeSaved);
    };
  });
});

ioServer.on('connection', (client) => {
  console.log('connected to ioServer! id: ' + client.id)

  client.on('socketsOn', pipeline => {
    console.log(pipeline);
    client.join(pipeline);
  })
})


app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'build', 'index.html'));
});

var port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log('listening on port ' + port);
});    