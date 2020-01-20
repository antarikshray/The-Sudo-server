var ROSLIB = require('roslib');
var ctr=0;

var Patient = function(){
    var patient = new ROSLIB.Topic({
		ros : window.ros,
		name : '/hospital_contact',
		messageType : 'sih/Details'
    });
    
    patient.subscribe(function(message) {
        var elem = document.getElementById('patientDat');
        elem.innerHTML=message.Fname+" "+message.Lname+"<br />"+message.PhNo+"<br />"+message.emgcyContPhNo+"<br />"+message.streetName+"<br />"+message.streetNo; 
       document.getElementById('accept').className='btn btn-lg btn-success';
       document.getElementById('reject').className='btn btn-lg btn-danger';
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

module.exports.Patient = Patient;