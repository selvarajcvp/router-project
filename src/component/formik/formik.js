import React, { useState } from 'react'
import {useFormik} from "formik"
import { Button, TextField } from '@material-ui/core';
import "./formik.css"

function Form() {

const formik=useFormik({
  initialValues:{
    username:"",
    email:"",
    password:""
  },
  onSubmit:(value,{resetForm})=>{
    console.log(value)
    alert(`hi,${value.username} Register success ${value.email} ${value.password}`)
    resetForm({value:""})
  },
  validate:(value)=>{
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()+=-\?;,./{}|\":<>\[\]\\\' ~_]).{8,}/;
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const error={};
    if(!value.username){
      error.username="required"
    }
    if(!value.email){
      error.email="required"

    }
    else if(!filter.test(value.email)){
        error.email='Please provide a valid email address'
  }
    if(!value.password){
      error.password="required"
    }
    else if(!re.test(value.password)){
      error.password="password should have one Caps and num"
  }



    return error;
  }
})


  return (
    <div className='container'>
      <div className='sub_container'>
        <form onSubmit={formik.handleSubmit} >
          <div className='formcontainer'>

            <div>
           <div>
           <TextField
           name="username"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           label="Username" 
           />
          </div> 
          <div className='errormes'> 
            {formik.touched.username&& formik.errors.username?formik.errors.username:null}
          </div>
          </div>

          <div>           
          <div>
           <TextField
           name="email"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           label="Email"

           />
           
          </div> 
          <div className='errormes'>
          { formik.touched.email && formik.errors.email?formik.errors.email:null}
          </div>

          </div>


          <div>
           <div>
           <TextField
           name="password"
           onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Password"
           />
           
          </div> 
          <div className='errormes'>
          { formik.touched.password&& formik.errors.password?formik.errors.password:null}
          </div>
          </div>

          <div>
            <Button 
            type="submit"
            variant='contained'
            color="primary"
            >Submit </Button>
          </div>



          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
