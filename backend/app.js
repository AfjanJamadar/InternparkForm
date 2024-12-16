// const express=require("express");
// const app=express();
// const mongoose=require("mongoose");
// const path=require("path");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const multer = require("multer");
// require('dotenv').config();

// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage });



// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "../form-project/dist"))); 
// app.use(express.static(path.join(__dirname, "../"))); 


// mongoose.connect(
//   process.env.MONGO_URL
//   )
//     .then(() => console.log('Connected to MongoDB Atlas!!'))
//     .catch((err) => console.error('Connection error:', err));
  

//     const formSchema = new mongoose.Schema({
//         organizationName: { type: String, required: true },
//         designation: { type: String, required: true },
//         employeeName: { type: String, required: true },
//         projectNature: { type: String, required: true },
//         contactNumber: { type: String, required: true },
//         email: { type: String, required: true },
//         category: { type: String, required: true },
//         requiredSkills: { type: [String], default: [] }, 
//         duration: { type: String, required: true },
//         paidInternship: { type: String, required: true },
//         additionalComments: { type: String },
//       });
 
//   const FormData = mongoose.model("OrganisationData", formSchema);

//   const internSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     contactNumber: { type: String, required: true },
//     email: { type: String, required: true },
//     category: { type: String, required: true },
//     requiredSkills: { type: [String], default: [] },
//     duration: { type: String, required: true },
//     linkedin: { type: String },
//     resume: { data: Buffer, contentType: String }, 
//     additionalComments: { type: String },
//   });
  
//   const InternData = mongoose.model("InternData", internSchema);
  
  
//   // API Endpoint for Submitting Form Data
//   app.post("/organisation/submit", async (req, res) => {
//     try {

//         const formInfo = {
//             organizationName: req.body.organizationName,
//             designation: req.body.designation,
//             employeeName: req.body.employeeName,
//             projectNature: req.body.projectNature,
//             contactNumber: req.body.contactNumber,
//             email: req.body.email,
//             category: req.body.category,
//             requiredSkills: req.body.skills || [], // Should be an array
//             duration: req.body.duration,
//             paidInternship: req.body.paidInternship,
//             additionalComments: req.body.additionalComments,
//           };
    
//       console.log(formInfo.requiredSkills);
//       const formData = new FormData(formInfo);
//       await formData.save();
//       console.log("Successful submission!");
//       res.status(200).send("Form data saved successfully");
//       console.log("data saved successfully");

//     } catch (error) {
//       res.status(500).send("Error saving form data");
//     }
//   });
  
//   app.post("/intern/submit", upload.single("resume"), async (req, res) => {
//     try {
//       const internInfo = {
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         contactNumber: req.body.contactNumber,
//         email: req.body.email,
//         category: req.body.category,
//         requiredSkills: req.body.requiredSkills ? JSON.parse(req.body.requiredSkills) : [],
//         duration: req.body.duration,
//         linkedin: req.body.linkedin,
//         resume: {
//           data: req.file.buffer, 
//           contentType: req.file.mimetype, 
//         },
//         additionalComments: req.body.additionalComments,
//       };
  
//       const internData = new InternData(internInfo);
//       await internData.save();
//       console.log("Intern Successful submission!");
//       res.status(200).send("Internship application submitted successfully");
//     } catch (error) {
//       console.error("Error saving internship application:", error);
//       res.status(500).send("Error saving internship application");
//     }
//   });


//   // Route: Serve landing page
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../index.html"));
// });

// // Route: Serve React frontend for subpaths
// app.get("/hire-interns", (req, res) => {
//   res.sendFile(path.join(__dirname, "../form-project/dist/index.html"));
// });

// app.get("/apply-internships", (req, res) => {
//   res.sendFile(path.join(__dirname, "../form-project/dist/index.html"));
// });

//   // Start the Server
//   const PORT = 5000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
  

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
require('dotenv').config();

const app = express();

// Middleware to handle CORS (allow requests from frontend)
app.use(cors());

// Body parsing middleware
app.use(bodyParser.json());
app.use(express.json());

// Set up multer for file uploads (optional)
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// MongoDB connection using MONGO_URL from .env
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch((err) => console.error('Connection error:', err));

// Define schema for organization form data
const formSchema = new mongoose.Schema({
  organizationName: { type: String, required: true },
  designation: { type: String, required: true },
  employeeName: { type: String, required: true },
  projectNature: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  requiredSkills: { type: [String], default: [] },
  duration: { type: String, required: true },
  paidInternship: { type: String, required: true },
  additionalComments: { type: String },
});

const FormData = mongoose.model("OrganisationData", formSchema);

// Define schema for internship application form data
const internSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  category: { type: String, required: true },
  requiredSkills: { type: [String], default: [] },
  duration: { type: String, required: true },
  linkedin: { type: String },
  resume: { data: Buffer, contentType: String },
  additionalComments: { type: String },
});

const InternData = mongoose.model("InternData", internSchema);

// API endpoint to submit organization form data
app.post("/organisation/submit", async (req, res) => {
  try {
    const formInfo = {
      organizationName: req.body.organizationName,
      designation: req.body.designation,
      employeeName: req.body.employeeName,
      projectNature: req.body.projectNature,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      category: req.body.category,
      requiredSkills: req.body.skills || [], // Array of skills
      duration: req.body.duration,
      paidInternship: req.body.paidInternship,
      additionalComments: req.body.additionalComments,
    };

    const formData = new FormData(formInfo);
    await formData.save();
    console.log("Successful organization form submission!");
    res.status(200).send("Form data saved successfully");
  } catch (error) {
    console.error("Error saving organization form data:", error);
    res.status(500).send("Error saving form data");
  }
});

// API endpoint to submit internship application data
app.post("/intern/submit", upload.single("resume"), async (req, res) => {
  try {
    const internInfo = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      category: req.body.category,
      requiredSkills: req.body.requiredSkills ? JSON.parse(req.body.requiredSkills) : [],
      duration: req.body.duration,
      linkedin: req.body.linkedin,
      resume: {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      },
      additionalComments: req.body.additionalComments,
    };

    const internData = new InternData(internInfo);
    await internData.save();
    console.log("Successful internship application submission!");
    res.status(200).send("Internship application submitted successfully");
  } catch (error) {
    console.error("Error saving internship application:", error);
    res.status(500).send("Error saving internship application");
  }
});

// Start the Server on a specified port (e.g., 5000)
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



module.exports = app;

