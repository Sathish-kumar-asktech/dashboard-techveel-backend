const express = require("express");
const PaymentsController = require("../../TechveelEnq_Controller/TransactionController/PaymentsController");

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

router.post("/GetAllPayments", verifytoken, PaymentsController.getAllPayments);
router.get("/GetOnePayments/:id", verifytoken, PaymentsController.GetonePayments);
router.get("/GetOnePaymentHistory/:id", verifytoken, PaymentsController.GetOnePaymentHistory);
router.get("/GetoneAdmisisonDetails/:id", verifytoken, PaymentsController.GetOnePaymentHistory);
router.get("/GetallPaymentsForMIS", verifytoken, PaymentsController.GetallPaymentsForMIS);
router.get("/GetallPaymentsForMISProfileWise", verifytoken, PaymentsController.GetallPaymentsForMISProfileWise);
router.post("/InsertPayments", verifytoken, PaymentsController.InsertPayments);
router.put("/UpdatePayments/:id", verifytoken, PaymentsController.UpdatePayments);
router.delete("/deletePayments/:id",verifytoken,PaymentsController.DeletePayments);
router.get("/GetPaymentPrint/:id", verifytoken, PaymentsController.GetPaymentPrintData);

module.exports = {
  TechveelEnq_Route: router,
};
