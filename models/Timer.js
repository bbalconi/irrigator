var mongoose = require("mongoose");
var TimerSchema = new mongoose.Schema({
  startTime: Date,
  runTime: Number,
});

module.exports = mongoose.model('Timer', TimerSchema);