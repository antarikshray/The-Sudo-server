import React, { Component } from 'react';
// var lopit = require('../js/Lhospital');

export default class Acceptance extends Component {
    
    componentDidMount(){
        //lopit.Lhospital();
    }

    render(){
        return(
            <div>
                <br /><br /><br /><br /><br />
                <div className="row" style={{backgroundColor:"#848f91", opacity:'0.3' , height:'500px',marginLeft:'20px',marginRight:'20px'}}>
                    <div id="hospitDat" style={{fontSize:'50px'}}>
                        EMPTY
                    </div>
                </div>
            </div>
        );
    }
}