const Student = require("../../models/students");

class StudentController {
  // POST: Create a new student
  static async createStudent(req, res, next) {
    const { firstName, lastName, grade } = req.body;

    if (!firstName || !lastName || !grade) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const student = new Student({
        firstName,
        lastName,
        grade,
      });

      await student.save();

      return res.status(201).json({
        status: "success",
        message: "Student created successfully",
        data: student,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error creating student" });
    }
  }

  // GET: Get one student by ID
  static async getStudent(req, res) {
    const { id } = req.params;

    try {
      const student = await Student.findById(id);
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      return res.status(200).json({
        status: "success",
        data: student,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error retrieving student" });
    }
  }

  // GET: Get all students
  static async getAllStudents(req, res) {
    try {
      const students = await Student.find();

      return res.status(200).json({
        status: "success",
        data: students,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error retrieving students" });
    }
  }
}

module.exports = StudentController;
