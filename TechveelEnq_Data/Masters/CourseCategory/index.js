const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertCourseCategoryMaster = async (CourseCategorydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/CourseCategory");
    const insertEvent = await pool
      .request()
      .input(
        "Course_Category",
        sql.VarChar(50),
        CourseCategorydata.Course_Category
      )
      .input("CreatedBy", sql.BigInt, CourseCategorydata.CreatedBy)
      .query(sqlQueries.InsertCourseCategory);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const getAllCourseCategory = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/CourseCategory");
    const GetCourseCategory = await pool
      .request()
      .query(sqlQueries.GetAllCourseCategory);
    return GetCourseCategory.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneState = async (CourseCategoryId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/CourseCategory");
    const GetoneCourseCategoryId = await pool
      .request()
      .input("CourseCategoryId", sql.BigInt, CourseCategoryId)
      .query(sqlQueries.GetAllCourseCategory.sql);
    return GetoneCourseCategoryId.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCourseCategory = async (CourseCategoryId, CourseCategorydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/CourseCategory");
    const UpdateEvent = await pool
      .request()
      .input("CourseCategoryId", sql.BigInt, CourseCategoryId)
      .input(
        "Course_Category",
        sql.VarChar(150),
        CourseCategorydata.Course_Category
      )
      //   .input("StateInformation", sql.VarChar(1000), CourseCategorydata.StateInformation)
      .input("ModifyBy", sql.BigInt, CourseCategorydata.ModifyBy)
      .query(sqlQueries.UpdateCourseCategory);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCourseCategory = async (CourseCategoryId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/CourseCategory");
    const deleteEvent = await pool
      .request()
      .input("CourseCategoryId", sql.BigInt, CourseCategoryId)
      .query(sqlQueries.DeleteCourseCategory);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertCourseCategoryMaster: InsertCourseCategoryMaster,
  getAllCourseCategory: getAllCourseCategory,
  GetOneState: GetOneState,
  UpdateCourseCategory: UpdateCourseCategory,
  DeleteCourseCategory: DeleteCourseCategory,
};
