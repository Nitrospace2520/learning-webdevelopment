const dataObject = {
  employees: require("../model/employees.json"),
  setEmployees: (data) => {
    this.employees = data;
  },
};

const getAllEmployees = (req, res) => {
  res.json(dataObject.employees);
};

const getEmployee = (req, res) => {
  const employee = dataObject.employees.find(
    (emp) => emp.id === +req.params.id
  );
  if (!employee)
    return res
      .status(400)
      .json({ message: `Employee ID ${req.params.id} not found` });
  res.json(employee);
};

const addEmployee = (req, res) => {
  const newEmployee = {
    id: dataObject.employees[dataObject.employees.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  if (!newEmployee.firstname || !newEmployee.lastname)
    return res
      .status(400)
      .json({ message: "First and last names are required." });

  dataObject.setEmployees([...dataObject.employees, newEmployee]);
  res.status(201).json(dataObject.employees);
};

const updateEmployee = (req, res) => {
  const employee = dataObject.employees.find((emp) => emp.id === +req.body.id);
  if (!employee)
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  if (req.body.firstname) employee.firstname = req.body.firstname;
  if (req.body.lastname) employee.lastname = req.body.lastname;
  const notUpdatedEmployees = dataObject.employees.filter(
    (emp) => emp.id !== +req.body.id
  );
  const unsortedRecords = [...notUpdatedEmployees, employee];
  dataObject.setEmployees(
    unsortedRecords.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );
  res.json(dataObject.employees);
};

const deleteEmployee = (req, res) => {
  const employee = dataObject.employees.find((emp) => emp.id === +req.body.id);
  if (!employee)
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  const notDeletedEmp = dataObject.employees.filter(
    (emp) => emp.id !== +req.params.id
  );
  dataObject.setEmployees([...notDeletedEmp]);
  res.json(dataObject.employees);
};

module.exports = {
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
