const express = require("express");
const TNCController = require("../../TechveelEnq_Controller/MasterController/Terms&ConditionsController");

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

router.get("/GetAllTNC", verifytoken, TNCController.GetAllTNC);
router.get("/GetOneTNC/:id", verifytoken, TNCController.GetOneTNC);
router.post("/InsertTNC", verifytoken, TNCController.InsertTNC);
router.put("/UpdateTNC/:id", verifytoken, TNCController.UpdateTNC);
router.delete("/DeleteTNC/:id", verifytoken, TNCController.DeleteTNC);

module.exports = {
  TechveelEnq_Route: router,
};
