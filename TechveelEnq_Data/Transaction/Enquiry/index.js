const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertEnquiry = async (Enquirydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const insertEvent = await pool
      .request()
      .input("FirstName", sql.VarChar(50), Enquirydata.FirstName)
      .input("LastName", sql.VarChar(50), Enquirydata.LastName)
      .input("FatherName", sql.VarChar(50), Enquirydata.FatherName)
      .input("Dob", sql.SmallDateTime, Enquirydata.Dob)
      .input("Gender", sql.Char(1), Enquirydata.Gender)
      .input("GraduationType", sql.VarChar(10), Enquirydata.GraduationType)
      .input("PhoneNumber", sql.VarChar(20), Enquirydata.PhoneNumber)
      .input("Email", sql.VarChar(50), Enquirydata.Email)
      .input("CityId", sql.BigInt, Enquirydata.CityId)
      .input("CollegeId", sql.BigInt, Enquirydata.CollegeId)
      .input("DegreeId", sql.BigInt, Enquirydata.DegreeId)
      .input("SslcPer", sql.Numeric(18, 4), Enquirydata.SslcPer)
      .input("SslcPassedout", sql.VarChar(10), Enquirydata.SslcPassedout)
      .input("HscPer", sql.Numeric(18, 4), Enquirydata.HscPer)
      .input("HscPassedout", sql.VarChar(10), Enquirydata.HscPassedout)
      .input("UGPer", sql.Numeric(18, 4), Enquirydata.UGPer)
      .input("UGPassedOut", sql.VarChar(10), Enquirydata.UGPassedOut)
      .input("PGPer", sql.Numeric(18, 4), Enquirydata.PGPer)
      .input("PGPassedOut", sql.VarChar(10), Enquirydata.PGPassedOut)
      .input("PerferenceMode", sql.VarChar(30), Enquirydata.PerferenceMode)
      .input("PerferenceDay", sql.VarChar(30), Enquirydata.PerferenceDay)
      .input("PerferenceTiming", sql.VarChar(30), Enquirydata.PerferenceTiming)
      .input("CourseId", sql.BigInt, Enquirydata.CourseId)
      .input("CourseTechnologyId", sql.BigInt, Enquirydata.CourseTechnologyId)
      .input("WorkingStatus", sql.Char(1), Enquirydata.WorkingStatus)
      .input("WorkingIndustry", sql.VarChar(50), Enquirydata.WorkingIndustry)
      .input("WorkingCompany", sql.VarChar(200), Enquirydata.WorkingCompany)
      .input("ReferenceBy", sql.VarChar(30), Enquirydata.ReferenceBy)
      .input(
        "ReferenceContactNumber",
        sql.VarChar(30),
        Enquirydata.ReferenceContactNumber
      )
      .input("CreatedBy", sql.BigInt, Enquirydata.CreatedBy)
      .query(sqlQueries.InsertEnquiry);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetallEnquiryforAdmission = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const GetEnquries = await pool.request().query(sqlQueries.GetallEnquiryforAdmission);
    return GetEnquries.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetallEnquiryForMIS = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const GetEnquries = await pool.request().query(sqlQueries.GetallEnquiryForMIS);
    return GetEnquries.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAllEnquiry = async (Enquirydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const GetEnquirys = await pool
      .request()
      .input("FromDate", sql.VarChar(20), Enquirydata.FromDate)
      .input("ToDate", sql.VarChar(20), Enquirydata.ToDate)
      .query(sqlQueries.GetallEnquiry);
    return GetEnquirys.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneEnquiry = async (EnquiryId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const GetoneEnquiry = await pool
      .request()
      .input("EnquiryId", sql.BigInt, EnquiryId)
      .query(sqlQueries.GetoneEnquiry);

    return GetoneEnquiry.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateEnquiry = async (EnquiryId, Enquirydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const UpdateEvent = await pool
      .request()
      .input("EnquiryId", sql.BigInt, EnquiryId)
      .input("FirstName", sql.VarChar(50), Enquirydata.FirstName)
      .input("LastName", sql.VarChar(50), Enquirydata.LastName)
      .input("FatherName", sql.VarChar(50), Enquirydata.FatherName)
      .input("Dob", sql.SmallDateTime, Enquirydata.Dob)
      .input("Gender", sql.Char(1), Enquirydata.Gender)
      .input("GraduationType", sql.VarChar(10), Enquirydata.GraduationType)
      .input("PhoneNumber", sql.VarChar(20), Enquirydata.PhoneNumber)
      .input("Email", sql.VarChar(50), Enquirydata.Email)
      .input("CityId", sql.BigInt, Enquirydata.CityId)
      .input("CollegeId", sql.BigInt, Enquirydata.CollegeId)
      .input("DegreeId", sql.BigInt, Enquirydata.DegreeId)
      .input("SslcPer", sql.Numeric(18, 4), Enquirydata.SslcPer)
      .input("SslcPassedout", sql.VarChar(10), Enquirydata.SslcPassedout)

      .input("HscPer", sql.Numeric(18, 4), Enquirydata.HscPer)
      .input("HscPassedout", sql.VarChar(10), Enquirydata.HscPassedout)

      .input("UGPer", sql.Numeric(18, 4), Enquirydata.UGPer)
      .input("UGPassedOut", sql.VarChar(10), Enquirydata.UGPassedOut)

      .input("PGPer", sql.Numeric(18, 4), Enquirydata.PGPer)
      .input("PGPassedOut", sql.VarChar(10), Enquirydata.PGPassedOut)

      .input("PerferenceMode", sql.VarChar(30), Enquirydata.PerferenceMode)
      .input("PerferenceDay", sql.VarChar(30), Enquirydata.PerferenceDay)
      .input("PerferenceTiming", sql.VarChar(30), Enquirydata.PerferenceTiming)
      .input("CourseId", sql.BigInt, Enquirydata.CourseId)
      .input("CourseTechnologyId", sql.BigInt, Enquirydata.CourseTechnologyId)
      .input("WorkingStatus", sql.Char(1), Enquirydata.WorkingStatus)
      .input("WorkingIndustry", sql.VarChar(50), Enquirydata.WorkingIndustry)
      .input("WorkingCompany", sql.VarChar(200), Enquirydata.WorkingCompany)
      .input("ReferenceBy", sql.VarChar(30), Enquirydata.ReferenceBy)
      .input(
        "ReferenceContactNumber",
        sql.VarChar(30),
        Enquirydata.ReferenceContactNumber
      )
      .input("Modifyby", sql.BigInt, Enquirydata.Modifyby)

      .query(sqlQueries.UpdateEnquiry);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteEnquiry = async (EnquiryId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Enquiry");
    const deleteEvent = await pool
      .request()
      .input("EnquiryId", sql.BigInt, EnquiryId)

      .query(sqlQueries.DeleteEnquiry);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertEnquiry: InsertEnquiry,
  getAllEnquiry: getAllEnquiry,
  GetallEnquiryforAdmission:GetallEnquiryforAdmission,
  GetallEnquiryForMIS:GetallEnquiryForMIS,
  GetOneEnquiry: GetOneEnquiry,
  UpdateEnquiry: UpdateEnquiry,
  DeleteEnquiry: DeleteEnquiry,
};
