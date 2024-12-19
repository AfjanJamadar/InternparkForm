

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

// import React, { useState } from "react";
// import Select from "react-select";
// import axios from "axios";
// import "./InternshipApplicationForm.css";
// import { useNavigate } from 'react-router-dom';


// function InternshipForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     contactNumber: "",
//     email: "",
//     category: "",
//     department: "",
//     skills: [],
//     customSkills:"",
//     duration: "",
//     linkedin: "",
//     additionalComments: "",
//     resume: null, // File for resume
//   });

 
//   const skillsByDepartment = {
//     It: [
//       { value: 'design', label: 'User Experience Design' },
//       { value: 'analytics', label: 'Data Analytics' },
//       { value: 'data architecture', label: 'Data Architecture' },
//       { value: 'visualisation', label: 'Data Visualization' },
//       { value: 'digital marketing', label: 'Digital Marketing' },
//       { value: 'full stack', label: 'Full Stack Development' },
//       { value: 'software design', label: 'Software Design/Engineering' },
//       { value: 'cyber', label: 'Cyber Security Architecture' },
//       { value: 'blockchain', label: 'Blockchain' },
//       { value: 'mixed reality', label: 'Mixed Reality' },
//       { value: 'cloud computing', label: 'Cloud Computing' },
//       { value: 'microsoft', label: 'Microsoft Office (Excel, Word, PPT)' },
//     ],
//     sales: [
//       { value: 'lead generation', label: 'Lead Generation and Conversion' },
//       { value: 'relationship building', label: 'Relationship Building' },
//       { value: 'negotiation', label: 'Negotiation and Persuasion' },
//       { value: 'crm tools', label: 'CRM Tools' },
//       { value: 'pipeline management', label: 'Territory and Pipeline Management' },
//     ],
//     marketing: [
//       { value: 'branding', label: 'Branding and Positioning' },
//       { value: 'digital marketing', label: 'Digital Marketing (SEO, SEM, Social Media)' },
//       { value: 'content creation', label: 'Content Creation and Copywriting' },
//       { value: 'market research', label: 'Market Research and Analytics' },
//       { value: 'campaign management', label: 'Campaign Management' },
//     ],
//     finance: [
//       { value: 'financial planning', label: 'Financial Planning and Analysis' },
//       { value: 'budgeting', label: 'Budgeting and Forecasting' },
//       { value: 'bookkeeping', label: 'Bookkeeping and Auditing' },
//       { value: 'tax compliance', label: 'Tax Compliance' },
//       { value: 'cost control', label: 'Cost Control and Risk Management' },
//     ],
//     hr: [
//       { value: 'recruitment', label: 'Recruitment and Talent Acquisition' },
//       { value: 'employee relations', label: 'Employee Relations and Conflict Resolution' },
//       { value: 'training', label: 'Training and Development' },
//       { value: 'compliance', label: 'Compliance and Labor Laws' },
//       { value: 'people analytics', label: 'People Analytics and HR Software' },
//     ],
//     operations: [
//       { value: 'process optimization', label: 'Process Optimization' },
//       { value: 'supply chain', label: 'Supply Chain Management' },
//       { value: 'inventory control', label: 'Inventory Control' },
//       { value: 'quality assurance', label: 'Quality Assurance' },
//       { value: 'strategic planning', label: 'Strategic Planning' },
//     ],
//     audit: [
//       { value: 'attention to detail', label: 'Attention to Detail' },
//       { value: 'analytical thinking', label: 'Analytical Thinking' },
//       { value: 'knowledge of standards', label: 'Knowledge of Standards and Regulations' },
//       { value: 'risk assessment', label: 'Risk Assessment' },
//       { value: 'process evaluation', label: 'Process Evaluation' },
//       { value: 'data analysis', label: 'Data Analysis and Interpretation' },
//       { value: 'problem solving', label: 'Problem-Solving' },
//       { value: 'root cause', label: 'Root Cause Analysis' },
//       { value: 'effective communication', label: 'Effective Communication' },
//       { value: 'reporting', label: 'Reporting and Documentation' },
//       { value: 'process improvement', label: 'Process Improvement' },
//       { value: 'team collaboration', label: 'Team Collaboration' },
//     ],
//     strategy: [
//       { value: 'strategic planning', label: 'Strategic Planning' },
//       { value: 'analytical thinking', label: 'Analytical Thinking' },
//       { value: 'project management', label: 'Project Management' },
//       { value: 'problem solving', label: 'Problem-Solving' },
//       { value: 'stakeholder management', label: 'Stakeholder Management' },
//       { value: 'decision making', label: 'Decision-Making' },
//       { value: 'communication skills', label: 'Communication Skills' },
//       { value: 'innovation', label: 'Innovation and Creativity' },
//       { value: 'data interpretation', label: 'Data Interpretation' },
//       { value: 'risk management', label: 'Risk Management' },
//     ],
//     rnd: [
//       { value: 'innovation', label: 'Innovation and Problem-Solving' },
//       { value: 'data analysis', label: 'Data Analysis and Modeling' },
//       { value: 'technical writing', label: 'Technical Writing' },
//       { value: 'collaboration', label: 'Collaboration with Cross-Functional Teams' },
//       { value: 'project management', label: 'Project Management' },
//     ],
//     customerService: [
//       { value: 'communication', label: 'Communication and Active Listening' },
//       { value: 'problem solving', label: 'Problem-Solving and Conflict Resolution' },
//       { value: 'empathy', label: 'Empathy and Emotional Intelligence' },
//       { value: 'crm software', label: 'CRM Software' },
//       { value: 'product knowledge', label: 'Product Knowledge' },
//     ],
//     legal: [
//       { value: 'regulatory compliance', label: 'Regulatory Compliance' },
//       { value: 'contract negotiation', label: 'Contract Negotiation and Drafting' },
//       { value: 'risk assessment', label: 'Risk Assessment' },
//       { value: 'intellectual property', label: 'Intellectual Property Management' },
//       { value: 'litigation management', label: 'Litigation Management' },
//     ],
//     executiveLeadership: [
//       { value: 'strategic thinking', label: 'Strategic Thinking and Vision Setting' },
//       { value: 'decision making', label: 'Decision-Making' },
//       { value: 'stakeholder management', label: 'Stakeholder Management' },
//       { value: 'crisis management', label: 'Crisis Management' },
//       { value: 'leadership development', label: 'Leadership and Team Development' },
//     ],
//     procurement: [
//       { value: 'vendor management', label: 'Vendor Relationship Management' },
//       { value: 'negotiation', label: 'Negotiation' },
//       { value: 'cost analysis', label: 'Cost Analysis and Budgeting' },
//       { value: 'contract management', label: 'Contract Management' },
//       { value: 'ethical sourcing', label: 'Ethical Sourcing' },
//     ],
//     publicRelations: [
//       { value: 'media relations', label: 'Media Relations' },
//       { value: 'crisis communication', label: 'Crisis Communication' },
//       { value: 'storytelling', label: 'Storytelling and Brand Advocacy' },
//       { value: 'social media', label: 'Social Media Management' },
//       { value: 'event planning', label: 'Event Planning' },
//     ],
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//  const handleSkillsChange = (selectedSkills) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       skills: selectedSkills ? selectedSkills.map((skill) => skill.value) : [],
//     }));
//   };

  
//     const handleCustomSkillsChange = (e) => {
//       setFormData((prevData) => ({
//         ...prevData,
//         customSkills: e.target.value,
//       }));
//     };

