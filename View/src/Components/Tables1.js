import React,{useState} from "react";
import { Link,useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {Tooltip} from 'react-tooltip';
import axios from "axios";
import "./Table.css"

const Tables=(postData)=>{
    let [users,setUsers]=useState([])
    let [fill,setFill]=useState([])

    console.log(postData);

    let navigate=useNavigate()
    axios.get('http://localhost:8900/users')
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err))

    
    //const {Userid}=useParams();
        let handleEdit=(Userid)=>{
        axios.get(`http://localhost:8900/user/${Userid}`)
         .then(res=>{
            setUsers(res.data[0] )
            console.log(res.data[0]);
        })
        navigate(`/edit/${Userid}`)
        }
        
        


    let handleView=(Userid)=>{
       let filterData= users.filter(a=>a.Userid===Userid);
       setFill(filterData)
       navigate(`/view/${Userid}`)
    }

    let handleDelete=(id)=>{
        if(window.confirm("Are you sure")){
         axios.delete(`http://localhost:8900/user/${id}`)
         .then(res=>toast.success(res.data))
         .catch(err=>console.log(err))
        
        }
         
    }

    return(
        <>
<marquee width="60%" style={{marginLeft:"250px",color:"green",fontSize:"14px"}} Scrollamount="10">I done CRUD operations (View,Delete,Create,Update).Thank you Aagnia giving me this Opportunity to prove myself....</marquee>
       <div className="table-respnsive">
        <table className=" justify-content-between container table table-bordered  table-hover"
         style={{
            marginLeft:"250px",
            right:"auto",
            bottom:"auto",
            width:"60%",
            padding:"10px",
            border:"solid 1px black"
        }}>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Pincode</th>
                <th>Country</th>
                <th className="t1">Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((a,i)=>{
           return <tr key={i}>
                <td>{++i}</td>
                <td>{a.name}</td>
                <td>{a.address}</td>
                <td>{a.city}</td>
                <td>{a.pincode}</td>
                <td>{a.country}</td>
                <td className="t1" >
                    <div class="btn-group" role="group" >
                    <Link to={`/edit/${a.Userid}`}><button data-tooltip-id="edit" data-tooltip-content="Edit" type="button" className="btn btn-primary" onClick={()=>handleEdit(a.Userid)}><i className="bi bi-pen-fill"></i></button></Link>
                    <Link to={`/view/${a.Userid}`}><button data-tooltip-id="view" data-tooltip-content="View" type="button" className="btn btn-warning" onClick={()=>handleView(a.Userid)}><i className="fa-solid fa-eye"></i></button></Link>
                    <button type="button" data-tooltip-id="delete" data-tooltip-content="Delete" className="btn btn-danger" onClick={()=>handleDelete(a.Userid)}><i className="bi bi-trash"></i></button>
                    </div>
                </td>
            </tr>
            })}
            </tbody>

        </table>
        </div>

        <Tooltip id="edit" style={{padding:"2px",borderRadius:"20px"}}/>
        <Tooltip id="view" style={{backgroundColor:"yellow",color:"black",padding:"2px",borderRadius:"20px"}}/>
        <Tooltip id="delete" style={{backgroundColor:"red",color:"white",padding:"2px",borderRadius:"20px"}}/>
    </>
    )
}
export default Tables;