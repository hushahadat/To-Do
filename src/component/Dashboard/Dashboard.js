import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import  "./Dashboard.scss"
import { setSelectedData } from '../Redux/formData';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [data,setData] =useState([])
  useEffect(()=>{
    fetch('https://panorbit.in/api/users.json').then((res)=>res.json()).then((resp)=>{
      setData(resp.users)
    })
    .catch((err)=>{
        console.log("errr",err);
    })
  },[])
  const loadDetailedView = (props) =>{
    dispatch(setSelectedData(props))
    navigate('/profile')
  }
  return (
    <div className='layout-container'>
    <div className='container-middle'>
      <h5 className='header'>Select an account</h5>
      <div  className='container-table'>
       <Table  >
      <thead  >
        <tr>
          {/* <th className='heading'>Select an account</th> */}
        </tr>
      </thead>
      <tbody className='table-body'>
        {data && data.map((item,index)=>(
           <tr key ={index}  > 
           <td className ='account-row' onClick={()=>{loadDetailedView(item)}}><img src={item.profilepicture} className='profile'/>{ item.name}</td>
          </tr>
        ))
         
        }
      </tbody>
    </Table>
    </div>
    </div>

    </div>
  )
}

export default Dashboard
