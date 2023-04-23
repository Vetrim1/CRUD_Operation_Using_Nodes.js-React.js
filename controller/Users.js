let users=require('../model/Users')
//let uuid=require("uuid")
//var shortid = require('shortid');
//console.log(shortid.generate());
var generateSafeId = require('generate-safe-id');
//var id = generateSafeId();

exports.getAllUser=(req,res)=>{
    res.send(users);
}
exports.createUser=(req,res)=>{
    let user=req.body;
    users.push({...user,Userid:generateSafeId()})
    res.send("User Created Successfully");
}
exports.getUser=(req,res)=>{
    let userData=users.filter(a=>a.Userid===req.params.Userid);
    res.send(userData);
}
exports.deleteUser=(req,res)=>{
     users=users.filter(a=>a.Userid !== req.params.Userid);
    res.send("User deleted successfully")
}

exports.updateUser=(req,res)=>{
    let user=users.find(a=>a.Userid==req.params.Userid)
   
       user.name=req.body.name;
       user.address=req.body.address;
      user.city=req.body.city;
      user.pincode=req.body.pincode;
       user.country=req.body.country;
    res.send("User Data Updated Successfully")
}

// if(req.body.name != null)
//        res.user.name=req.body.name;
//     if(req.body.address != null)
//        res.user.address=req.body.address;
//     if(req.body.city != null)
//       res.user.city=req.body.city;
//     if(req.body.pincode != null)
//       res.user.pincode=req.body.pincode;
//     if(req.body.country != null)
//        res.user.country=req.body.country;