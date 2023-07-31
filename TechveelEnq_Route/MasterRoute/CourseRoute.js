const express = require("express");
const CourseController = require("../../TechveelEnq_Controller/MasterController/CoursesController");

const router = express.Router();
const jwt = require("jsonwebtoken");
function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

router.get("/GetAllCourses", verifytoken, CourseController.GetAllCourse);
router.get("/GetOneCourse/:id", verifytoken, CourseController.GetOneCourse);
router.post("/InsertCourse", verifytoken, CourseController.InsertCourse);
router.put("/UpdateCourse/:id", verifytoken, CourseController.UpdateCourse);
router.delete("/DeleteCourse/:id", verifytoken, CourseController.DeleteCourse);

module.exports = {
  TechveelEnq_Route: router,
};
