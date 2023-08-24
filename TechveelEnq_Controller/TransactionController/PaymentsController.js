const PaymentsData = require("../../TechveelEnq_Data/Transaction/Payments");
var numeral = require("numeral");
const pdfcreater = require("html-pdf");
const ejs = require("ejs");
const moment = require("moment");
var fs = require("fs");
const { ToWords } = require("to-words");
const toWords = new ToWords();

const getAllPayments = async (req, res, next) => {
  try {
    const Payments = req.body;
    const Paymentslist = await PaymentsData.getAllPayment(Payments);
    res.send(Paymentslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetonePayments = async (req, res, next) => {
  try {
    const Paymentsid = req.params.id;
    const PaymentsOne = await PaymentsData.GetOnePayment(Paymentsid);
    res.send(PaymentsOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOnePaymentHistory = async (req, res, next) => {
  try {
    const Admissionid = req.params.id;
    const AdmissionOne = await PaymentsData.GetOnePaymentHistory(Admissionid);
    res.send(AdmissionOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetallPaymentsForMIS = async (req, res, next) => {
  try {
    // const Enquiry = req.body;
    const PaymentsDatas = await PaymentsData.GetallPaymentsForMIS();
    res.send(PaymentsDatas);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetallPaymentsForMISProfileWise = async (req, res, next) => {
  try {
    // const Enquiry = req.body;
    const PaymentsDatas = await PaymentsData.GetallPaymentsForMISProfileWise();
    res.send(PaymentsDatas);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetoneAdmisisonDetails = async (req, res, next) => {
  try {
    const Admissionid = req.params.id;
    const AdmissionOne = await PaymentsData.GetoneAdmisisonDetails(Admissionid);
    res.send(AdmissionOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertPayments = async (req, res, next) => {
  try {
    const Payments = req.body;
    const Paymentslist = await PaymentsData.InsertPayment(Payments);
    res.send(Paymentslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdatePayments = async (req, res, next) => {
  try {
    const Paymentsid = req.params.id;
    const Payments = req.body;
    const Paymentslist = await PaymentsData.UpdatePayment(Paymentsid, Payments);
    res.send(Paymentslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeletePayments = async (req, res, next) => {
  try {
    const Paymentsid = req.params.id;

    const Paymentslist = await PaymentsData.DeletePayment(Paymentsid);
    res.send(Paymentslist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetPaymentPrintData = async (req, res, next) => {
  try {

    const PaymentId = req.params.id;
    const PaymentData = await PaymentsData.GetPaymentPrintData(
      PaymentId
    );
    console.log(PaymentData)

    res.render(
      "PaymentReceipt",
      {
        moment,
        toWords,
        numeral,
        PaymentData
      },
      function (err, html) {
        pdfcreater
          .create(html)
          .toFile("./views/PaymentReceipt.pdf", (err) => {
            if (err) {
              res.send(Promise.reject());
            }
            res.send(Promise.resolve());
          });
      }
    );
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllPayments: getAllPayments,
  GetonePayments: GetonePayments,
  GetOnePaymentHistory: GetOnePaymentHistory,
  GetoneAdmisisonDetails: GetoneAdmisisonDetails,
  GetallPaymentsForMISProfileWise: GetallPaymentsForMISProfileWise,
  GetallPaymentsForMIS: GetallPaymentsForMIS,
  InsertPayments: InsertPayments,
  UpdatePayments: UpdatePayments,
  DeletePayments: DeletePayments,
  GetPaymentPrintData: GetPaymentPrintData
};
