const express= require("express");
const { incSalary,singleEmployee,deleteEmployee,listEmployees,updateEmployees,employees,employeeDetails } = require("../Controller/employee.controller");


const employeeRouter= express.Router();

employeeRouter.post('/employees', employees);
employeeRouter.put('/employees/:id',updateEmployees)
employeeRouter.get('/employeeslist', listEmployees);
employeeRouter.delete('/employees/:id',deleteEmployee)
employeeRouter.get('/employees/:id',singleEmployee)
employeeRouter.put('/employees/increase-salary/:id',incSalary)
employeeRouter.post('/employees/employee-details/:employeeId',employeeDetails)


module.exports= {
    employeeRouter
}