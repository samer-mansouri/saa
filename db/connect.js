const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
     
}).then(()=>{
  console.log("mongoDB is connected to the server")
}).catch(err => console.log(err.message))

 