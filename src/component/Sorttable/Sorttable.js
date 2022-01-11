import React,{useState} from 'react';
import Mockdata from '../MOCK_DATA.json';



export default function Sorttable() {
    const[data,setdata]=useState(Mockdata);
    const[order,setorder]=useState('ASC');
    const sorting=(col)=>{
        if(order ==='ASC'){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowercase()>b[col].toLowercase() ? 1 : -1
            );
            setdata(sorted);
           setorder("DSC");
        }
        if(order ==='DSC'){
            const sorted=[...data].sort((a,b)=>
            a[col].toLowercase()<b[col].toLowercase() ? 1 : -1
            );
            setdata(sorted);
           setorder("ASC");
    }
};
    return (
        <div className='conainer'>
            <table className='table table-bordered'>
                <thead>
                    <th onClick={()=>sorting("first_name")}>First Name</th>
                    <th onClick={()=>sorting("last_name")}>Last Name</th>
                    <th onClick={()=>sorting("email")}>Email</th>
                    <th onClick={()=>sorting("gender")}>Gender</th>
                </thead>
                <tbody>
                    {data.map((d)=>(
                <tr key={d.id}>
                   <td>{d.first_name}</td>
                   <td>{d.last_name}</td>
                   <td>{d.email}</td>
                   <td>{d.gender}</td>
                </tr>
                    
                    ))}
                </tbody>
            </table>
        </div>
    )
}

