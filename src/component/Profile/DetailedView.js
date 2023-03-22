import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {selectedData} from '../Redux/formData'
import { Profiledropdown } from '../Profile-dropdown/Profiledropdown'
import  "./index.scss"

function DetailedView() {
  const ProfileDetail = useSelector((state)=>state?.reducer?.selectedData)
  console.log(ProfileDetail);
  const navigate = useNavigate()

  return (
    <div className='main-conatiner'>
      <div className='container-left'>
        <div>
          <div ><p onClick={()=>navigate('/profile')} style={{color : '#FFFF', cursor :'pointer'}}>Profile</p> <hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/post-page')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>Post</p><hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/gallery')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>Gallery</p><hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/to-do')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>ToDo</p></div>
        </div>
      </div>

      <div className='container-right'>
        <div className='nav-bar'>
          <div>
          <h4>Profile</h4>
          </div>
          <div><Profiledropdown /></div>
        </div>
        <hr class="solid" />
        <div className='app-body'>

          <div className='left-container'>
            <img className='detail-profile' src={ProfileDetail.profilepicture} />
            <h4>{ProfileDetail.name}</h4>
            <p>Username : <b>{ProfileDetail.username}</b></p>
            <p>e-mail : <b>{ProfileDetail.email}</b></p>
            <p>Phone :<b> {ProfileDetail.phone}</b></p>
            <p>Website :<b> {ProfileDetail.website}</b></p>
            <hr class="solid" />
            <h5>Company</h5>
            <p>Name : <b>{ProfileDetail.company.name}</b></p>
            <p>catchphrase :<b> {ProfileDetail.company.catchPhrase}</b></p>
            <p>bs :<b> {ProfileDetail.company.bs}</b></p>

          </div>
          <div class="vl"></div>
          <div className='right-container'>
            <h5>Address</h5>
            <div className='address'>
            <p>Street :<b> {ProfileDetail.address.street}</b></p>
            <p>Suite :<b> {ProfileDetail.address.suite}</b></p>
            <p>City : <b>{ProfileDetail.address.city}</b></p>
            <p>Zipcode : <b>{ProfileDetail.address.zipcode}</b></p>
            </div>
            <div className='map-container'>
             <iframe width="100%" height='300px'  src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=-71.4197, -71.4197&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br /> 
            </div>
            <div className='geo-location'>
              <p>Lat: <b>{ProfileDetail.address.geo.lat}</b> Long: <b>{ProfileDetail.address.geo.lat}</b></p>
            </div>

          </div>
          
        </div>

      </div>

    </div>
  )
}

export default DetailedView
