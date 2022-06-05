
const mongoose = require('mongoose')
const level = ['Verylow','Low','Medium','High','Veryhigh'];
const profileSchema = new mongoose.Schema ({

   firstname : {

        type : String,
        required : true
    },
    
    lastname :{
        type : String,
        required:true
        },

    phone : {
        type : Number,
        required:true
    },
    email : {
        type : String,
        required:true,
        unique : true
    },

    nationality : {
        type : String,
       required : true
    },

    adress : {
        type : String,
       required : true
    },

    birthdate:{
        type:Date,
        required:true
        
    },
    currfunction:{
        type:String,
      
    },
    speciality :{
        type : String,
        required : true
    },

     experince:{
        type : String,
        required : true
    },
    currsalary :{
        type : Number,
        required : true

    },
    mobility:{
        type : String,
        required : true
    },

    training:{
        type : String,
        required : true
    },
    proexperience :{
        type : String,
        required : true

    },
    perso :{
        type : String,
        required : true
    },

    extrnal :{
        type : String,
        required : true
    },


    technical : {
        type:String,
        enum : level
    },
    proactivity : {
        type:String,
        enum : level
    },
    professional : {
        type:String,
        enum : level
    },
    personality : {
        type:String,
        enum : level
    },
    teamwork : {
        type:String,
        enum : level
    },
    oral : {
        type:String,
        enum : level
    },
    economic : {
        type:String,
        enum : level
    },
    leadership : {
        type:String,
        enum : level
    },
    flexibility : {
        type:String,
        enum : level
    },
    learningcapacity : {
        type:String,
        enum : level
    },
    resilience : {
        type:String,
        enum : level
    },
    conflict : {
        type:String,
        enum : level
    },
    timemanagment : {
        type:String,
        enum : level
    },
    clientfocus : {
        type:String,
        enum : level
    },
    english : {
        type:String,
        enum : level
    },
    french : {
        type:String,
        enum : level
    },
    global : {
        type:String,
        enum : level
    },
         

    notes :{
        type : String,
    },

}, ({timestamps:true})
)

module.exports = mongoose.model('Profile',profileSchema) 