const utils = require("../../Utill");
const config = require("../../../Config");

const sql = require("mssql");

const InsertCourses = async (Coursesdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Courses");
    const insertEvent = await pool
      .request()
      .input("Course_Name", sql.VarChar(250), Coursesdata.Course_Name)
      .input("Course_Duration", sql.VarChar(250), Coursesdata.Course_Duration)
      .input("Course_Fee", sql.Int, Coursesdata.Course_Fee)
      .input("CourseCategoryId", sql.BigInt, Coursesdata.CourseCategoryId)
      .input("CreatedBy", sql.BigInt, Coursesdata.CreatedBy)
      .query(sqlQueries.InsertCourses);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetAllCourses = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Courses");
    const GetCourses = await pool.request().query(sqlQueries.GetAllCourses);
    return GetCourses.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetOneCourses = async (CourseId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Courses");
    const GetoneCourse = await pool
      .request()
      .input("CourseId", sql.BigInt, CourseId)
      .query(sqlQueries.GetOneCourses);

    return GetoneCourse.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCourses = async (CourseId, Coursesdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Courses");
    const UpdateEvent = await pool
      .request()
      .input("CourseId", sql.BigInt, CourseId)
      .input("Course_Name", sql.VarChar(250), Coursesdata.Course_Name)
      .input("Course_Duration", sql.VarChar(250), Coursesdata.Course_Duration)
      .input("Course_Fee", sql.Int, Coursesdata.Course_Fee)
      .input("CourseCategoryId", sql.BigInt, Coursesdata.CourseCategoryId)
      .input("ModifyBy", sql.BigInt, Coursesdata.ModifyBy)
      .query(sqlQueries.UpdateCourses);
    return UpdateEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCourses = async (CourseId) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Masters/Courses");
    const deleteEvent = await pool
      .request()
      .input("CourseId", sql.BigInt, CourseId)
      .query(sqlQueries.DeleteCourses);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  InsertCourses:InsertCourses,
  GetAllCourses: GetAllCourses,
  GetOneCourses: GetOneCourses,
  UpdateCourses: UpdateCourses,
  DeleteCourses: DeleteCourses,
};
