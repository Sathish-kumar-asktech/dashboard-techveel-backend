const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertPayment = async (Paymentdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const insertEvent = await pool
      .request()
      .input("Admissionid", sql.BigInt, Paymentdata.Admissionid)
      .input("PayType", sql.VarChar(10), Paymentdata.PayType)
      .input("PayMode", sql.VarChar(50), Paymentdata.PayMode)
      .input("PaymentDate", sql.SmallDateTime, Paymentdata.PaymentDate)
      .input("PaidAmount", sql.Numeric(18,4), Paymentdata.PaidAmount)
      .input("BalanceOnDate", sql.Numeric(18,4), Paymentdata.BalanceOnDate) 
      .input("prevBalance", sql.Numeric(18,4), Paymentdata.prevBalance)            
      .input("Remarks", sql.VarChar(500), Paymentdata.Remarks)
      .input("CreatedBy", sql.BigInt, Paymentdata.CreatedBy)
      .query(sqlQueries.InsertPayments);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAllPayment = async (Paymentdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetPayments = await pool
      .request()
      .input("FromDate", sql.VarChar(20), Paymentdata.FromDate)
      .input("ToDate", sql.VarChar(20), Paymentdata.ToDate)
      .query(sqlQueries.GetallPayments);
    return GetPayments.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOnePayment = async (PaymentId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetonePayment = await pool
      .request()
      .input("PaymentId", sql.BigInt, PaymentId)
      .query(sqlQueries.GetonePayments);
    return GetonePayment.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOnePaymentHistory = async (admissionID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetOnePaymentHistory = await pool
      .request()
      .input("Admissionid", sql.BigInt, admissionID)
      .query(sqlQueries.GetPaymentHistory);
    return GetOnePaymentHistory.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetallPaymentsForMIS = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetPayments = await pool.request().query(sqlQueries.GetallPaymentsForMIS);
    return GetPayments.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetallPaymentsForMISProfileWise = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetPayments = await pool.request().query(sqlQueries.GetallPaymentsForMISProfileWise);
    return GetPayments.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetoneAdmisisonDetails = async (admissionID) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetoneAdmisisonDetails = await pool
      .request()
      .input("Admissionid", sql.BigInt, admissionID)
      .query(sqlQueries.GetoneAdmisisonDetails);
    return GetoneAdmisisonDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdatePayment = async (PaymentId, Paymentdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const UpdateEvent = await pool
      .request()      
      .input("PaymentId", sql.BigInt, PaymentId)
      .input("PaymentDate", sql.SmallDateTime, Paymentdata.PaymentDate)
      .input("PaidAmount", sql.Numeric(18,4), Paymentdata.PaidAmount)
      .input("Remarks", sql.VarChar(500), Paymentdata.Remarks)
      .input("BalanceOnDate", sql.Numeric(18,4), Paymentdata.BalanceOnDate)  
      .input("ModifyedBy", sql.BigInt, Paymentdata.ModifyedBy)
      .query(sqlQueries.UpdatePayments);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeletePayment = async (PaymentId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const deleteEvent = await pool
      .request()
      .input("PaymentId", sql.BigInt, PaymentId)
      .query(sqlQueries.DeletePayment);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetPaymentPrintData = async (PaymentId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Payments");
    const GetoneAdmisisonDetails = await pool
      .request()
      .input("PaymentId", sql.BigInt, PaymentId)
      .query(sqlQueries.GetPaymentReceiptData);
    return GetoneAdmisisonDetails.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertPayment: InsertPayment,
  getAllPayment: getAllPayment,
  GetOnePayment: GetOnePayment,
  GetOnePaymentHistory:GetOnePaymentHistory,
  GetoneAdmisisonDetails:GetoneAdmisisonDetails,
  GetallPaymentsForMISProfileWise:GetallPaymentsForMISProfileWise,
  GetallPaymentsForMIS:GetallPaymentsForMIS,
  UpdatePayment: UpdatePayment,
  DeletePayment: DeletePayment,
  GetPaymentPrintData: GetPaymentPrintData
};
