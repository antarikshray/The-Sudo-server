import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './jsx/App';

window.lat=0.00;
window.lon=0.00;
window.y=0;
window.difference=0;
window.log=[];
window.ctr=0;
window.loc=['one.png','two.png','three.png','four.png','five.png'];
window.point= [];
window.hospital=[];
window.patient=["Patient"];
ReactDOM.render(<App />, document.getElementById('main'));  