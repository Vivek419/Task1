import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default function InputText(props) {
    const [get, set] = useState();
    


    
    const handleChange = (e) => {
        console.log(e.target.value)
        var result=(e.target.value)
        set(result)
        console.log(get)

      };
      
  return (
      <div style={{marginTop:"15%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <form>
          <tr>
           <td><p>Hi there! Welcome to your education showcase.</p></td>   
          </tr>
          <tr>
              <td><p>Type your name and click "Enter" below to begin!</p></td>
          </tr>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",}}>
            <form > 
          <tr>
              <td><input type="text" placeholder="Your Name"  style={{height:"4ch"}} onChange={(e) => handleChange(e)} /></td>
          </tr>
          <tr style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"8px"}}>
              <td ><Button variant="contained" onClick={()=>{props.history.push('/MainPage',{'name':get})}}>Enter</Button></td>
              
          </tr>
          </form>
          </div>
      </form>
      </div>
  );
}


