const mongoose =require("mongoose");
const validator= require("validator");

const studentSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("email is invalid");
            }
        }
    },
    phone_number:{
        type:Number,
        require:true,
        unique:true
    },
    address:{
        type: String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    caste:{
        type:String
    },
    aadhar:{
        type:Number,
        require:true,
        unique:true
    },
    aadhar_image:{
        type:String,
        require:true
    },
    certificate_image:{
        type:String,
        require:true
    }
})

const Student= new mongoose.model("Student",studentSchema)

module.exports=Student
