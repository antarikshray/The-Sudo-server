import React, { Component } from 'react';
var stat = require('../js/footer');
var armStatus = require('../js/armstatus');
var connInterval;

export default class Footer extends Component{
		
		componentDidMount() {
				stat.statusConnection();
				armStatus.joyStatus();
				connInterval = setInterval(function(){
					 var element = document.getElementById("footer");
					 var d= new Date();
					 var n= d.getTime();
					 if(n-window.n>1000){
						element.style.backgroundColor = "#bcccc9";
					 }
					 else{
						element.style.backgroundColor = "#48b09c";
					 }
				},500);
		}

		componentWillUnmount() {
				clearInterval(connInterval);
		}

		render(){
				return(<div>
						<div>
								<footer id="footer" className="toolbar toolbar-footer">
										<p className="title">
												<span id='ArmDriveStatus' className="text" style={{marginLeft:'200px', transition:'2s'}}></span>
										</p>
								</footer>
						</div>
				</div>
				);
		}
}



