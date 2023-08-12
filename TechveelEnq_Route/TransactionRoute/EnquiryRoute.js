const express = require("express");
const EnquiryController = require("../../TechveelEnq_Controller/TransactionController/EnquiryController");

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

router.post("/GetAllEnquiry", verifytoken, EnquiryController.getAllEnquiry);
router.get("/GetallEnquiryforAdmission", verifytoken, EnquiryController.GetallEnquiryforAdmission);
router.get("/GetOneEnquiry/:id", verifytoken, EnquiryController.GetoneEnquiry);
router.post("/InsertEnquiry", verifytoken, EnquiryController.InsertEnquiry);
router.put("/UpdateEnquiry/:id", verifytoken, EnquiryController.UpdateEnquiry);
router.delete("/deleteEnquiry/:id",verifytoken,EnquiryController.DeleteEnquiry);

module.exports = {
  TechveelEnq_Route: router,
};
