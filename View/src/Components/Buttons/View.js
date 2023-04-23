import React,{useState,useEffect} from "react";
import { Link,useParams } from "react-router-dom";
import axios from "axios";
const View=()=>{

    const [view,setView]=useState([]);

    let {Userid}=useParams();
    
   setTimeout(()=>{
    axios.get(`http://localhost:8900/user/${Userid}`)
    .then(res=> setView(res.data))
   },1000)
   



    return(
        <>
        {view.map((e)=>{
      
       return <form id="form1" className="justify-content-center">
             <h4>Your Details</h4>
            <fieldset className="flex-column" >
            <label>Name :</label>
            <h6>{e.name}</h6>
            <label>Address :</label>
            <h6>{e.address}</h6>
            <label>City :</label>
            <h6>{e.city}</h6>
            <label>Pincode :</label>
            <h6>{e.pincode}</h6>
            <label>Userid :</label>
            <h6>{e.Userid}</h6>
            <div className="d-flex justify-content-evenly">
            <Link to="/"><button type="button" className="btn btn-primary">Back</button></Link>
            <Link to="/add"><button type="button" className="btn btn-primary"><i className="bi bi-person-fill-add"></i> AddUser</button></Link>
            </div>
            </fieldset>
            
        </form>
        })}
     
        </>
    )
}
export default View;