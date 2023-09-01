const mongoose= require("mongoose");

const employee= mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: Number, required: true},
    salary: {type: Number, required: true},
   
})

const Employee= mongoose.model("employee", employee);

module.exports= {
    Employee
}