import React, { useEffect, useState } from 'react'
import './homePage.css';
import ProfileImage from "./profileImage";
// import ProfilePic from "../image/profile.png";
import InfoDetails from "./infoDetails";
import './user.css';


const HomePage = () => {
  const [users, setUsers] = useState([]);


  const generaterUserInfo = () => {
    fetch('https://randomuser.me/api/').then((res) => res.json()).then(data => {
      console.log("Give me the data", data.results)   
      setUsers(data.results);
    })
  }

  useEffect(() => {
    generaterUserInfo()
  }, [])

  return (
    <>
    <div className='wrapper'>
     <div className="container">
      <ProfileImage imgSource={users[0]?.picture.thumbnail}/>
       </div>
       
       <InfoDetails 
       label={users[0]?.gender} 
       title={users[0]?.name.title + " " + users[0]?.name.first + " " + users[0]?.name.last }
       email={users[0]?.email} 
        phone={users[0]?.phone} 
        address={users[0]?.location.city + "" + users[0]?.location.state} 
        dob={new Date(users[0]?.dob.date).toDateString()} />
       <div className="btn">
       <button onClick={generaterUserInfo}>Get User Data</button>
       </div>
      </div>

    </>
  )
}

export default HomePage;