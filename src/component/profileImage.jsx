import React from 'react'
import './img.css';


const ProfileImage = ({imgSource}) => {
  return (
    <>
    <div className='profile-div'>
        <img className='img-profile' src={imgSource} alt="pic.imh" />
       </div>
      </>  
  )
}

export default ProfileImage;