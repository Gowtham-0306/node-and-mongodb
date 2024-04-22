const mongoose = require("mongoose");
require('dotenv').config();
// const mongodbURI = "mongodb://localhost:27017/FSD";


function DBconnection() {

    //const mongodbURI = "mongodb+srv://gowthamravichandran58:password%40123@tasttracker.do75nlm.mongodb.net/FSD";



    const mongodbURI =  "mongodb+srv://gowthamravichandran58:password%40123@tasttracker.do75nlm.mongodb.net/FSD";

console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI).then((response) =>
{

    if(response){

        console.log("DB Connection successfull");
    }
}

).catch((err)=>{

    console.log("DB Connection failed");

}

);
}
module.exports = {

DBconnection

}