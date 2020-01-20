var ROSLIB = require('roslib');

var setupServer = function(){
    var accidentInit = new ROSLIB.Topic({
      ros : window.ros,
      name : '/lookForAccidents',
      messageType : 'sih/emergencyMessage'
    });
    
    accidentInit.subscribe(function(message) {
      window.lat=message.lat;
      window.lon=message.lon;
      window.ID=message.ID;
      window.ctr++;
    });
}

module.exports.setupServer = setupServer;