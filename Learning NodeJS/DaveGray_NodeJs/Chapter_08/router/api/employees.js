const express = require("express");
const router = express.Router();
const {
  getAllEmployees,
  addEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../../controllers/employeesController");

router
  .route("/")
  .get(getAllEmployees)
  .post(addEmployee)
  .put(updateEmployee)
  .delete(deleteEmployee);

router.route("/:id").get(getEmployee);
// .put(updateEmployee)
// .delete(deleteEmployee);

module.exports = router;
