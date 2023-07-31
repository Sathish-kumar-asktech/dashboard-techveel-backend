const CourseCategoryData = require("../../TechveelEnq_Data/Masters/CourseCategory");

const getAllCourseCategory = async (req, res, next) => {
  try {
    const CourseCategorylist = await CourseCategoryData.getAllCourseCategory();
    res.send(CourseCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetoneCourseCategory = async (req, res, next) => {
  try {
    const CourseCategoryid = req.params.id;
    const CourseCategoryOne = await CourseCategoryData.GetOneCourseCategory(
      CourseCategoryid
    );
    res.send(CourseCategoryOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCourseCategory = async (req, res, next) => {
  try {
    const CourseCategory = req.body;
    const CourseCategorylist =
      await CourseCategoryData.InsertCourseCategoryMaster(CourseCategory);
    res.send(CourseCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCourseCategory = async (req, res, next) => {
  try {
    const CourseCategoryid = req.params.id;
    const CourseCategory = req.body;
    const CourseCategorylist = await CourseCategoryData.UpdateCourseCategory(
      CourseCategoryid,
      CourseCategory
    );
    res.send(CourseCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCourseCategory = async (req, res, next) => {
  try {
    const CourseCategoryid = req.params.id;

    const CourseCategorylist = await CourseCategoryData.DeleteCourseCategory(
      CourseCategoryid
    );
    res.send(CourseCategorylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllCourseCategory: getAllCourseCategory,
  GetoneCourseCategory: GetoneCourseCategory,
  InsertCourseCategory: InsertCourseCategory,
  UpdateCourseCategory: UpdateCourseCategory,
  DeleteCourseCategory: DeleteCourseCategory,
};
