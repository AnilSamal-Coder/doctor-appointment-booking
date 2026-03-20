import React, { useState } from 'react'
import {assets} from '../assets/assets';

const MyProfile = () => {

  const [userData,setUserData] = useState({
    name:"Sanju",
    image:assets.profile_pic,
    email:'sanju@gmail.com',
    phone:'+91 6784678980',
    address:{
      line1:"Bhubaneswar, Infocity",
      line2:"patia"
    },
    gender:'Male',
    dob:'2000-01-01'
  })

  const [isEdit,setIsEdit] = useState(false)

  return (
    <div>

      <img src={userData.image} alt="" />

      {
        isEdit
        ? <input type='text' value={userData.name} onChange={e => setUserData(prev=> ({...prev,name:e.target.value}) )} />
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>Contact Information</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
        </div>
      </div>

        
    </div>
  )
}

export default MyProfile