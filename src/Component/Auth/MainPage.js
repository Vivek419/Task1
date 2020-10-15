import React,{useState,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Card'
import Modal from 'react-modal'
import { colors } from '@material-ui/core';
import { useDispatch,useSelector} from "react-redux";





const style = {
    // border: 1px solid rgb(204, 204, 204);
    content: {
        border: '0',
        bottom: 'auto',
        minHeight: '60%',
        left: '50%',
        padding: '15px',
        position: 'fixed',
        right: 'auto',
        top: '50%',
        transform: 'translate(-50%,-50%)',
        minWidth: '20rem',
        width: '80%',
        maxWidth: '60rem',
        backgroundColor:"#ABAFB3"
      }
  };

export default function MainPage(props) {
    const blockData = useSelector((state) => state);
    const block = Object.values(blockData);
    console.log("vivek",block);
    const dispatch = useDispatch();

const [get,set] = useState(props.location.state.name);
const [getnew,setnew] = useState()
const [getModal,setModal] = useState(false);

const handleChange = (e) => {
    console.log(e.target.value)
    var result=(e.target.value)
    setnew(result)
    console.log(getnew)

  };
  const handleblock = (e) => {
	console.log("aaaa",e)
    dispatch({ type: "ADD-TO-BLOCK", payload: [e] });
    
  };


return(  
    <>
    <div style={{marginTop:"8%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
        <p>Welcome to {get}'s education page</p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <input type="button" value="Add new education" onClick={()=>{setModal(true)}}/>
        </div>
    </div> <br/>
    </div> 
   <tr style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"15px"}}>  
    <td><div style={{height:"300px",width:"160px",backgroundColor:"#9B9897",margin:"15px",marginBottom:"120px"}}>
   <h6><b>&nbsp;Showcase University</b></h6>
   <p >&nbsp;&nbsp;Forward bootcamp</p>
    </div></td>
   <td><tr><td><div style={{height:"200px",width:"500px",backgroundColor:"#9B9897",margin:"8px"}}>
   <h6 style={{padding:"5px"}}><b>Graduate Computer Science @ Showcase University</b></h6>
   <p style={{marginLeft:"10px"}}>August 2019 - Present</p>
   {block.map((item)=>{
        return(
        <li style={{padding:"20px"}}>{item}</li>
        )
    })}
   </div>
   <div style={{height:"200px",width:"500px",backgroundColor:"#9B9897",margin:"8px"}}></div></td>
    </tr></td>
    </tr>
    <Modal isOpen={getModal} style={style}>
     <h4>New Education Model</h4>
     <input type="text" placeholder="add new education"  style={{height:"4ch"}} onChange={(e) => handleChange(e)} />
     <input type="button" value="Add" style={{marginLeft:"0%",marginTop:"0%"}} onClick={(e)=> handleblock(getnew)}/>
     <input type="button" value="Save" style={{marginLeft:"93%",marginTop:"40%"}} onClick={()=>{setModal(false)}}/>
    </Modal>
    </>
);   
}
