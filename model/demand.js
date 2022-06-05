
const mongoose = require('mongoose')
 
const choice = ['Java','PHP','Mongo','React',];
const level = ['Verylow','Low','Medium','High','Veryhigh'];
const demandSchema = new mongoose.Schema ({

   function : {

        type : String,
        required : true
    },
    
    speciality :{
        type : String,
        enum : choice,
        required:true
        },

    number : {
        type : Number,
        required:true
    },
    deadline : {
        type : Date,
        unique : true
    },

    experience : {
        type : Number,
       required : true
    },

    adress : {
        type : String,
       required : true
    },

    english:{
        type:String,
        enum : level
        
    },
    french:{
        type:String,
        enum : level
    },
    salary :{
        type : Number,
        min : 1500,
        max : 3500,
    }

}, ({timestamps:true})
)

module.exports = mongoose.model('Demand',demandSchema) 