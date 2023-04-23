import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {Tooltip} from 'react-tooltip';
import Tables from "./Tables"
import Footer from "./Footer";
const Home=()=>{
   let styles={
        marginTop:"100px",
        marginLeft:"250px",
        right:"auto",
        bottom:"auto",
        backgroundColor:"skyblue",
        width:"60%",
        padding:"10px"
    }

    const [Post, setPost] = useState([]);
    const [Post1, setPost1] = useState([]);
    const [ Input, setInput] = useState([''])

    

    axios.get('http://localhost:8900/users')
      .then((res) => {
        //console.log(res.data);
        setPost(res.data);
        console.log(Post); 
        setPost1(res.data)})
      .catch((err) => console.log(err));
  

var handler=(event)=>{setInput(event.target.value)}

  var submit=()=>{ 
    let arr;
         if(Input != ''){
             arr=Post1.filter(e=>e.id==Input)
        }else{
            arr=Post1;
        }
        setPost(arr)
  }


console.log(Post);
    return(
    <>
   
    <div className="d-flex justify-content-between container" style={styles}>
        <div style={{fontSize:"20px",fontWeight:"bolder"}}>Customer Details</div>
        <form>
        <input type="text" onChange={handler} placeholder="&#xF002; Search" style={{fontFamily:"Arial, FontAwesome",borderRadius:"15px 0 0 15px",padding:"5px" }}/>
        <button className="btn btn-primary" type="button" style={{borderRadius:"0 15px 0 0",padding:"6px" }}  value="Submit" onClick={submit}>Submit</button>
        </form>
    <Link to="/add"><button data-tooltip-id="create" data-tooltip-content="Create" type="button" className="btn btn-success"><i className="bi bi-person-fill-add"></i>  AddUser</button></Link>
    </div>

    <Tooltip id="create" style={{backgroundColor:"lightgreen",color:"black",fontWeight:"bolder",padding:"3px",borderRadius:"20px"}}/>
    <Tables postData={Post}/>
    <Footer/>
    </>
    )

}
export default Home;