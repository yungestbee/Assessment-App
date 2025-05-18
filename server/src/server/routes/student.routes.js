const express = require("express");
const AuthMiddleware = require("../middlewares/auth.middleware");
const StudentController = require("../controllers/student.controller");
const router = express.Router();

router.post("/", StudentController.createStudent);
router.get("/:id", StudentController.getStudent);
router.get("/", StudentController.getAllStudents);

module.exports = router;

