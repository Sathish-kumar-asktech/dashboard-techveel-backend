const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertAdmission = async (Admissiondata,doc1,doc2,doc3,doc4) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Admission");
    const insertEvent = await pool
      .request()
      .input("FirstName", sql.VarChar(50), Admissiondata.FirstName)
      .input("LastName", sql.VarChar(50), Admissiondata.LastName)
      .input("FatherName", sql.VarChar(50), Admissiondata.FatherName)
      .input("Dob", sql.SmallDateTime, Admissiondata.Dob)
      .input("Gender", sql.Char(1), Admissiondata.Gender)
      .input("GraduationType", sql.VarChar(10), Admissiondata.GraduationType)
      .input("PhoneNumber", sql.VarChar(20), Admissiondata.PhoneNumber)
      .input("Email", sql.VarChar(50), Admissiondata.Email)
      .input("Address1", sql.VarChar(250), Admissiondata.Address1)
      .input("Address2", sql.VarChar(250), Admissiondata.Address2)
      .input("CityId", sql.BigInt, Admissiondata.CityId)
      .input("StateId", sql.BigInt, Admissiondata.StateId)
      .input("ZipCode", sql.VarChar(10), Admissiondata.ZipCode)
      .input("doc1", sql.VarChar(100),doc1)
      .input("doc2", sql.VarChar(100),doc2)
      .input("doc3", sql.VarChar(100),doc3)
      .input("doc4", sql.VarChar(100),doc4)
      .input("CollegeId", sql.BigInt, Admissiondata.CollegeId)
      .input("DegreeId", sql.BigInt, Admissiondata.DegreeId)
      .input("SslcPer", sql.Numeric(18, 4), Admissiondata.SslcPer)
      .input("SslcPassedout", sql.VarChar(10), Admissiondata.SslcPassedout)
      .input("HscPer", sql.Numeric(18, 4), Admissiondata.HscPer)
      .input("HscPassedout", sql.VarChar(10), Admissiondata.HscPassedout)
      .input("UGPer", sql.Numeric(18, 4), Admissiondata.UGPer)
      .input("UGPassedOut", sql.VarChar(10), Admissiondata.UGPassedOut)
      .input("PGPer", sql.Numeric(18, 4), Admissiondata.PGPer)
      .input("PGPassedOut", sql.VarChar(10), Admissiondata.PGPassedOut)
      .input("PerferenceMode", sql.VarChar(30), Admissiondata.PerferenceMode)
      .input("PerferenceDay", sql.VarChar(30), Admissiondata.PerferenceDay)
      .input(
        "PerferenceTiming",
        sql.VarChar(30),
        Admissiondata.PerferenceTiming
      )
      .input("CourseId", sql.BigInt, Admissiondata.CourseId)
      .input("CourseTechnologyId", sql.BigInt, Admissiondata.CourseTechnologyId)
      .input("WorkingStatus", sql.Char(1), Admissiondata.WorkingStatus)
      .input("WorkingIndustry", sql.VarChar(50), Admissiondata.WorkingIndustry)
      .input("WorkingCompany", sql.VarChar(200), Admissiondata.WorkingCompany)
      .input("DiscountAmount", sql.VarChar(200), Admissiondata.DiscountAmount)
      .input("NetAmount", sql.VarChar(200), Admissiondata.NetAmount)
      .input("ReferenceBy", sql.VarChar(30), Admissiondata.ReferenceBy)
      .input(
        "ReferenceContactNumber",
        sql.VarChar(30),
        Admissiondata.ReferenceContactNumber
      )
      .input("CreatedBy", sql.BigInt, Admissiondata.CreatedBy)
      .query(sqlQueries.InsertAdmission);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAllAdmission = async (Admissiondata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Admission");
    const GetAdmissions = await pool
      .request()
      .input("FromDate", sql.VarChar(20), Admissiondata.FromDate)
      .input("ToDate", sql.VarChar(20), Admissiondata.ToDate)
      .query(sqlQueries.GetallAdmission);
    return GetAdmissions.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneAdmission = async (AdmissionId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Admission");
    const GetoneAdmission = await pool
      .request()
      .input("AdmissionId", sql.BigInt, AdmissionId)
      .query(sqlQueries.GetoneAdmission);

    return GetoneAdmission.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateAdmission = async ( Admissiondata,doc1,doc2,doc3,doc4) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Admission");
    const UpdateEvent = await pool
      .request()
      .input("AdmissionId", sql.BigInt,Admissiondata.AdmissionId)
      .input("FirstName", sql.VarChar(50), Admissiondata.FirstName)
      .input("LastName", sql.VarChar(50), Admissiondata.LastName)
      .input("FatherName", sql.VarChar(50), Admissiondata.FatherName)
      .input("Dob", sql.SmallDateTime, Admissiondata.Dob)
      .input("Gender", sql.Char(1), Admissiondata.Gender)
      .input("GraduationType", sql.VarChar(10), Admissiondata.GraduationType)
      .input("PhoneNumber", sql.VarChar(20), Admissiondata.PhoneNumber)
      .input("Email", sql.VarChar(50), Admissiondata.Email)
      .input("Address1", sql.VarChar(250), Admissiondata.Address1)
      .input("Address2", sql.VarChar(250), Admissiondata.Address2)
      .input("CityId", sql.BigInt, Admissiondata.CityId)
      .input("StateId", sql.BigInt, Admissiondata.stateId)
      .input("ZipCode", sql.VarChar(10), Admissiondata.ZipCode)
      .input("doc1", sql.VarChar(100),doc1)
      .input("doc2", sql.VarChar(100),doc2)
      .input("doc3", sql.VarChar(100),doc3)
      .input("doc4", sql.VarChar(100),doc4)
      .input("CollegeId", sql.BigInt, Admissiondata.CollegeId)
      .input("DegreeId", sql.BigInt, Admissiondata.DegreeId)
      .input("SslcPer", sql.Numeric(18, 4), Admissiondata.SslcPer)
      .input("SslcPassedout", sql.VarChar(10), Admissiondata.SslcPassedout)
      .input("HscPer", sql.Numeric(18, 4), Admissiondata.HscPer)
      .input("HscPassedout", sql.VarChar(10), Admissiondata.HscPassedout)
      .input("UGPer", sql.Numeric(18, 4), Admissiondata.UGPer)
      .input("UGPassedOut", sql.VarChar(10), Admissiondata.UGPassedOut)
      .input("PGPer", sql.Numeric(18, 4), Admissiondata.PGPer)
      .input("PGPassedOut", sql.VarChar(10), Admissiondata.PGPassedOut)
      .input("PerferenceMode", sql.VarChar(30), Admissiondata.PerferenceMode)
      .input("PerferenceDay", sql.VarChar(30), Admissiondata.PerferenceDay)
      .input(
        "PerferenceTiming",
        sql.VarChar(30),
        Admissiondata.PerferenceTiming
      )
      .input("CourseId", sql.BigInt, Admissiondata.CourseId)
      .input("CourseTechnologyId", sql.BigInt, Admissiondata.CourseTechnologyId)
      .input("WorkingStatus", sql.Char(1), Admissiondata.WorkingStatus)
      .input("WorkingIndustry", sql.VarChar(50), Admissiondata.WorkingIndustry)
      .input("WorkingCompany", sql.VarChar(200), Admissiondata.WorkingCompany)
      .input("DiscountAmount", sql.Numeric(18, 4), Admissiondata.DiscountAmount)
      .input("NetAmount", sql.Numeric(18, 4), Admissiondata.NetAmount)
      .input("ReferenceBy", sql.VarChar(30), Admissiondata.ReferenceBy)
      .input(
        "ReferenceContactNumber",
        sql.VarChar(30),
        Admissiondata.ReferenceContactNumber
      )
      .input("Modifyby", sql.BigInt, Admissiondata.Modifyby)

      .query(sqlQueries.UpdateAdmission);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteAdmission = async (AdmissionId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Transaction/Admission");
    const deleteEvent = await pool
      .request()
      .input("AdmissionId", sql.BigInt, AdmissionId)

      .query(sqlQueries.DeleteAdmission);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertAdmission: InsertAdmission,
  getAllAdmission: getAllAdmission,
  GetOneAdmission: GetOneAdmission,
  UpdateAdmission: UpdateAdmission,
  DeleteAdmission: DeleteAdmission,
};
