const express = require("express");
const CourseCategoryController = require("../../TechveelEnq_Controller/MasterController/CourseCategoryController");

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

router.get(
  "/GetAllCourseCategory",
  verifytoken,
  CourseCategoryController.getAllCourseCategory
);

router.get(
  "/GetOneCourseCategory/:id",
  verifytoken,
  CourseCategoryController.GetoneCourseCategory
);
router.post(
  "/InsertCourseCategory",
  verifytoken,
  CourseCategoryController.InsertCourseCategory
);
router.put(
  "/UpdateCourseCategory/:id",
  verifytoken,
  CourseCategoryController.UpdateCourseCategory
);
router.delete(
  "/deleteCourseCategory/:id",
  verifytoken,
  CourseCategoryController.DeleteCourseCategory
);

module.exports = {
  TechveelEnq_Route: router,
};
