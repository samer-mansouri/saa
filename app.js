const express = require('express')
const app = express()
const port = 4000
const userRoute = require ('./routes/User');
const authroute = require('./routes/auth');
const demandroute = require('./routes/Demand');
const profileroute = require('./routes/Profile');



require ('dotenv').config();
require('./db/connect');
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.get('/', (req, res)=> {
  res.send('Connected to Database...');
});

app.use('/api/auth',authroute);
app.use('/api/user',userRoute); 
app.use('/api/demand',demandroute);
app.use('/api/profile',profileroute);


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});

