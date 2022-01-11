import React, { useState } from 'react'
import {BrowserRouter as Router,Route,Routes,Link, } from "react-router-dom"
import Checkbox from '../checkbox/Checkbox';
import Searchbox  from '../searchbox component/Searchbox'
import Todo from '../todo/todo'
import Useref from  '../useref/useref'
import Form from  '../formik/formik'

// import Errorpage from "../errorpage/errorpage";
// import Firstpage from "../firstpage/firstpage";
// import Secondpage from "../secondpage/secondpage";


import Home from "../home/home";



function Routers() {
  const [name,setname]=useState("")
  return(
    <div >
      <Router>
        <Link to="/" >Home</Link><hr/>
        {/* <Link to="/firstpage">Firstpage</Link><hr/> */}
        {/* <Link to="/secondpage/:name">Secondpage</Link><hr/> */}
       
       
        <Link to="/checkbox">Checkbox</Link><hr/>
        <Link to="/searchbox">searchbox</Link><hr/>
        <Link to="/todo">TODO LIST</Link><hr/>
        <Link to="/useref">USE REF</Link><hr/>
        <Link to="/formik">FORMIK</Link><hr/>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          {/* <Route path="/firstpage" element={<Firstpage/>}></Route>
          <Route path="/secondpage/:name" element={<Secondpage value={name}/>}></Route> */}
         
          <Route path="/checkbox" element={<Checkbox />}></Route>
          <Route path="/searchbox" element={<Searchbox />}></Route>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/useref" element={<Useref/>}></Route>

          <Route path="/formik" element={<Form/>}></Route>
          {/* <Route path="*" element={<Errorpage/>}></Route> */}
        </Routes>
      </Router>
    </div>
  )
}

export default Routers;
