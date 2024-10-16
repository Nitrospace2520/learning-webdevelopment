const dataObject = {};
dataObject.employees = require("../model/employees.json");

const getAllEmployees = (req, res) => {
  res.json(dataObject.employees);
};
const getEmployee = (req, res) => {
  const employee = dataObject.employees.filter(
    (emp) => +emp.id === +req.params.id
  );
  res.json(employee);
};
const addEmployee = (req, res) => {
  const newEmployee = {
    id: new Date().getTime(),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  dataObject.employees.push(newEmployee);
  res.json(newEmployee);
};
const updateEmployee = (req, res) => {
  const updatedDetails = {
    id: +req.params.id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  dataObject.employees = dataObject.employees.map((employee) =>
    +employee.id === +req.params.id ? updatedDetails : employee
  );
  res.json(updatedDetails);
};
const deleteEmployee = (req, res) => {
  const deletedEmp = dataObject.employees.filter(
    (emp) => +emp.id === +req.params.id
  );
  // note: delete logic
  res.json(deletedEmp);
};

module.exports = {
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
