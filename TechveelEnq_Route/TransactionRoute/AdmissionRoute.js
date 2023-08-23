const express = require("express");
const AdmissionController = require("../../TechveelEnq_Controller/TransactionController/AdmissionController");
const AdmissionData = require("../../TechveelEnq_Data/Transaction/Admission");
const multer = require("multer");
const path = require("path");

const router = express.Router();
const jwt = require("jsonwebtoken");
function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

const storage = multer.diskStorage({
  destination: "public/AdmissionDocs",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const fillefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf" ||
    file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fillefilter,
}).fields([
  { name: "doc1", maxCount: 1 },
  { name: "doc2", maxCount: 1 },
  { name: "doc3", maxCount: 1 },
  { name: "doc4", maxCount: 1 },
]);

router.post("/InsertAdmission", upload, async (req, res) => {
  try {
    let img1 = "";
    let img2 = "";
    let img3 = "";
    let img4 = "";

    const data = req.body;

    const image1 = req.files.doc1;

    console.log(typeof image1);
    if (image1) {
      image1.map((data) => {
        img1 = data.filename;
      });
    } else {
      img1 = "";
    }

    console.log(img1);

    var image2 = req.files.doc2;
    if (image2) {
      image2.map((data) => {
        img2 = data.filename;
      });
    } else {
      img2 = "";
    }

    console.log(img2);

    var image3 = req.files.doc3;
    if (image3) {
      image3.map((data) => {
        img3 = data.filename;
      });
    } else {
      img3 = "";
    }

    console.log(img3);

    var image4 = req.files.doc4;
    if (image4) {
      image4.map((data) => {
        img4 = data.filename;
      });
    } else {
      img4 = "";
    }

    console.log(img4);
    console.log(data, img1, img2, img3, img4, "Datas");
    const InsertEvent = await AdmissionData.InsertAdmission(
      data,
      img1,
      img2,
      img3,
      img4
    );
    res.send(InsertEvent);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message, "error");
  }
});

router.put("/UpdateAdmission", upload, async (req, res) => {
  try {
    let img1 = "";
    let img2 = "";
    let img3 = "";
    let img4 = "";

    const data = req.body;

    const image1 = req.files.doc1;

    console.log(typeof image1);
    if (image1) {
      image1.map((data) => {
        img1 = data.filename;
      });
    } else {
      img1 = "";
    }

    console.log(img1);

    var image2 = req.files.doc2;
    if (image2) {
      image2.map((data) => {
        img2 = data.filename;
      });
    } else {
      img2 = "";
    }

    console.log(img2);

    var image3 = req.files.doc3;
    if (image3) {
      image3.map((data) => {
        img3 = data.filename;
      });
    } else {
      img3 = "";
    }

    console.log(img3);

    var image4 = req.files.doc4;
    if (image4) {
      image4.map((data) => {
        img4 = data.filename;
      });
    } else {
      img4 = "";
    }

    console.log(img4);
    console.log(data, img1, img2, img3, img4, "Datas");
    const UpdateEvent = await AdmissionData.UpdateAdmission(
      data,
      img1,
      img2,
      img3,
      img4
    );
    res.send(UpdateEvent);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message, "error");
  }
});
router.post(
  "/GetAllAdmission",
  verifytoken,
  AdmissionController.getAllAdmission
);
router.get(
  "/GetallAdmissionForMIS",
  verifytoken,
  AdmissionController.GetallAdmissionForMIS
);
router.put(
  "/GetAllAdmission",
  verifytoken,
  AdmissionController.getAllAdmission
);
router.get(
  "/GetOneAdmission/:id",
  verifytoken,
  AdmissionController.GetoneAdmission
);
router.get(
  "/GetallAdmissionForPayment",
  verifytoken,
  AdmissionController.GetallAdmissionForPayment
);
router.delete(
  "/deleteAdmission/:id",
  verifytoken,
  AdmissionController.DeleteAdmission
);

module.exports = {
  TechveelEnq_Route: router,
};
