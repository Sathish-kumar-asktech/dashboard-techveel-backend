const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");

const config = require("./Config");
const ContactRoute = require("./TechveelEnq_Route/MasterRoute/StateRoute");
const CityRoute = require("./TechveelEnq_Route/MasterRoute/CityRoute");
const CollegeRoute = require("./TechveelEnq_Route/MasterRoute/CollegeRoute");
const TermsNConditionsRoute = require("./TechveelEnq_Route/MasterRoute/Terms&ConditionsRoute");
const DegreeRoute = require("./TechveelEnq_Route/MasterRoute/DegreeRoute");
const CourseCategoryRoute = require("./TechveelEnq_Route/MasterRoute/CourseCategoryRoute");
const Courses = require("./TechveelEnq_Route/MasterRoute/CourseRoute");

///trasaction
const EnquiryRoute = require("./TechveelEnq_Route/TransactionRoute/EnquiryRoute");
const AdmissionRoute = require("./TechveelEnq_Route/TransactionRoute/AdmissionRoute");

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(express.static('Public'))
app.use('/api/AdmissionDocs', express.static('Public/AdmissionDocs'))

app.use("/api", ContactRoute.TechveelEnq_Route);
app.use("/api", CityRoute.TechveelEnq_Route);
app.use("/api", CollegeRoute.TechveelEnq_Route);
app.use("/api", TermsNConditionsRoute.TechveelEnq_Route);
app.use("/api", DegreeRoute.TechveelEnq_Route);
app.use("/api", CourseCategoryRoute.TechveelEnq_Route);
app.use("/api", Courses.TechveelEnq_Route);
app.use("/api", Courses.TechveelEnq_Route);
///trasaction
app.use("/api", EnquiryRoute.TechveelEnq_Route);
app.use("/api", AdmissionRoute.TechveelEnq_Route);

app.listen(config.port, () => {
  console.log("app listening on url http://localhost:" + config.port);
});
