const PaymentsData = require("../../TechveelEnq_Data/Transaction/Payments");

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
    const  Admissionid = req.params.id;
    const AdmissionOne = await PaymentsData.GetOnePaymentHistory(Admissionid);
    res.send(AdmissionOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const GetoneAdmisisonDetails = async (req, res, next) => {
  try {
    const  Admissionid = req.params.id;
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

module.exports = {
  getAllPayments: getAllPayments,
  GetonePayments: GetonePayments,
  GetOnePaymentHistory:GetOnePaymentHistory,
  GetoneAdmisisonDetails:GetoneAdmisisonDetails,
  InsertPayments: InsertPayments,
  UpdatePayments: UpdatePayments,
  DeletePayments: DeletePayments,
};
