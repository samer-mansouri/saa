const express = require('express');
const router = express.Router();
 

const Profile = require ('../model/profile');
 
router.get('/', async (req, res) => {
 

     try {
      const profile = await Profile.find();
      res.status(200).json(profile);
     } catch (err) {
      res.json({ error: err.message || err.toString() });
      console.log('there an error in the code check it');

     }
    });

router.get('/:id', async (req, res) => {
     try {
          const profile = await Profile.findById(req.params.id);
          res.status(200).json(profile);
     } catch (err) {
          res.json({ error: err.message || err.toString() });
          console.log('there an error in the code check it');
     }
});


router.post('/',async (req,res)=>{
 
     try{
          const profile = await Profile.findOne({email:req.body.email});
          if(profile) res.status(400).json({msg:'Profile with this email adress already exists'});
          else{

               const newprofile= new Profile(req.body); 
               const profile = await newprofile.save();
               res.status(200).json(profile);
          }
     } catch(err){
          res.status(400).json(err);
     }

    }); 

router.delete('/:id', async (req,res)=>{
    try {
         const profile = await Profile.findByIdAndDelete(req.params.id);
         
         res.status(200).json({success : true});
         
     }catch (err){
          res.status(400).json({msg:err});
 
     }
});
router.patch('/:id', async (req,res)=>{

     try {
          const profile = await Profile.findByIdAndUpdate(req.params.id,req.body);
          res.status(200).json({success : true});
          
      }catch (err){
           res.status(400).json({msg:err});
  
      }
})


 
module.exports = router;


 