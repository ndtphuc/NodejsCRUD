const mongoose = require('mongoose');
//const url = "mongodb://localhost:27017/EmployeeDB";
//const url = "mongodb+srv://tmtuan:**************@cluster0.zfovn.mongodb.net/test"

const url = "mongodb+srv://admin:XXgYaRxYPfgBS2fS@cluster0.h80nw.mongodb.net/test?retryWrites=true&w=majority"

//XXgYaRxYPfgBS2fS
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./employee.model');
