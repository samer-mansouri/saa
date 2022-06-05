const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
 
const User = require ('../model/user');
 
router.get('/', async (req, res) => {
   

     try {
      const user = await User.find();
      res.status(200).json(user);
     } catch (err) {
      res.json({ error: err.message || err.toString() });
      console.log('there an error in the code check it');
     }
    });


    router.get('/:id', async (req, res) => {
   
     const id = req.params.id
     try {
      const user = await User.find({_id:id});
      res.status(200).json(user);
     } catch (err) {
      res.json({ error: err.message || err.toString() });
      console.log('there an error in the code check it');
     }
    });   

router.post('/',async (req,res)=>{

 let authuser = req.body ; 
 let hashedpassword = await bcrypt.hash(req.body.password, 10);
 authuser = {...authuser,password:hashedpassword}
const newuser= new User (authuser);
try { 
const user = await newuser.save();
res.status(200).json(user);
} 
catch(err){
res.status(400).json(err);
}

}); 

router.delete('/:id', async (req,res)=>{
    try {
         const user = await User.findByIdAndDelete(req.params.id);
         res.status(200).json({success : true});
         
     }catch (err){
          res.status(400).json({msg:err});
 
     }
});
router.patch('/:id', async (req,res)=>{
 
     try {
          const user = await User.findByIdAndUpdate(req.params.id,req.body);
          res.status(200).json({success : true});
          
      }catch (err){
           res.status(400).json({msg:err});
  
      }
})
 


module.exports = router;


 