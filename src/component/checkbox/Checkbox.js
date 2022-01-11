 import React from 'react'
 import './Checkbox.css'

class Checkbox extends React.Component {
         state={
             Colornames:{
                 html:false,
                 css:false,
                 javascript:false,
                 reactjs:false,
                 redux:false

             }  
            }

             chkclick=(e)=>{
                 var{name,checked}= e.target;
                this.setState((e)=>{
                     var Selectedlanguage=e.Colornames;
                     return Selectedlanguage[name]=checked;

                 });
             };
                

         
             
             render(){
             var displaylanguage=Object.keys(this.state.Colornames).filter((x)=>this.state.Colornames[x]);
        

    return (
        <div className='Container'>
            <center>
                <h1>Checkbox</h1>
                <h4> Select Here</h4>
                <hr/>
                <input type="checkbox" name='HTML'  onChange={this.chkclick}/>|HTML|
                <input type="checkbox" name='CSS' onChange={this.chkclick}/>|CSS|
                <input type="checkbox" name='JAVASCRIPT' onChange={this.chkclick}/>|JAVASCRIPT |
                <input type="checkbox" name='REACT JS' onChange={this.chkclick}/>|REACT JS |
                <input type="checkbox" name='REDUX' onChange={this.chkclick}/>|REDUX |
                <hr/>
                <div className='result'>
                    <strong>{displaylanguage}</strong>

                </div>
            </center>
        </div>
    )
}}
 export default Checkbox;








 