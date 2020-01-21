import React, { Component } from 'react';
import L from 'leaflet';
var pat = require('../js/patient'); 
var ctr=0;

export default class Patient extends Component {

    componentDidMount(){
        pat.Patient();

        var plotInterval= setInterval(function(){
            if(window.ctr-ctr>0){
                var map = document.querySelector('#map-id')._leaflet_map;
                  var point = L.marker([window.lat, window.lon]);
                  window.point.push(point);
                  L.Icon.Default.mergeOptions({
                    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
                    iconUrl: require("../images/"+window.loc[(window.ctr-1)%5]),
                    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
                  });
                  point.addTo(map);
                  console.log(point);
                  //window.log.push(window.lat+"  "+window.lon+" "+window.ID);
                  ctr=window.ctr;
                }
        },10);
        
    }

    Invite = () =>{
        let acc = document.getElementById('accept');
        let rej = document.getElementById('reject');
        
        if(acc.className==="btn btn-lg btn-success"){
            pat.Confirm(1);
            rej.className="btn btn-lg btn-default";
        }
        clearInterval(window.Alarm);
        document.getElementById('rightPane').style.backgroundColor="#4fff84";
    }

    Reject = () =>{
        let acc = document.getElementById('accept');
        let rej = document.getElementById('reject');
        
        if(rej.className==="btn btn-lg btn-danger"){
            pat.Confirm(-1);
            acc.className="btn btn-lg btn-default";
        }
        clearInterval(window.Alarm);
        document.getElementById('rightPane').style.backgroundColor="#ff4262";
    
    }

    render() {  return( <div>
                <br /><br /><br /><br /><br />
                <div className="row" style={{backgroundColor:"#848f91", opacity:'0.3' , height:'500px',margin:'20px', borderBottom:'5px solid #abbfcf'}}>
                    <div id="patientDat" style={{fontSize:'20px'}}>
                       NONE
                    </div>
                </div>
                <div className="row">
						<button  id="accept" onClick={this.Invite} style={{height:"50px", width:"200px", marginLeft:"100px", fontSize:"20px"}} className="btn btn-large btn-default">ACCEPT</button>
                </div>
                <div className="row">
						<button  id="reject" onClick={this.Reject} style={{height:"50px", width:"200px",marginLeft:'100px' , marginTop:"50px", marginBottom:"20px", fontSize:"20px"}} className="btn btn-large btn-default">REJECT</button>
                </div>
                </div>);
    }

}