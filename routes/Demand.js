const express = require('express');
const router = express.Router();
 

const Demand = require ('../model/demand');
 
router.get('/', async (req, res) => {
 

     try {
      const demand = await Demand.find();
      res.status(200).json(demand);
     } catch (err) {
      res.json({ error: err.message || err.toString() });
      console.log('there an error in the code check it');

     }
    });

router.post('/',async (req,res)=>{
 
 const newdemand= new Demand(req.body); 
try{
const demand = await newdemand.save();
res.status(200).json(demand);
} 
catch(err){
res.status(400).json(err);
}

}); 

router.delete('/:id', async (req,res)=>{
    try {
         const dmenad = await Demand.findByIdAndDelete(req.params.id);
         
         res.status(200).json({success : true});
         
     }catch (err){
          res.status(400).json({msg:err});
 
     }
});
router.patch('/:id', async (req,res)=>{

     try {
          const demand = await Demand.findByIdAndUpdate(req.params.id,req.body);
          res.status(200).json({success : true});
          
      }catch (err){
           res.status(400).json({msg:err});
  
      }
})


 
module.exports = router;


 