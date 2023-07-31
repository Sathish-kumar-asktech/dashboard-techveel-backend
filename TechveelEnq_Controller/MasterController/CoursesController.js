const CoursesData = require("../../TechveelEnq_Data/Masters/Courses");

const GetAllCourse = async (req, res, next) => {
  try {
    const CoursesList = await CoursesData.GetAllCourses();
    res.send(CoursesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneCourse = async (req, res, next) => {
  try {
    const CourseId = req.params.id;
    const CourseOne = await CoursesData.GetOneCourses(CourseId);
    res.send(CourseOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCourse = async (req, res, next) => {
  try {
    const Course = req.body;
    const CoursesList = await CoursesData.InsertCourses(Course);
    res.send(CoursesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCourse = async (req, res, next) => {
  try {
    const CourseId = req.params.id;
    const Courses = req.body;
    const CoursesList = await CoursesData.UpdateCourses(CourseId, Courses);
    res.send(CoursesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCourse = async (req, res, next) => {
  try {
    const CourseId = req.params.id;
    const CoursesList = await CoursesData.DeleteCourses(CourseId);
    res.send(CoursesList);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllCourse: GetAllCourse,
  GetOneCourse: GetOneCourse,
  InsertCourse: InsertCourse,
  UpdateCourse: UpdateCourse,
  DeleteCourse: DeleteCourse,
};
