const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertCity = async (Citydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/City");
    const insertEvent = await pool
      .request()
      .input("CityName", sql.VarChar(50), Citydata.CityName)
      .input("StateId", sql.BigInt, Citydata.StateId)
      .input("CreatedBy", sql.BigInt, Citydata.CreatedBy)
      .query(sqlQueries.InsertCity);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllCity = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/City");
    const GetCity = await pool.request().query(sqlQueries.GetAllCity);
    return GetCity.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneCity = async (CityId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/City");
    const GetoneCity = await pool
      .request()
      .input("CityId", sql.BigInt, CityId)
      .query(sqlQueries.GetOneCity);

    return GetoneCity.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCity = async (CityId, Citydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/City");
    const UpdateEvent = await pool
      .request()
      .input("CityId", sql.BigInt, CityId)
      .input("StateId", sql.BigInt, Citydata.StateId)
      .input("CityName", sql.VarChar(100), Citydata.CityName)
      .input("ModifyBy", sql.BigInt, Citydata.ModifyBy)
      .query(sqlQueries.UpdateCity);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCity = async (CityId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/City");
    const deleteEvent = await pool
      .request()
      .input("CityId", sql.BigInt, CityId)

      .query(sqlQueries.DeleteCity);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  GetAllCity: GetAllCity,
  GetOneCity: GetOneCity,
  InsertCity: InsertCity,
  UpdateCity: UpdateCity,
  DeleteCity: DeleteCity,
};
