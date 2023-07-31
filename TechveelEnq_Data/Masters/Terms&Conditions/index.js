const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertTNC = async (TCdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Terms&Conditions");
    const insertEvent = await pool
      .request()
      .input("TermsConditions", sql.VarChar(250), TCdata.TermsConditions)
      .input("CreatedBy", sql.BigInt, TCdata.CreatedBy)

      .query(sqlQueries.InsertTNC);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllTNC = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Terms&Conditions");
    const GetAll = await pool.request().query(sqlQueries.GetAllTNC);
    return GetAll.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneTNC = async (TCId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Terms&Conditions");
    const Getone = await pool
      .request()
      .input("TCId", sql.BigInt, TCId)
      .query(sqlQueries.GetOneTNC);

    return Getone.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateTNC = async (TCId, TCdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Terms&Conditions");
    const UpdateEvent = await pool
      .request()
      .input("TCId", sql.BigInt, TCId)

      .input("TermsConditions", sql.VarChar(100), TCdata.TermsConditions)

      .input("ModifyBy", sql.BigInt, TCdata.ModifyBy)

      .query(sqlQueries.UpdateTNC);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteTNC = async (TCId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Terms&Conditions");
    const deleteEvent = await pool
      .request()
      .input("TCId", sql.BigInt, TCId)

      .query(sqlQueries.DeleteTNC);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllTNC: GetAllTNC,
  GetOneTNC: GetOneTNC,
  InsertTNC: InsertTNC,
  UpdateTNC: UpdateTNC,
  DeleteTNC: DeleteTNC,
};
