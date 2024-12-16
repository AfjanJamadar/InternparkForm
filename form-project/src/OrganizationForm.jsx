import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrganizationForm.css';
import Select from 'react-select';


const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    designation: '',
    employeeName: '',
    projectNature: '',
    contactNumber: '',
    email: '',
    category: '',
    skills: [],
    duration: '',
    experienceCertificate: '',
    paidInternship: '',
    additionalComments: '',
  });

  const [category, setCategory] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const navigate = useNavigate();

  const technologyOptions = [
    { value: 'design', label: 'User Experience Design' },
    { value: 'analytics', label: 'Data Analytics' },
    { value: 'data architecture', label: 'Data Architecture' },
    { value: 'visualisation', label: 'Data Visualization' },
    { value: 'digital marketing', label: 'Digital Marketing' },
    { value: 'full stack', label: 'Full Stack Development' },
    { value: 'software design', label: 'Software Design/Engineering' },
    { value: 'cyber', label: 'Cyber Security Architecture' },
    { value: 'blockchain', label: 'Blockchain' },
    { value: 'mixed reality', label: 'Mixed Reality' },
    { value: 'cloud computing', label: 'Cloud Computing' },
    { value: 'microsoft', label: 'Microsoft Office (Excel, Word, PPT)' },
  ];

  const salesOptions = [
    { value: 'sales', label: 'Sales, Marketing, Branding' },
    { value: 'fp&a', label: 'Financial Accounting, Costing and FP&A' },
    { value: 'control', label: 'Audit and Quality Control' },
    { value: 'training', label: 'Employee Recruitment, Training, Engagement' },
    { value: 'strategy', label: 'Strategy and Special Projects' },
    { value: 'corp communication', label: 'Corporate Communication' },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setSelectedSkills([]);
    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory,
      skills: [],
    }));
  };

  const handleSkillsChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    setFormData((prevFormData) => ({
      ...prevFormData,
      skills: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const preparedData = {
      ...formData,
      skills: selectedSkills.map((skill) => skill.value),
    };

    console.log('Prepared Data for Submission:', preparedData);
  
    try {
      const response = await fetch('https://internpark-form-3y9j.vercel.app/organisation/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preparedData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully');
        navigate('/success');
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-container">
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="organizationName"
            className="form-input"
            placeholder="Organization Name"
            value={formData.organizationName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="designation"
            className="form-input"
            placeholder="Designation"
            value={formData.designation}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="employeeName"
            className="form-input"
            placeholder="Employee Name"
            value={formData.employeeName}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="projectNature"
            className="form-input"
            placeholder="Nature of the project"
            value={formData.projectNature}
            onChange={handleInputChange}
            required
          />
          <input
            type="tel"
            name="contactNumber"
            className="form-input"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Select Category</label>
          <select
            id="category"
            name="category"
            value={category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">--Select--</option>
            <option value="technology">Technology</option>
            <option value="sales">Sales</option>
          </select>
        </div>

        {category && (
          <div className="form-group">
            <label htmlFor="skills">Required Skills</label>
            <Select
              id="skills"
              isMulti
              options={category === 'technology' ? technologyOptions : salesOptions}
              value={selectedSkills}
              onChange={handleSkillsChange}
              className="multi-select-dropdown"
              placeholder="Select Skills..."
            />
          </div>
        )}

        <div className="form-row">
          <select
            name="duration"
            className="form-input"
            value={formData.duration}
            onChange={handleInputChange}
            required
          >
            <option value="">Desired Duration / Availability</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
          </select>

          <select
            name="experienceCertificate"
            className="form-select"
            value={formData.experienceCertificate}
            onChange={handleInputChange}
            required
          >
            <option value="">Grant Experience Certificate:</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <select
            name="paidInternship"
            className="form-select"
            value={formData.paidInternship}
            onChange={handleInputChange}
            required
          >
            <option value="">Paid Internship:</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

          <textarea
            name="additionalComments"
            className="form-textarea"
            placeholder="Additional Comments (if any)"
            value={formData.additionalComments}
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OrganizationForm;




// import React, { useState } from "react";
// import "./OrganizationForm.css";
// import axios from "axios";

// function OrganizationForm() {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     designation: "",
//     employeeName: "",
//     projectNature: "",
//     contactNumber: "",
//     email: "",
//     requiredSkills: "",
//     desiredDuration: "",
//     expertiseCertificate: "",
//     paidInternship: "",
//     additionalComments: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/submit", formData);
//       alert("Form submitted successfully!");
//       setFormData({
//         organizationName: "",
//         designation: "",
//         employeeName: "",
//         projectNature: "",
//         contactNumber: "",
//         email: "",
//         requiredSkills: "",
//         desiredDuration: "",
//         expertiseCertificate: "",
//         paidInternship: "",
//         additionalComments: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form.");
//     }
//   };

//   return (
//     <div className="organization-form-container">
//       <form className="organization-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Organization Name</label>
//           <input
//             type="text"
//             name="organizationName"
//             value={formData.organizationName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Designation</label>
//           <input
//             type="text"
//             name="designation"
//             value={formData.designation}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Employee Name</label>
//           <input
//             type="text"
//             name="employeeName"
//             value={formData.employeeName}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Nature of the Project</label>
//           <input
//             type="text"
//             name="projectNature"
//             value={formData.projectNature}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Contact Number</label>
//           <input
//             type="tel"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Required Skills</label>
//           <input
//             type="text"
//             name="requiredSkills"
//             value={formData.requiredSkills}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Desired Duration</label>
//           <select
//             name="desiredDuration"
//             value={formData.desiredDuration}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Duration</option>
//             <option value="1-month">1 Month</option>
//             <option value="3-month">3 Months</option>
//             <option value="6-month">6 Months</option>
//             <option value="9-month">9 Months</option>
//             <option value="12-month">12 Months</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Grant Expertise Experience Certificate</label>
//           <select
//             name="expertiseCertificate"
//             value={formData.expertiseCertificate}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Paid Internship</label>
//           <select
//             name="paidInternship"
//             value={formData.paidInternship}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Option</option>
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Additional Comments</label>
//           <textarea
//             name="additionalComments"
//             value={formData.additionalComments}
//             onChange={handleChange}
//           ></textarea>
//         </div>
//         <div className="form-submit">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default OrganizationForm;
