const express=require('express');
const app=express();
const port=8900;
let router=require('./router')
const cors=require('cors');
const bodyParser=require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',router);
app.all('*',(req,res)=>res.send("User routes can't be found"))

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on ${port}`);
})

