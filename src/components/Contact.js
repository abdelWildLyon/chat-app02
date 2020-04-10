import React, { Component } from "react";
import "./Style.css";
import PropTypes from "prop-types";


class Contact extends Component{


    state = {
      online : false,
    };

  

 handleClick = ()=>{
  const status = !this.state.online;
  this.setState({online : status});
}


  render(){
    return (
      <div className = 'main'>
        <div className = 'Contact'>
          <img className = 'avatar' src = {this.props.avatar} alt = {this.props.name}/>
          <div className = 'container'>
            <h4 className = 'name'>{this.props.name}</h4>
              <div className = 'status' onClick = {this.handleClick}>
                {this.state.online ? 'online' : 'offline'}
                {this.state.online ? <span className = 'status-online' /> :  <span className = 'status-offline' />}   
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

Contact.propTypes = {
  name : PropTypes.string.isRequired,
  avatar : PropTypes.string.isRequired,
  online : PropTypes.bool
};

export default Contact;


