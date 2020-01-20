import React, { Component } from 'react';
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import '../css/vendor/react-sliding-pane.css';

export default class SlidingPannel extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isPaneOpen: false,
          isPaneOpenLeft: false
      };
  }
    
  componentDidMount() {
      Modal.setAppElement(this.el);
  }

  logField = () =>{
    var log=[];
    for(let i=0;i<window.log.length;i++){
    log.push(<div>{i+1}.> {window.log[i]}</div>);
    }
  return log;
  }

  updateErrors = () => 
  {
    this.setState({ isPaneOpenRight: true });
  }   
 
    
  render() {
    return (<div ref={ref => this.el = ref}>
      <div style={{ marginTop: '10px', float: 'right' }}>
        <button type="button" className="btn btn-info btn-lg" onClick={this.updateErrors}>
          <a>LOG</a>
        </button>                
      </div>           
      <div>  
        <SlidingPane 
                id='sp'
                isOpen={ this.state.isPaneOpenRight }
                title='LOGS'
                from='right'
                width='260px'
                onRequestClose={ () => this.setState({ isPaneOpenRight: false }) }>
                  <div>
                    {this.logField()}
                  </div>
        </SlidingPane>
      </div>
    </div>
    );
  }
}
