var ROSLIB = require('roslib');

var ctr=0;

var Patient = function(){
    var patient = new ROSLIB.Topic({
		ros : window.ros,
		name : '/hospital_contact',
		messageType : 'sih/Details'
    });
    
    patient.subscribe(function(message) {
        // console.log(message);
        var map = document.querySelector('#map-id')._leaflet_map;
        var elem = document.getElementById('patientDat');
        elem.innerHTML=message.Fname+" "+message.Lname+"<br />"+message.PhNo+"<br />"+message.emgcyContPhNo+"<br />"+message.streetName+"<br />"+message.streetNo+"<br />"+message.HName; 
       document.getElementById('accept').className='btn btn-lg btn-success';
       document.getElementById('reject').className='btn btn-lg btn-danger';
       window.hname=message.HName;
        window.lat=message.lat;
        window.lon=message.lon;
        window.ctr++;
       window.Alarm = setInterval(function(){   
        if(!ctr){
                document.getElementById('rightPane').style.transition='1s';
                document.getElementById('rightPane').style.backgroundColor='#d45f5f';
                ctr=1;    
            }
            else if(ctr){
                document.getElementById('rightPane').style.transitions='1s';
                document.getElementById('rightPane').style.backgroundColor='#a0cafa';
                ctr=0; 
            }
       },1000);

    });
}

var Confirm = function(t){
    var confirm = new ROSLIB.Topic({
		ros : window.ros,
		name : '/hospital_Res',
		messageType : 'std_msgs/String'
    });
    if(t==1){
        var confirmation = new ROSLIB.Message({
            data: window.hname,
        });
    }
    else if(t==-1){
        var confirmation = new ROSLIB.Message({
            data: "No",
        });
    }

    confirm.publish(confirmation);
}

module.exports.Patient = Patient;
module.exports.Confirm = Confirm;