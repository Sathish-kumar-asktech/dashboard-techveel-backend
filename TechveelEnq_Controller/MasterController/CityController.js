const CityData = require("../../TechveelEnq_Data/Masters/City");

const GetAllCity = async (req, res, next) => {
  try {
    const Citylist = await CityData.GetAllCity();
    res.send(Citylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetOneCity = async (req, res, next) => {
  try {
    const Cityid = req.params.id;
    const CityOne = await CityData.GetOneCity(Cityid);
    res.send(CityOne);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCity = async (req, res, next) => {
  try {
    const City = req.body;
    const Citylist = await CityData.InsertCity(City);
    res.send(Citylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCity = async (req, res, next) => {
  try {
    const Cityid = req.params.id;
    const City = req.body;
    const Citylist = await CityData.UpdateCity(Cityid, City);
    res.send(Citylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCity = async (req, res, next) => {
  try {
    const Cityid = req.params.id;

    const Citylist = await CityData.DeleteCity(Cityid);
    res.send(Citylist);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetAllCity: GetAllCity,
  GetOneCity:GetOneCity,
  InsertCity: InsertCity,
  UpdateCity: UpdateCity,
  DeleteCity: DeleteCity,
};