//   const handleFileChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       resume: e.target.files[0], // Save the uploaded file
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create FormData object to handle file uploads
    // const data = new FormData();
    // data.append("firstName", formData.firstName);
    // data.append("lastName", formData.lastName);
    // data.append("contactNumber", formData.contactNumber);
    // data.append("email", formData.email);
    // data.append("category", formData.category);
    // data.append("requiredSkills", JSON.stringify(formData.requiredSkills)); // Send as a JSON string
    // data.append("duration", formData.duration);
    // data.append("linkedin", formData.linkedin);
    // data.append("additionalComments", formData.additionalComments);
    // if (formData.resume) {
    //   data.append("resume", formData.resume); // Append the resume file
    // }

    // try {
    //   const response = await axios.post("https://internpark-form-88ik.vercel.app/intern/submit", data, {
    //     headers: {
    //       "Content-Type": "multipart/form-data", // Set the correct content type
    //     },
    //   });
    
    //   if (response.status >= 200 && response.status < 300) {
    //     console.log("Form submitted successfully");
    //     navigate("/success");
    //   } else {
    //     console.error("Error submitting form. Status:", response.status);
    //     alert("Error submitting form. Please try again.");
    //   }
    // } catch (error) {
    //   console.error("Error submitting form:", error);
    //   alert("Error submitting form. Please try again.");
    // }
    
