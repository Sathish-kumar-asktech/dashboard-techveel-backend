const AdmissionData = require("../../TechveelEnq_Data/Transaction/Admission");

const getAllAdmission = async (req, res, next) => {
  try {
    const Admission = req.body;
    const Admissionlist = await AdmissionData.getAllAdmission(Admission);
    res.send(Admissionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetallAdmissionForPayment = async (req, res, next) => {
  try {
    const Admissionlist = await AdmissionData.GetallAdmissionForPayment();
    res.send(Admissionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const GetoneAdmission = async (req, res, next) => {
  try {
    const Admissionid = req.params.id;
    const AdmissionOne = await AdmissionData.GetOneAdmission(Admissionid);
    res.send(AdmissionOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const InsertAdmission = async (req, res, next) => {
  try {
    const Admission = req.body;
    const Admissionlist = await AdmissionData.InsertAdmission(Admission);
    res.send(Admissionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateAdmission = async (req, res, next) => {
  try {
    const Admissionid = req.params.id;
    const Admission = req.body;
    const Admissionlist = await AdmissionData.UpdateAdmission(Admissionid, Admission);
    res.send(Admissionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteAdmission = async (req, res, next) => {
  try {
    const Admissionid = req.params.id;

    const Admissionlist = await AdmissionData.DeleteAdmission(Admissionid);
    res.send(Admissionlist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllAdmission: getAllAdmission,
  GetallAdmissionForPayment:GetallAdmissionForPayment,
  GetoneAdmission: GetoneAdmission,
  InsertAdmission: InsertAdmission,
  UpdateAdmission: UpdateAdmission,
  DeleteAdmission: DeleteAdmission,
};
