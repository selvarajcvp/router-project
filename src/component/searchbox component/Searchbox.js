import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Searchbox.css'


function Searchbox() {
    const [change,setchange]=useState("")

    const arrname=["HTML","CSS","JS","REACT","ANGULAR","PYTHON","SQL" ]
  const handlechange=(e)=>{

    const smaller=e.target.value.toLowerCase()
    setchange(smaller)
   
   
  }
    return (
        <div className='box'>
     
            <input type="search" onChange={handlechange} />
            {
            arrname.filter((value)=>{
               if(value.toLowerCase().includes(change)){
                    return value
                 }
                }).map((arr,index)=>{
                            return(<div>{arr}</div>)
                        })}
        </div>
    )
}

export default Searchbox