const mongoose = require("mongoose");


const mentorstaskSchema = mongoose.Schema({


name : {type : String  , required : true } ,
speciality : {type : String , required : true},
mentorid : { type : Number , required : true , unique : true} ,
studentlists : {type : Array , default : []}


    
},
{timestamps : true}
);

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
 
    mentorid: { type: Number , required : true },
    previousMentorsid: [{ type: Number, default : [] }]
}, { timestamps: true });



const mentorsTaskModel = mongoose.model("mentors" , mentorstaskSchema);
const  studentsTaskmodel = mongoose.model("students" , studentSchema);

module.exports = {mentorsTaskModel , 
studentsTaskmodel};