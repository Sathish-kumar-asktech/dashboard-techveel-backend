const EnquiryData = require("../../TechveelEnq_Data/Transaction/Enquiry");

const getAllEnquiry = async (req, res, next) => {
  try {
    const Enquiry = req.body;
    const Enquirylist = await EnquiryData.getAllEnquiry(Enquiry);
    res.send(Enquirylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetallEnquiryforAdmission = async (req, res, next) => {
  try {
    // const Enquiry = req.body;
    const Enquirylist = await EnquiryData.GetallEnquiryforAdmission();
    res.send(Enquirylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetoneEnquiry = async (req, res, next) => {
  try {
    const Enquiryid = req.params.id;
    const EnquiryOne = await EnquiryData.GetOneEnquiry(Enquiryid);
    res.send(EnquiryOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertEnquiry = async (req, res, next) => {
  try {
    const Enquiry = req.body;
    const Enquirylist = await EnquiryData.InsertEnquiry(Enquiry);
    res.send(Enquirylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateEnquiry = async (req, res, next) => {
  try {
    const Enquiryid = req.params.id;
    const Enquiry = req.body;
    const Enquirylist = await EnquiryData.UpdateEnquiry(Enquiryid, Enquiry);
    res.send(Enquirylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteEnquiry = async (req, res, next) => {
  try {
    const Enquiryid = req.params.id;

    const Enquirylist = await EnquiryData.DeleteEnquiry(Enquiryid);
    res.send(Enquirylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getAllEnquiry: getAllEnquiry,
  GetallEnquiryforAdmission: GetallEnquiryforAdmission,
  GetoneEnquiry: GetoneEnquiry,
  InsertEnquiry: InsertEnquiry,
  UpdateEnquiry: UpdateEnquiry,
  DeleteEnquiry: DeleteEnquiry,
};
