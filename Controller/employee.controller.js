const { Employee } = require("../Models/employee");
const { EmployeeDetails } = require("../Models/employee_details");



//to create an employee....
const employees= async (req, res) => {
    try {
      const employee = new Employee(req.body);
      await employee.save();
      res.status(201).json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create employee' });
    }
  };


  //to update an employee
const updateEmployees= async (req, res) => {
    try {
      const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Unable to edit employee' });
    }
  };

  //List of employees

  const listEmployees= async (req, res) => {
    try {
      const employees = await Employee.find();
      res.json(employees);
    } catch (error) {
      res.status(500).json({ error: 'Unable to retrieve employees' });
    }
  };
  
  //Delete employee:
const deleteEmployee=async (req, res) => {
    try {
      const employee = await Employee.findByIdAndRemove(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Unable to delete employee' });
    }
  };

  //Get one employee with all details:
 const singleEmployee = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      
      // Fetch employee_details for this employee
      const employeeDetails = await EmployeeDetails.findOne({ employeeId: req.params.id });
  
      res.json({ employee, employeeDetails });
    } catch (error) {
      res.status(500).json({ error: 'Unable to retrieve employee details' });
    }
  };

  //Add 5000 to the selected employee's salary:

  const incSalary = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
      
      // Increase the salary by 5000
      employee.salary += 5000;
  
      await employee.save();
  
      res.json(employee);
    } catch (error) {
      res.status(500).json({ error: 'Unable to increase salary' });
    }
  };

  module.exports={
    incSalary,singleEmployee,deleteEmployee,listEmployees,updateEmployees,employees
  }
  
  
  