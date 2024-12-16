

// import React, { useState } from 'react';
// import Select from 'react-select';

// function InternshipForm() {
//   const [category, setCategory] = useState('');
//   const [selectedSkills, setSelectedSkills] = useState([]);

//   const technologyOptions = [
//     { value: 'design', label: 'User Experience Design' },
//     { value: 'analytics', label: 'Data Analytics' },
//     { value: 'data architecture', label: 'Data Architecture' },
//     { value: 'visualisation', label: 'Data Visualization' },
//     { value: 'digital marketing', label: 'Digital Marketing' },
//     { value: 'full stack', label: 'Full Stack Development' },
//     { value: 'software design', label: 'Software Design/Engineering' },
//     { value: 'cyber', label: 'Cyber Security Architecture' },
//     { value: 'blockchain', label: 'Blockchain' },
//     { value: 'mixed reality', label: 'Mixed Reality' },
//     { value: 'cloud computing', label: 'Cloud Computing' },
//     { value: 'microsoft', label: 'Microsoft Office (Excel, Word, PPT)' },
//   ];

//   const salesOptions = [
//     { value: 'sales', label: 'Sales, Marketing, Branding' },
//     { value: 'fp&a', label: 'Financial Accounting, Costing and FP&A' },
//     { value: 'control', label: 'Audit and Quality Control' },
//     { value: 'training', label: 'Employee Recruitment, Training, Engagement' },
//     { value: 'strategy', label: 'Strategy and Special Projects' },
//     { value: 'corp communication', label: 'Corporate Communication' },
//   ];

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//     setSelectedSkills([]); // Reset selected skills when category changes
//   };

//   const handleSkillsChange = (selectedOptions) => {
//     setSelectedSkills(selectedOptions);
//   };

//   return (
//     <div style={{ marginLeft: '150px', maxWidth: '1000px' }}>
//       <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
//         {/* First Name and Last Name */}
//         <div style={{ display: 'flex', gap: '10px' }}>
//           <div style={{ flex: 1 }}>
//             <label htmlFor="firstName">First Name</label>
//             <input type="text" id="firstName" name="firstName" style={{ width: '100%' }} required />
//           </div>
//           <div style={{ flex: 1 }}>
//             <label htmlFor="lastName">Last Name</label>
//             <input type="text" id="lastName" name="lastName" style={{ width: '100%' }} required />
//           </div>
//         </div>

//         {/* Contact and Email */}
//         <div>
//           <label htmlFor="contact">Contact Number</label>
//           <input type="text" id="contact" name="contact" style={{ width: '100%' }} required />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" name="email" style={{ width: '100%' }} required />
//         </div>

       

//         {/* Select a Category */}
//         <div>
//           <label htmlFor="category">Select Category</label>
//           <select id="category" name="category" style={{ width: '100%' }} value={category} onChange={handleCategoryChange} required>
//             <option value="">--Select--</option>
//             <option value="technology">Technology</option>
//             <option value="sales">Sales</option>
//           </select>
//         </div>

//         {/* Select Skills */}
//         {category && (
//           <div>
//             <label htmlFor="skills">Select Skills</label>
//             <Select
//               id="skills"
//               isMulti
//               options={category === 'technology' ? technologyOptions : salesOptions}
//               value={selectedSkills}
//               onChange={handleSkillsChange}
//               className="multi-select-dropdown"
//               placeholder="Select Skills..."
//             />
//           </div>
//         )}

//          {/* Expectations */}
//          <div>
//           <label htmlFor="expectations">Expectations from the Internship</label>
//           <textarea id="expectations" name="expectations" style={{ width: '100%' }} rows="4" ></textarea>
//         </div>

//         {/* Desired Duration */}
//         <div>
//           <label htmlFor="duration">Desired Duration</label>
//           <select id="duration" name="duration" style={{ width: '100%' }} required>
//             <option value="">--Select--</option>
//             <option value="1 Month">1 Month</option>
//             <option value="3 Months">3 Months</option>
//             <option value="6 Months">6 Months</option>
//             <option value="9 Months">9 Months</option>
//             <option value="12 Months">12 Months</option>
//           </select>
//         </div>

//         {/* LinkedIn */}
//         <div>
//           <label htmlFor="linkedin">LinkedIn Profile Link</label>
//           <input type="url" id="linkedin" name="linkedin" style={{ width: '100%' }}  />
//         </div>

//         {/* Upload Resume */}
//         <div>
//           <label htmlFor="resume">Upload Resume</label>
//           <input type="file" id="resume" name="resume" style={{ width: '100%' }} required />
//         </div>

