const Student = require("../models/students");
const csv = require("csvtojson");
const fs = require("fs");

exports.importStudent = async (req, res) => {
  try {
    var studentData = [];
    csv()
      .fromFile(req.file.path)
      .then(async (response) => {
        for (var x = 0; x < response.length; x++) {
          studentData.push({
            name: response[x].Name,
            email: response[x].Email,
            phone_number: response[x].Phone,
            address: response[x].Address,
            caste: response[x].Caste,
            gender: response[x].Gender,
            aadhar: response[x].Aadhar,
            aadhar_image: response[x].Aadharimg,
            certificate_image: response[x].Certificateimg,
          });
        }
        await Student.insertMany(studentData);
      });
    res.send({ status: 200, successs: true, msg: "Data imported successfully" });
  } catch (error) {
    res.send({ status: 400, successs: false, msg: error.message });
  }
};
