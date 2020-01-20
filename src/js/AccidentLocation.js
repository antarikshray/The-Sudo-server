var ROSLIB = require('roslib');

var setupServer = function(){
  console.log("server started");
    var accidentInit = new ROSLIB.Topic({
      ros : window.ros,
      name : '/lookForAccidents',
      messageType : 'jetson/emergencyMessage'
    });
    
    accidentInit.subscribe(function(message) {
      window.lat=message.lat;
      window.lon=message.lon;
      window.ID=message.ID;
      window.ctr++;
    });
}

module.exports.setupServer = setupServer;