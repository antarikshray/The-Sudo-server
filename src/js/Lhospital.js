var ROSLIB = require('roslib');

var Lhospital = function(){
    var Lopitol = new ROSLIB.Topic({
      ros : window.ros,
      name : '/hospitalDetail',
      messageType : 'sih/Details'
    });
    
    Lopitol.subscribe(function(message) {
      window.hospital.push(<div classsName="row">
       </div>);
    });
}

module.exports.Lhospital = Lhospital;