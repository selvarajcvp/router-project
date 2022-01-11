import './todo.css';
import { useState } from 'react';

function Todo() {
  const [text,setText] = useState("")
  const [state, setstate] = useState("")
  const [total,settotal]=useState([])
  
 const Updateday =(e)=>{
   setText(e.target.value)
 }

 const Updatefood =(e)=>{
  setstate(e.target.value)
}

const handleadd=()=>{
  const data={
    day:text,
    food:state
  }
  settotal([...total,data])
  console.log(total);
  cleardata();
  
}
const cleardata=()=>{
  setText("")
  setstate("")
}
const handledelete=(num)=>{
  const copytotal=[...total]
  copytotal.splice(num,1)
settotal(copytotal)
console.log(copytotal);
}
const handlereset=()=>{
  settotal([])
}
  return (
    <div className="App">
      <h1>Todolist</h1>
      <div >
      <input type="text" placeholder='Enter your Name' onChange={Updateday} value={text}></input>
      </div>
     
      <input type="text" placeholder='Enter your Role' onChange={Updatefood} value={state}></input>
      
      <div className='Buttons'>
      <button className='Button' onClick={handleadd} > Add </button>
      <button className='Button1' onClick={handlereset}>  Reset </button>
      </div>
      <div className='table'>
        <div>
       <table>
         <thead>
           <tr>
             <th>Emp.No</th>
             <th>Emp.Name</th>
             <th>Role</th>
             <th>action</th>
           </tr>
         </thead>
         <tbody>
           {
             total.map((value,index)=>{
               return <tr>
                 <td>{index+1}</td>
                 <td>{value.day}</td>
                 <td>{value.food}</td>
                 <td><button onClick={()=>handledelete(index)}>delete</button></td>
               </tr>
             })
           }
         </tbody>
       </table>
       </div>
        </div>
    
    </div>
  );
}

export default Todo;
