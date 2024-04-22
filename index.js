const {createServer} = require("node:http"); 

const express = require("express")
const bodyparser = require("body-parser");
const {DBconnection} =  require("./dbconnection")
const httpserver = express();
DBconnection();
httpserver.use(bodyparser.json());



 httpserver.use("/" , require("./controllers/taskcontroller"))
      

        


// starts a simple http server locally on port 3000
httpserver.listen(process.env.PORT, process.env.HOSTNAME, () => {

  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
