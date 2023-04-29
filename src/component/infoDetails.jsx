import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faPersonHalfDress } from "@fortawesome/free-solid-svg-icons";

const InfoDetails = ({label,title,dob, address, email, phone}) => {
  return (
        <div className="userInfo">
        <div className="user-container">
       <p><FontAwesomeIcon icon={faPersonHalfDress} style={{color: "#0a5ceb",}} />{" "}{label}</p>  
       <p><FontAwesomeIcon icon={faUser} style={{color: "#005af5",}} />{" "}{title}</p>   
       <p><FontAwesomeIcon icon={faCalendarDays} style={{color: "#045ffb",}} />{" "}{dob}</p>   
       <p><FontAwesomeIcon icon={faLocationDot} beatFade style={{color: "#e80219",}} />{" "}{address}</p>   
       <p><FontAwesomeIcon icon={faEnvelope} style={{color: "#075ef2",}} />{" "}{email}</p>   
       <p><FontAwesomeIcon icon={faPhone} style={{color: "#1361e7",}} />{" "}{phone}</p>   
      </div> 
      </div>
  )
}

export default InfoDetails