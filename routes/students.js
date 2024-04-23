const express=require("express");
const user=express();

const multer=require("multer");

const path=require("path");

const bodyParser =require("body-parser");
// const { importStudent } = require("../controllers/students");


user.use(bodyParser.urlencoded({extended:false}));


// user.use(express.static(path.join(__dirname,"public")));

const storage=multer.diskStorage({
    destination:(req,file,cb) =>{
        return cb(null,"./uploads")
    },

    filename:(req,file,cb)=>{
        return cb(null,file.originalname)
    }
});
const XLSX = require('xlsx');
const fs = require('fs');

const importStudent = (req, res) => {
  try {
    // Check if req.file contains the uploaded Excel file
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Read the uploaded file
    const workbook = XLSX.readFile(req.file.path);
    const worksheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[worksheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Process the data (e.g., save it to a database)
    // Your code for processing the student data goes here

    // Optionally, you can remove the uploaded file after processing
    fs.unlinkSync(req.file.path);

    // Respond with a success message
    res.status(200).json({ message: 'Student data imported successfully' });
  } catch (error) {
    console.error('Error importing student data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  importStudent,
};

const upload=multer({storage:storage});

 const studentController=require("../controllers/students");

user.post("/importStudent",upload.single("file"),studentController.importStudent)
module.exports=user;

