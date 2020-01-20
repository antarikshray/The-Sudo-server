import React, { Component } from 'react';
var pat = require('../js/patient'); 

export default class Patient extends Component {

    componentDidMount(){
        pat.Patient();
    }

    Invite = (event) =>{
        console.log(event.value);
        var acc = document.getElementById('accept');
        var rej = document.getElementById('reject');
        if(acc.className==="btn btn-lg btn-success"&&event.id==="accept"){
            //pat.Confirm(1);
            rej.className="btn btn-lg btn-default";
        }
    }

    render() {  return( <div>
                <br /><br /><br /><br /><br />
                <div className="row" style={{backgroundColor:"#848f91", opacity:'0.3' , height:'500px',margin:'20px', borderBottom:'5px solid #abbfcf'}}>
                    <div id="patientDat" style={{fontSize:'20px'}}>
                       NONE
                    </div>
                </div>
                <div className="row">
						<button  id="accept" value="accept" onClick={this.Invite} style={{height:"50px", width:"200px", marginLeft:"100px", fontSize:"20px"}} className="btn btn-large btn-default">ACCEPT</button>
                </div>
                <div className="row">
						<button  id="reject" value="reject" onClick={this.Invite} style={{height:"50px", width:"200px",marginLeft:'100px' , marginTop:"50px", marginBottom:"20px", fontSize:"20px"}} className="btn btn-large btn-default">REJECT</button>
                </div>
                </div>);
    }

}