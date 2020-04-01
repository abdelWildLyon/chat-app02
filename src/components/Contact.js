import React from "react";
import "./Style.css";

function Contact(props) {
    return (
      <div className = 'main'>
        <div className = 'Contact'>
          <img classname = 'avatar' src = {props.avatar} alt = {props.name}></img>
          <div className = 'container'>
            <h4 className = 'name'>{props.name}</h4>
            <div className = 'status'>
              {props.online ? 'online' : 'offline'}
              {props.online ? <span className = 'status-online' /> :  <span className = 'status-offline' />}   
          </div>
        </div>
      </div>
    </div> 
  );
}


export default Contact;


