const router = require('express').Router();
const User = require('../model/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post ('/', async(req,res)=> {

    const email = req.body.email;
    const password = req.body.password;
    console.log(email)
    console.log(password)
    const user = await User.find({ email: email });
    console.log(user);
    try {
      const comparedPassword =  await bcrypt.compare(password, user[0].password);
      console.log(comparedPassword);
      if (comparedPassword === true) {
        //create token
        const token = jwt.sign(
          { id: user[0]._id, email: user[0].email, position: user[0].role},
          process.env.TOKEN_SECRET,{expiresIn : "3d"}
        );
        /*res.header("auth-token", token);*/
        res.status(200).json({
          token: token,
          role : user[0].position,
          id : user[0]._id
        });
      } else {
        res.status(201).json({
          message: "user found but password invalid !",
        });
      }
    } catch (error) {
      return res.status(201).json({
        message: "user not found !",
      });
    }

});

module.exports = router