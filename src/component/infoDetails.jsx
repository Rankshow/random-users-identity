import React from 'react'

const InfoDetails = ({label,title,dob, address, email, phone}) => {
  return (
        <div className="userInfo">
        <div className="user-container">
       <p>{label}</p>  
       <p>{title}</p>   
       <p>{dob}</p>   
       <p>{address}</p>   
       <p>{email}</p>   
       <p>{phone}</p>   
      </div> 
      </div>
  )
}

export default InfoDetails