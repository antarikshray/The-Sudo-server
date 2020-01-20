import React, { Component } from 'react';
import L from 'leaflet';
var webSock = require('../js/webSocket');
var locat = require('../js/AccidentLocation');
var ctr=0;
class Compas extends Component {
  
componentDidMount() {
  webSock.crtwebSocket();
  locat.setupServer();
  var dir = -28;
  var bear = 0;
  this.myInterval = setInterval(function(){
    dir = -28+window.y;
    var compassDisc = document.getElementById("Needle");
    compassDisc.style.webkitTransform = "rotate("+ (dir) +"deg)";
    compassDisc.style.transform = "rotate("+ (dir) +"deg)";
  
    bear = -24;
    bear = -24+window.y+window.difference;
    var bearNeedle = document.getElementById("bearneedle");
    bearNeedle.style.webkitTransform = "rotate("+ (bear) +"deg)";
    bearNeedle.style.transform = "rotate("+ (bear) +"deg)";  
   
   
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
      window.log.push(window.lat+"  "+window.lon+" "+window.ID);
      ctr=window.ctr;
    }

  },10);
}

  componentWillUnmount(){
    clearInterval(this.myInterval);
  }
 
  show = () =>{
    console.log(window.lat);
  }

  render() {
        return (
          <div>
    <div id="compass" className="compass">
      <div className="arrow" id="Needle"></div>
      <div className="bearing" id="bearneedle"></div>
      <div className="disc" id="compassDiscImg"></div>
    </div>
    </div>
        );
    }
}
 

export default Compas;