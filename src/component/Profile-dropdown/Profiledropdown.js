import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setSelectedData } from '../Redux/formData';

import  "./index.scss"

export const Profiledropdown = () => {
    let val = {
        "id": 5,
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "profilepicture": "https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1005.jpeg",
        "address": {
            "street": "Skiles Walks",
            "suite": "Suite 351",
            "city": "Roscoeview",
            "zipcode": "33263",
            "geo": {
                "lat": "-31.8hotlink-ok9",
                "lng": "62.5342"
            }
        },
        "phone": "(254)954-hotlink-ok89",
        "website": "demarco.info",
        "company": {
            "name": "Keebler LLC",
            "catchPhrase": "User-centric fault-tolerant solution",
            "bs": "revolutionize end-to-end systems"
        }
    }
    const ProfileDetail = useSelector((state)=>state?.reducer?.selectedData)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [item,setItem] = useState(val)
    const Profilechange =(props) =>{
        dispatch(setSelectedData(props))
        setItem(ProfileDetail)
        navigate('/profile')
    }
  return (
    <>
    <Dropdown>
    <img className='drop-profile' src={ProfileDetail.profilepicture}/>
      <Dropdown.Toggle variant="" id="dropdown-basic" style={{border: 'none'}}>
       {ProfileDetail.name}
      </Dropdown.Toggle>

      <Dropdown.Menu className='dropdown-menu'>
        <Dropdown.ItemText> <img className='dropdown-profile' src={ProfileDetail.profilepicture} /></Dropdown.ItemText>
        <Dropdown.ItemText ><b style={{fontSize :'20px'}}> {ProfileDetail.name} </b></Dropdown.ItemText>
        <Dropdown.ItemText style={{fontSize :'12px' }}> {ProfileDetail.email}</Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.ItemText onClick={()=> Profilechange(item)} style={{fontSize :'12px', cursor:'pointer'}}><img className='dropdown-profile-option' src={item.profilepicture} /> {item.name}</Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.ItemText style={{fontSize :'12px'}}><img className='dropdown-profile-option' src='https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1007.jpeg' /> Kurtis Weissnat</Dropdown.ItemText>
        <Dropdown.Divider />
        <Dropdown.ItemText> <Button variant="danger" onClick={()=>navigate('/')} style={{borderRadius :'20px'}} >Sign out</Button></Dropdown.ItemText>
      </Dropdown.Menu>
    </Dropdown>
    </>
    
  )
}
