import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LeafletMap from './map';
// import Footer from './footer';
//compass left panel
import Compas from './compass';
//hidden slide panel
import SlidingPannel from './SlidePannel';
import '../css/vendor/photon-0.1.2-alpha/dist/css/photon.css';
import '../css/custom.css';

//all the components are being rendered in this render function and returned to index.js
export default class App extends Component {
	state = { 
  		armStatus: 0,
  		counter: 1,
  		start: 123,
  		point5:[]
	}  

//returns a class container and the components
	render() {
		return (<div>
			<div className="window">
	         <div className="window-content">
	          <div className="pane-group" style={{border:'5px solid #abbfcf'}}>
			   <div className="pane-one-fourth sidebar" style={{borderRight:'5px solid #abbfcf', overflowY: "hidden",overflowX: "hidden"}}>
				<div style={{borderTop:'5px solid #abbfcf', borderBottom:'5px solid #abbfcf'}}>
				</div>    
				    <Compas />
		        </div>
				<div className="pane" style={{borderRight:'5px solid #abbfcf', overflowX:"hidden", overflowY:"hidden"}}>
				  <div style={{borderBottom:'5px solid #abbfcf'}}>	
				  </div>
				  <LeafletMap/>
				  <div style={{borderTop:'5px solid #abbfcf'}}> 	
				  </div>	
				</div>
			    <div className="pane-one-fourth sidebar" style={{overflowX: "hidden", overflowY: "hidden"}}>
					<SlidingPannel/>
				<div style={{borderTop:'5px solid #abbfcf', borderBottom:'5px solid #abbfcf'}}>	
				</div>
				</div>
	          </div>
			  </div>
			  {/* <Footer/> */}
			  </div>		
	      	</div> 
	      	); 
	}
}
