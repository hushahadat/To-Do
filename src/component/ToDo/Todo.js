import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {selectedData} from '../Redux/formData'
import { Profiledropdown } from '../Profile-dropdown/Profiledropdown'
import  "./index.scss"

function Todo() {
  const ProfileDetail = useSelector((state)=>state?.reducer?.selectedData)
  console.log(ProfileDetail);
  const navigate = useNavigate()

  return (
    <div className='main-conatiner'>
      <div className='container-left'>
      <div>
          <div ><p onClick={()=>navigate('/profile')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>Profile</p> <hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/post-page')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>Post</p><hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/gallery')} style={{color : 'rgb(219 174 174)', cursor :'pointer'}}>Gallery</p><hr class="solid" /></div>
          <div ><p onClick={()=>navigate('/to-do')} style={{color : '#fff', cursor :'pointer'}}>ToDo</p></div>
        </div>
      </div>

      <div className='container-right'>
        <div className='nav-bar'>
          <div>
          <h4>To-Do</h4>
          </div>
          <div><Profiledropdown /></div>
        </div>
        <hr class="solid" />
        <div className='body'>
          <div ><p className='body-details'>Coming soon</p></div>
          
        </div>

      </div>

    </div>
  )
}

export default Todo
