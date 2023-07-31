const express = require("express");
const DegreeController = require("../../TechveelEnq_Controller/MasterController/DegreeController");

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

router.get("/GetAllDegree", verifytoken, DegreeController.GetAllDegree);
router.get("/GetOneDegree/:id", verifytoken, DegreeController.GetOneDegree);
router.post("/InsertDegree", verifytoken, DegreeController.InsertDegree);
router.put("/UpdateDegree/:id", verifytoken, DegreeController.UpdateDegree);
router.delete("/DeleteDegree/:id", verifytoken, DegreeController.DeleteDegree);

module.exports = {
  TechveelEnq_Route: router,
};
