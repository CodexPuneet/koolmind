const mongoose= require("mongoose");

const employee_details= mongoose.Schema({
    country: {type: String, required: true},
    state: {type: String, required: true},
    city: {type: String, required: true},
    pincode: {type: Number, required: true},
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee', 
      },
})

const EmployeeDetails= mongoose.model("employee_details", employee_details);

module.exports= {
    EmployeeDetails
}