//         {/* Additional Comments */}
//         <div>
//           <label htmlFor="comments">Additional Comments (if any)</label>
//           <textarea id="comments" name="comments" style={{ width: '100%' }} rows="4"></textarea>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" style={{ width: '15%' } , { alignSelf: 'center'}}>Submit</button>
//       </form>
//     </div>
//   );
// }

// export default InternshipForm;

import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import "./InternshipApplicationForm.css";
import { useNavigate } from 'react-router-dom';


function InternshipForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    category: "",
    requiredSkills: [],
    duration: "",
    linkedin: "",
    additionalComments: "",
    resume: null, // File for resume
  });

  const [selectedSkills, setSelectedSkills] = useState([]);

  const technologyOptions = [
    { value: "design", label: "User Experience Design" },
    { value: "analytics", label: "Data Analytics" },
    { value: "data architecture", label: "Data Architecture" },
    { value: "visualisation", label: "Data Visualization" },
    { value: "digital marketing", label: "Digital Marketing" },
    { value: "full stack", label: "Full Stack Development" },
    { value: "software design", label: "Software Design/Engineering" },
    { value: "cyber", label: "Cyber Security Architecture" },
    { value: "blockchain", label: "Blockchain" },
    { value: "mixed reality", label: "Mixed Reality" },
    { value: "cloud computing", label: "Cloud Computing" },
    { value: "microsoft", label: "Microsoft Office (Excel, Word, PPT)" },
  ];

  const salesOptions = [
    { value: "sales", label: "Sales, Marketing, Branding" },
    { value: "fp&a", label: "Financial Accounting, Costing and FP&A" },
    { value: "control", label: "Audit and Quality Control" },
    { value: "training", label: "Employee Recruitment, Training, Engagement" },
    { value: "strategy", label: "Strategy and Special Projects" },
    { value: "corp communication", label: "Corporate Communication" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
      requiredSkills: [], // Reset skills when category changes
    }));
    setSelectedSkills([]); // Reset selected skills
  };

  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    setFormData((prevData) => ({
      ...prevData,
      requiredSkills: selectedOptions.map((option) => option.value),
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files[0], // Save the uploaded file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads
    const data = new FormData();
    data.append("firstName", formData.firstName);
    data.append("lastName", formData.lastName);
    data.append("contactNumber", formData.contactNumber);
    data.append("email", formData.email);
    data.append("category", formData.category);
    data.append("requiredSkills", JSON.stringify(formData.requiredSkills)); // Send as a JSON string
    data.append("duration", formData.duration);
    data.append("linkedin", formData.linkedin);
    data.append("additionalComments", formData.additionalComments);
    if (formData.resume) {
      data.append("resume", formData.resume); // Append the resume file
    }

    try {
      const response = await axios.post("https://internpark-form-3y9j.vercel.app/intern/submit", data, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the correct content type
        },
      });
    
      if (response.status >= 200 && response.status < 300) {
        console.log("Form submitted successfully");
        navigate("/success");
      } else {
        console.error("Error submitting form. Status:", response.status);
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
    
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        {/* First Name and Last Name */}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        {/* Contact and Email */}
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Select a Category */}
        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">--Select--</option>
            <option value="technology">Technology</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        {/* Select Skills */}
        {formData.category && (
          <div className="form-group">
            <label htmlFor="skills">Select Skills</label>
            <Select
              id="skills"
              isMulti
              options={formData.category === "technology" ? technologyOptions : salesOptions}
              value={selectedSkills}
              onChange={handleSkillsChange}
              className="multi-select-dropdown"
              placeholder="Select Skills..."
            />
          </div>
        )}

        {/* Expectations */}
        <div className="form-group">
          <label htmlFor="additionalComments">Expectations from the Internship</label>
          <textarea
            id="additionalComments"
            name="additionalComments"
            rows="4"
            value={formData.additionalComments}
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* Desired Duration */}
        <div className="form-group">
          <label htmlFor="duration">Desired Duration</label>
          <select
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            required
          >
            <option value="">--Select--</option>
            <option value="1 Month">1 Month</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
            <option value="9 Months">9 Months</option>
            <option value="12 Months">12 Months</option>
          </select>
        </div>

        {/* LinkedIn */}
        <div className="form-group">
          <label htmlFor="linkedin">LinkedIn Profile Link</label>
          <input
            type="url"
            id="linkedin"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleInputChange}
          />
        </div>

        {/* Upload Resume */}
        <div className="form-group">
          <label htmlFor="resume">Upload Resume</label>
          <input type="file" id="resume" name="resume" onChange={handleFileChange} required />
        </div>

         {/* Additional Comments */}
         <div className="form-group">
          <label htmlFor="comments">Additional Comments (if any)</label>
          <textarea id="comments" name="comments" rows="4"></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default InternshipForm;
