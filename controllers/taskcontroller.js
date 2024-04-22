const Router = require("express").Router();
const {mentorsTaskModel , studentsTaskmodel} = require("../model/taskmodel")
module.exports = Router;






Router.get("/getmentors", (req, res, next) => {
    mentorsTaskModel.find().then((response) => {

        if (response) {

            if (response.length > 0) {

                res.status(200).json({
                    "response": response ,
                    "totallength" : response.length
                })
            } else {
                res.status(200).json({
                    "response": "not found"
                })
            }



        }
    }).catch((err) => {
        {

            res.status(500).json({
                "message": "internal server error"
            })

        }
    })




});


// /API to show all students for a particular mentor


Router.get("/getstudents/:mentorid", (req, res, next) => {


    const mentorId = req.params.mentorid;
    studentsTaskmodel.find({mentorid : mentorId}).then((response) => {

        if (response) {

            if (response.length > 0) {

                res.status(200).json({
                    "studentlists": response ,
                    "student count for the entered mentor" : response.length
                })
            } else {
                res.status(200).json({
                    "response": "no student found"
                })
            }



        }
    }).catch((err) => {
        {

            res.status(500).json({
                "message": "internal server error"
            })

        }
    })




});





// /API to show the previously assigned mentor for a particular student.




Router.get("/getmentor/:studentname", (req, res, next) => {


    const studentname = req.params.studentname;
    studentsTaskmodel.find({name : studentname}).select("name previousMentorsid").then((response) => {

        if (response) {

            if (response.length > 0) {

                res.status(200).json({
                    "previousmentorlists": response ,
                   
                })
            } else {
                res.status(200).json({
                    "response": "no mentor found"
                })
            }



        }
    }).catch((err) => {
        {

            res.status(500).json({
                "message": "internal server error"
            })

        }
    })




});





















//creatingmentors 
Router.post("/creatementor", (req, res, next) => {

const newmentor = new mentorsTaskModel(req.body);

try {
    newmentor.save();
}catch{
    

        res.status(500).json({
            "message": "internal server error - mentor details not saved"
        })

    

}

    res.send({
        mentorstatus: "mentor details added Successfully",
        mentordetails : newmentor
    });




});


//creatingstudents
Router.post("/createstudent", (req, res, next) => {

    const newstudent = new studentsTaskmodel(req.body);
    
    try {
        newstudent.save();
    }catch{
        
    
            res.status(500).json({
                "message": "internal server error - student details not saved"
            })
    
        
    
    }
    
        res.send({
            studenttatus: "student details added Successfully",
            studentdetails : newstudent
        });
    
    
    
    
    });
    


//selectonementortoaddmultiplestudent

Router.put("/assignstudent/:mentorid",  async (req, res, next) => {

 const mentorId = req.params.mentorid;

console.log(mentorId);

    const response = await mentorsTaskModel.findOneAndUpdate({mentorid : mentorId} , req.body , {new : true});
    console.log(response);
    if(response){
    
        res.send({
            assigmentstatus: "students assigned to mentor Successfully",
            datas : response
        });
    }
    else {
        res.send({
            status: "updation failed",
           
        });
    }
    
       
    
    
    });




//Assign or Change Mentor for particular Student

Router.put("/assignmentor/:studentname",  async (req, res, next) => {

    const studentname = req.params.studentname;
   
   console.log(studentname);
   
       const response = await studentsTaskmodel.findOneAndUpdate({name : studentname} , req.body , {new : true});
       console.log(response);
       if(response){
       
           res.send({
               assigmentstatus: "mentor assigned to student Successfully",
               datas : response
           });
       }
       else {
           res.send({
               status: "updation failed",
              
           });
       }
       
          
       
       
       });
   