//   };

//   return (
//     <div className="container">
//       <form className="form" onSubmit={handleSubmit}>
//         {/* First Name and Last Name */}
//         <div className="form-row">
//           <div className="form-group">
//             <label htmlFor="firstName">First Name</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="lastName">Last Name</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//         </div>

//         {/* Contact and Email */}
//         <div className="form-group">
//           <label htmlFor="contactNumber">Contact Number</label>
//           <input
//             type="text"
//             id="contactNumber"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleInputChange}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         {/* Select a Category */}
//         <div className="form-group">
//           <label htmlFor="category">Select Category</label>
//           <select
//             id="category"
//             name="category"
//             value={formData.category}
//             onChange={handleCategoryChange}
//             required
//           >
//             <option value="">--Select--</option>
//             <option value="technology">Technology</option>
//             <option value="sales">Sales</option>
//           </select>
//         </div>

//         {/* Select Skills */}
//         {formData.category && (
//           <div className="form-group">
//             <label htmlFor="skills">Select Skills</label>
//             <Select
//               id="skills"
//               isMulti
//               options={formData.category === "technology" ? technologyOptions : salesOptions}
//               value={selectedSkills}
//               onChange={handleSkillsChange}
//               className="multi-select-dropdown"
//               placeholder="Select Skills..."
//             />
//           </div>
//         )}

//         {/* Expectations */}
//         <div className="form-group">
//           <label htmlFor="additionalComments">Expectations from the Internship</label>
//           <textarea
//             id="additionalComments"
//             name="additionalComments"
//             rows="4"
//             value={formData.additionalComments}
//             onChange={handleInputChange}
//           ></textarea>
//         </div>

//         {/* Desired Duration */}
//         <div className="form-group">
//           <label htmlFor="duration">Desired Duration</label>
//           <select
//             id="duration"
//             name="duration"
//             value={formData.duration}
//             onChange={handleInputChange}
//             required
//           >
//             <option value="">--Select--</option>
//             <option value="1 Month">1 Month</option>
//             <option value="3 Months">3 Months</option>
//             <option value="6 Months">6 Months</option>
//             <option value="9 Months">9 Months</option>
//             <option value="12 Months">12 Months</option>
//           </select>
//         </div>

//         {/* LinkedIn */}
//         <div className="form-group">
//           <label htmlFor="linkedin">LinkedIn Profile Link</label>
//           <input
//             type="url"
//             id="linkedin"
//             name="linkedin"
//             value={formData.linkedin}
//             onChange={handleInputChange}
//           />
//         </div>

//         {/* Upload Resume */}
//         <div className="form-group">
//           <label htmlFor="resume">Upload Resume</label>
//           <input type="file" id="resume" name="resume" onChange={handleFileChange} required />
//         </div>

//          {/* Additional Comments */}
//          <div className="form-group">
//           <label htmlFor="comments">Additional Comments (if any)</label>
//           <textarea id="comments" name="comments" rows="4"></textarea>
//         </div>

//         {/* Submit Button */}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default InternshipForm;



import React, { useState , useEffect } from "react";
import Select from "react-select";
import { components } from "react-select";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "./InternshipApplicationForm.css";

function InternshipApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNo: '',
    email: '',
    department: "",
    skills: [],
    customSkills:"",
    customDepartment:'',
    linkedinLink: '',
    resume: null,
    additionalComments: '',
    availability:'',
    expectations:"",
    startDate: "",
    endDate: "",
  });

   const [selectedSkills, setSelectedSkills] = useState([]);
    const navigate = useNavigate();
  
  const skillsByDepartment = {
    It: [
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
    ],
    sales: [
      { value: 'lead generation', label: 'Lead Generation and Conversion' },
      { value: 'relationship building', label: 'Relationship Building' },
      { value: 'negotiation', label: 'Negotiation and Persuasion' },
      { value: 'crm tools', label: 'CRM Tools' },
      { value: 'pipeline management', label: 'Territory and Pipeline Management' },
    ],
    marketing: [
      { value: 'branding', label: 'Branding and Positioning' },
      { value: 'digital marketing', label: 'Digital Marketing (SEO, SEM, Social Media)' },
      { value: 'content creation', label: 'Content Creation and Copywriting' },
      { value: 'market research', label: 'Market Research and Analytics' },
      { value: 'campaign management', label: 'Campaign Management' },
    ],
    finance: [
      { value: 'financial planning', label: 'Financial Planning and Analysis' },
      { value: 'budgeting', label: 'Budgeting and Forecasting' },
      { value: 'bookkeeping', label: 'Bookkeeping and Auditing' },
      { value: 'tax compliance', label: 'Tax Compliance' },
      { value: 'cost control', label: 'Cost Control and Risk Management' },
    ],
    hr: [
      { value: 'recruitment', label: 'Recruitment and Talent Acquisition' },
      { value: 'employee relations', label: 'Employee Relations and Conflict Resolution' },
      { value: 'training', label: 'Training and Development' },
      { value: 'compliance', label: 'Compliance and Labor Laws' },
      { value: 'people analytics', label: 'People Analytics and HR Software' },
    ],
    operations: [
      { value: 'process optimization', label: 'Process Optimization' },
      { value: 'supply chain', label: 'Supply Chain Management' },
      { value: 'inventory control', label: 'Inventory Control' },
      { value: 'quality assurance', label: 'Quality Assurance' },
      { value: 'strategic planning', label: 'Strategic Planning' },
    ],
    audit: [
      { value: 'attention to detail', label: 'Attention to Detail' },
      { value: 'analytical thinking', label: 'Analytical Thinking' },
      { value: 'knowledge of standards', label: 'Knowledge of Standards and Regulations' },
      { value: 'risk assessment', label: 'Risk Assessment' },
      { value: 'process evaluation', label: 'Process Evaluation' },
      { value: 'data analysis', label: 'Data Analysis and Interpretation' },
      { value: 'problem solving', label: 'Problem-Solving' },
      { value: 'root cause', label: 'Root Cause Analysis' },
      { value: 'effective communication', label: 'Effective Communication' },
      { value: 'reporting', label: 'Reporting and Documentation' },
      { value: 'process improvement', label: 'Process Improvement' },
      { value: 'team collaboration', label: 'Team Collaboration' },
    ],
    strategy: [
      { value: 'strategic planning', label: 'Strategic Planning' },
      { value: 'analytical thinking', label: 'Analytical Thinking' },
      { value: 'project management', label: 'Project Management' },
      { value: 'problem solving', label: 'Problem-Solving' },
      { value: 'stakeholder management', label: 'Stakeholder Management' },
      { value: 'decision making', label: 'Decision-Making' },
      { value: 'communication skills', label: 'Communication Skills' },
      { value: 'innovation', label: 'Innovation and Creativity' },
      { value: 'data interpretation', label: 'Data Interpretation' },
      { value: 'risk management', label: 'Risk Management' },
    ],
    rnd: [
      { value: 'innovation', label: 'Innovation and Problem-Solving' },
      { value: 'data analysis', label: 'Data Analysis and Modeling' },
      { value: 'technical writing', label: 'Technical Writing' },
      { value: 'collaboration', label: 'Collaboration with Cross-Functional Teams' },
      { value: 'project management', label: 'Project Management' },
    ],
    customerService: [
      { value: 'communication', label: 'Communication and Active Listening' },
      { value: 'problem solving', label: 'Problem-Solving and Conflict Resolution' },
      { value: 'empathy', label: 'Empathy and Emotional Intelligence' },
      { value: 'crm software', label: 'CRM Software' },
      { value: 'product knowledge', label: 'Product Knowledge' },
    ],
    legal: [
      { value: 'regulatory compliance', label: 'Regulatory Compliance' },
      { value: 'contract negotiation', label: 'Contract Negotiation and Drafting' },
      { value: 'risk assessment', label: 'Risk Assessment' },
      { value: 'intellectual property', label: 'Intellectual Property Management' },
      { value: 'litigation management', label: 'Litigation Management' },
    ],
    executiveLeadership: [
      { value: 'strategic thinking', label: 'Strategic Thinking and Vision Setting' },
      { value: 'decision making', label: 'Decision-Making' },
      { value: 'stakeholder management', label: 'Stakeholder Management' },
      { value: 'crisis management', label: 'Crisis Management' },
      { value: 'leadership development', label: 'Leadership and Team Development' },
    ],
    procurement: [
      { value: 'vendor management', label: 'Vendor Relationship Management' },
      { value: 'negotiation', label: 'Negotiation' },
      { value: 'cost analysis', label: 'Cost Analysis and Budgeting' },
      { value: 'contract management', label: 'Contract Management' },
      { value: 'ethical sourcing', label: 'Ethical Sourcing' },
    ],
    publicRelations: [
      { value: 'media relations', label: 'Media Relations' },
      { value: 'crisis communication', label: 'Crisis Communication' },
      { value: 'storytelling', label: 'Storytelling and Brand Advocacy' },
      { value: 'social media', label: 'Social Media Management' },
      { value: 'event planning', label: 'Event Planning' },
    ],
  };

   useEffect(() => {
      // Set the current date as the default start date when the component mounts
      const currentDate = new Date().toISOString().split('T')[0]; // Getting the current date in YYYY-MM-DD format
      setFormData((prevData) => ({
        ...prevData,
        startDate: currentDate, // Set the current date as start date
      }));
    }, []);
  
    useEffect(() => {
      // Whenever startDate or availability is changed, calculate endDate
      if (formData.startDate && formData.availability) {
        setFormData((prevData) => ({
          ...prevData,
          endDate: calculateEndDate(prevData.startDate, prevData.availability),
        }));
      }
    }, [formData.startDate, formData.availability]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Update the form data state
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: value,
      };
  
     
      return updatedData; // Return the updated data to update the state
    });
  };
  
  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [fieldName]: value };
  
      // Recalculate endDate only when required fields are updated
      if (fieldName === "startDate" || fieldName === "availability") {
        updatedData.endDate = calculateEndDate(
          updatedData.startDate,
          updatedData.availability
        );
      }
  
      console.log("Updated Data:", updatedData); // Debugging log
      console.log("Field Changed:", fieldName, "Value:", value);
      console.log("End Date (before update):", formData.endDate);

      return updatedData;
    });
  };
  
  
  
  const handleSkillsChange = (selectedSkills) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedSkills ? selectedSkills.map((skill) => skill.value) : [],
    }));
  };

  
    const handleCustomSkillsChange = (e) => {
      setFormData((prevData) => ({
        ...prevData,
        customSkills: e.target.value,
      }));
    };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  // Function to calculate end date based on start date and availability (in months)
  const calculateEndDate = (startDate, availability) => {
    if (!startDate || !availability) return ""; // Ensure inputs are valid
  
    const start = new Date(startDate);
    const monthsToAdd = parseInt(availability, 10);
  
    if (isNaN(monthsToAdd)) return ""; // Handle invalid availability input
  
    start.setMonth(start.getMonth() + monthsToAdd);
    console.log("Start Date:", startDate, "Availability:", availability);
  
    // Format the end date as YYYY-MM-DD for the date input
    const yyyy = start.getFullYear();
    const mm = String(start.getMonth() + 1).padStart(2, "0");
    const dd = String(start.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
          const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("contactNo", formData.contactNo); // Updated to 'contactNo'
      data.append("email", formData.email);
      data.append("department", formData.department); // Updated to 'department'
      data.append("skills", JSON.stringify(formData.skills)); // Updated to 'skills' (sending as JSON string)
      data.append("customSkills", formData.customSkills || ""); // Added for custom skills
      data.append("customDepartment", formData.customDepartment || ""); // Added for custom department
      data.append("linkedinLink", formData.linkedinLink || ""); // Updated to 'linkedinLink'
      data.append("availability", formData.availability); // Added 'availability'
      data.append("expectations", formData.expectations || ""); // Added 'expectations'
      data.append("startDate", formData.startDate); // Added 'startDate'
      data.append("endDate", formData.endDate); // Added 'endDate'

      if (formData.resume) {
        data.append("resume", formData.resume); // Append the resume file
      }

      data.append("additionalComments", formData.additionalComments);

      // Make the API request
      try {
        const response = await axios.post("http://localhost:5000/intern/submit", data, {
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

    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div className="first-last-name">
      <div>
        <label>First Name: <span className="required">*</span></label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter your first name"
          required
        />
      </div>

      <div>
        <label>Last Name: <span className="required">*</span></label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter your last name"
          required
        />
      </div>
      </div>
      <br></br>
      <div className="contact-mail">
      <div>
        <label>Contact Number: <span className="required">*</span></label>
        <input
          type="tel"
          name="contactNo"
          value={formData.contactNo}
          onChange={handleChange}
          placeholder="Enter your contact no"
          required
        />
      </div>

      <div>
        <label>Email <span className="required">*</span></label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email id"
          required
        />
      </div>
      </div>
      <br></br>
      <div className="department-skills">
       {/* Department Selection */}
       <div>
        <label>Select  Department: <span className="required">*</span></label>
        <select
          name="department"
          value={formData.department}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="It">IT and Technology</option>
          <option value="sales">Sales</option>
          <option value="marketing">Marketing</option>
          <option value="finance">Finance</option>
          <option value="hr">HR</option>
          <option value="operations">Operations</option>
          <option value="audit">Audit</option>
          <option value="Strategy and special projects">Strategy and Special Projects</option>
          <option value="rnd">R&D</option>
          <option value="customerService">Customer Service</option>
          <option value="legal">Legal</option>
          <option value="executiveLeadership">Executive Leadership</option>
          <option value="procurement">Procurement</option>
          <option value="publicRelations">Public Relations</option>
          <option value="others">Others</option>
        </select>
      </div>

      {/* Skills Section */}
      {formData.department !== "others" && (
  <div>
    <label>Your Skills: <span className="required">*</span></label>
    <Select
      isMulti
      name="skills"
      options={skillsByDepartment[formData.department] || []}
      value={formData.skills.map((skill) => ({
        value: skill,
        label: skill,
      }))}
      onChange={handleSkillsChange}
    />
  </div>
)}
</div>
      <br></br>
      <div className="others-name-skills">
      {/* Custom Department and Skills */}
      {formData.department === "others" && (
        <>
          <div>
            <label>Department Name:<span className="required">*</span></label>
            <input
              type="text"
              name="customDepartment"
              value={formData.customDepartment}
              onChange={handleChange}
              placeholder="Enter department name"
              required
            />
          </div>
          <div>
            <label>Your Skills: <span className="required">*</span></label>
            <textarea
              name="customSkills"
              value={formData.customSkills}
              onChange={handleChange}
              placeholder="Enter your skills"
              required
            />
          </div>
        </>
      )}
      </div>
      
      <div className="additional">
        <label>Expectations from the Internship:</label>
        <textarea
          name="expectations"
          value={formData.expectations}
          onChange={handleChange}
          placeholder="Enter your Expectations (if any)"
        />
      </div>
      <br></br>
      <div className="duration-dates">
      <div>
        <label>Desired Duration/Availability: <span className="required">*</span></label>
        <select
          name="availability"
          value={formData.availability}
          onChange={handleChange}
          required
        >
          <option value="" disabled hidden selected>Desired Duration / Availability</option>
            <option value="1">1 Month</option>
            <option value="3">3 Months</option>
            <option value="6">6 Months</option>
            <option value="9">9 Months</option>
            <option value="12">12 Months</option>
        </select>
      </div>

     <div>
    <label>Start Date: <span className="required">*</span></label>
    <input
      type="date"
      name="startDate"
      value={formData.startDate}
      onChange={(e) => handleInputChange("startDate", e.target.value)}
      required
    />
  </div>
  <div>
    <label>End Date: <span className="required">*</span></label>
    <input
      type="date" id="endDate"
      name="endDate"
      value={formData.endDate }
      readOnly
    />
  </div>
      </div>
      <br></br>
      <div className="grant-paid">
      <div>
        <label>LinkedIn Profile Link:</label>
        <input
          type="url"
          name="linkedinLink"
          value={formData.linkedinLink}
          onChange={handleChange}
          placeholder="Enter your LinkedIn Link(Optional)"
        />
      </div>

      <div>
        <label>Upload Resume: <span className="required">*</span></label>
        <input
          type="file"
          name="resume"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          required
        />
      </div>
      </div>
      <br></br>
      <div className="additional">
        <label>Additional Comments:</label>
        <textarea
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          placeholder="Enter Additional Comments (if any)"
        />
      </div>

      <button type="submit" className="form-submit">Submit</button>
    </form>
    </div>
  );
}

export default InternshipApplicationForm;
