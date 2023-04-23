const express=require('express');
const router=express.Router()

const Users=require("./controller/Users")
router.get('/',(req,res)=>res.send("CRUD Operation using node.js & Express.js"));

router.get('/users',Users.getAllUser)
router.post('/user',Users.createUser)
router.get('/user/:Userid',Users.getUser)
router.delete('/user/:Userid',Users.deleteUser)
router.put('/user/:Userid',Users.updateUser)

module.exports = router;