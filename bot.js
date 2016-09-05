var botBuilder = require('claudia-bot-builder');
var tz = require('timezone/loaded');

module.exports = botBuilder(function (request) {
  var utc = tz(Date.now());
 
  // Convert UTC time to local times
  var ny = tz(utc, '%c', 'en_US', 'America/New_York');
  var chi = tz(utc, '%c', 'en_US', 'America/Chicago');
  var den = tz(utc, '%c', 'en_US', 'America/Denver');
  var la = tz(utc, '%c', 'en_US', 'America/Los_Angeles');
  var phx = tz(utc, '%c', 'en_US', 'America/Phoenix');

  return "New York:    " + ny + 
    "\nChicago:     " + chi + 
    "\nDenver:      " + den + 
    "\nLos Angeles: " + la + 
    "\nPhoenix:     " + phx;
});

