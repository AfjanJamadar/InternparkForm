// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';


// const OrganizationForm = () => {
//   const [formData, setFormData] = useState({
//     organizationName: '',
//     designation: '',
//     employeeName: '',
//     projectNature: '',
//     contactNumber: '',
//     email: '',
//     category: '',
//     skills: [],
//     duration: '',
//     experienceCertificate: '',
//     paidInternship: '',
//     additionalComments: '',
//   });

//   const [category, setCategory] = useState('');
//   const [selectedSkills, setSelectedSkills] = useState([]);
//   const navigate = useNavigate();
  
  // const technologyOptions = [
  //   { value: 'design', label: 'User Experience Design' },
  //   { value: 'analytics', label: 'Data Analytics' },
  //   { value: 'data architecture', label: 'Data Architecture' },
  //   { value: 'visualisation', label: 'Data Visualization' },
  //   { value: 'digital marketing', label: 'Digital Marketing' },
  //   { value: 'full stack', label: 'Full Stack Development' },
  //   { value: 'software design', label: 'Software Design/Engineering' },
  //   { value: 'cyber', label: 'Cyber Security Architecture' },
  //   { value: 'blockchain', label: 'Blockchain' },
  //   { value: 'mixed reality', label: 'Mixed Reality' },
  //   { value: 'cloud computing', label: 'Cloud Computing' },
  //   { value: 'microsoft', label: 'Microsoft Office (Excel, Word, PPT)' },
  // ];

  // const salesOptions = [
  //   { value: 'lead generation', label: 'Lead Generation and Conversion' },
  //   { value: 'relationship building', label: 'Relationship Building' },
  //   { value: 'negotiation', label: 'Negotiation and Persuasion' },
  //   { value: 'crm tools', label: 'CRM Tools' },
  //   { value: 'pipeline management', label: 'Territory and Pipeline Management' },
  // ];

  // const marketingOptions = [
  //   { value: 'branding', label: 'Branding and Positioning' },
  //   { value: 'digital marketing', label: 'Digital Marketing (SEO, SEM, Social Media)' },
  //   { value: 'content creation', label: 'Content Creation and Copywriting' },
  //   { value: 'market research', label: 'Market Research and Analytics' },
  //   { value: 'campaign management', label: 'Campaign Management' },
  // ];

  // const financeOptions = [
  //   { value: 'financial planning', label: 'Financial Planning and Analysis' },
  //   { value: 'budgeting', label: 'Budgeting and Forecasting' },
  //   { value: 'bookkeeping', label: 'Bookkeeping and Auditing' },
  //   { value: 'tax compliance', label: 'Tax Compliance' },
  //   { value: 'cost control', label: 'Cost Control and Risk Management' },
  // ];

  // const hrOptions = [
  //   { value: 'recruitment', label: 'Recruitment and Talent Acquisition' },
  //   { value: 'employee relations', label: 'Employee Relations and Conflict Resolution' },
  //   { value: 'training', label: 'Training and Development' },
  //   { value: 'compliance', label: 'Compliance and Labor Laws' },
  //   { value: 'people analytics', label: 'People Analytics and HR Software' },
  // ];

  // const operationsOptions = [
  //   { value: 'process optimization', label: 'Process Optimization' },
  //   { value: 'supply chain', label: 'Supply Chain Management' },
  //   { value: 'inventory control', label: 'Inventory Control' },
  //   { value: 'quality assurance', label: 'Quality Assurance' },
  //   { value: 'strategic planning', label: 'Strategic Planning' },
  // ];

  // const auditOptions = [
  //   { value: 'attention to detail', label: 'Attention to Detail' },
  //   { value: 'analytical thinking', label: 'Analytical Thinking' },
  //   { value: 'knowledge of standards', label: 'Knowledge of Standards and Regulations' },
  //   { value: 'risk assessment', label: 'Risk Assessment' },
  //   { value: 'process evaluation', label: 'Process Evaluation' },
  //   { value: 'data analysis', label: 'Data Analysis and Interpretation' },
  //   { value: 'problem solving', label: 'Problem-Solving' },
  //   { value: 'root cause', label: 'Root Cause Analysis' },
  //   { value: 'effective communication', label: 'Effective Communication' },
  //   { value: 'reporting', label: 'Reporting and Documentation' },
  //   { value: 'process improvement', label: 'Process Improvement' },
  //   { value: 'team collaboration', label: 'Team Collaboration' },
  // ];

  // const strategyOptions = [
  //   { value: 'strategic planning', label: 'Strategic Planning' },
  //   { value: 'analytical thinking', label: 'Analytical Thinking' },
  //   { value: 'project management', label: 'Project Management' },
  //   { value: 'problem solving', label: 'Problem-Solving' },
  //   { value: 'stakeholder management', label: 'Stakeholder Management' },
  //   { value: 'decision making', label: 'Decision-Making' },
  //   { value: 'communication skills', label: 'Communication Skills' },
  //   { value: 'innovation', label: 'Innovation and Creativity' },
  //   { value: 'data interpretation', label: 'Data Interpretation' },
  //   { value: 'risk management', label: 'Risk Management' },
  // ];

  // const rndOptions = [
  //   { value: 'innovation', label: 'Innovation and Problem-Solving' },
  //   { value: 'data analysis', label: 'Data Analysis and Modeling' },
  //   { value: 'technical writing', label: 'Technical Writing' },
  //   { value: 'collaboration', label: 'Collaboration with Cross-Functional Teams' },
  //   { value: 'project management', label: 'Project Management' },
  // ];

  // const customerServiceOptions = [
  //   { value: 'communication', label: 'Communication and Active Listening' },
  //   { value: 'problem solving', label: 'Problem-Solving and Conflict Resolution' },
  //   { value: 'empathy', label: 'Empathy and Emotional Intelligence' },
  //   { value: 'crm software', label: 'CRM Software' },
  //   { value: 'product knowledge', label: 'Product Knowledge' },
  // ];

  // const legalOptions = [
  //   { value: 'regulatory compliance', label: 'Regulatory Compliance' },
  //   { value: 'contract negotiation', label: 'Contract Negotiation and Drafting' },
  //   { value: 'risk assessment', label: 'Risk Assessment' },
  //   { value: 'intellectual property', label: 'Intellectual Property Management' },
  //   { value: 'litigation management', label: 'Litigation Management' },
  // ];

  // const executiveLeadershipOptions = [
  //   { value: 'strategic thinking', label: 'Strategic Thinking and Vision Setting' },
  //   { value: 'decision making', label: 'Decision-Making' },
  //   { value: 'stakeholder management', label: 'Stakeholder Management' },
  //   { value: 'crisis management', label: 'Crisis Management' },
  //   { value: 'leadership development', label: 'Leadership and Team Development' },
  // ];

  // const procurementOptions = [
  //   { value: 'vendor management', label: 'Vendor Relationship Management' },
  //   { value: 'negotiation', label: 'Negotiation' },
  //   { value: 'cost analysis', label: 'Cost Analysis and Budgeting' },
  //   { value: 'contract management', label: 'Contract Management' },
  //   { value: 'ethical sourcing', label: 'Ethical Sourcing' },
  // ];

  // const publicRelationsOptions = [
  //   { value: 'media relations', label: 'Media Relations' },
  //   { value: 'crisis communication', label: 'Crisis Communication' },
  //   { value: 'storytelling', label: 'Storytelling and Brand Advocacy' },
  //   { value: 'social media', label: 'Social Media Management' },
  //   { value: 'event planning', label: 'Event Planning' },
  // ];


//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleCategoryChange = (e) => {
//     const selectedCategory = e.target.value;
//     setCategory(selectedCategory);
//     setSelectedSkills([]);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       category: selectedCategory,
//       skills: [],
//     }));
//   };

//   const handleSkillsChange = (selectedOptions) => {
//     setSelectedSkills(selectedOptions);
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       skills: selectedOptions ? selectedOptions.map((opt) => opt.value) : [],
//     }));
//   };

//   const handleSubmit = async (e) => {
    // e.preventDefault();


    // const preparedData = {
    //   ...formData,
    //   skills: selectedSkills.map((skill) => skill.value),
    // };

    // console.log('Prepared Data for Submission:', preparedData);
  
    // try {
    //   const response = await fetch('https://internpark-form-88ik.vercel.app/organisation/submit', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(preparedData),
    //   });
  
    //   if (response.ok) {
    //     console.log('Form submitted successfully');
    //     navigate('/success');
    //   } else {
    //     console.error('Failed to submit form');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    // }
//   };

//   return (
//     <div className="form-container">
//       <form className="form-grid" onSubmit={handleSubmit}>
       
//           <input
//             type="text"
//             name="organizationName"
//             className="form-input"
//             placeholder="Organization Name"
//             value={formData.organizationName}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="designation"
//             className="form-input"
//             placeholder="Designation"
//             value={formData.designation}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="text"
//             name="employeeName"
//             className="form-input"
//             placeholder="Employee First Name"
//             value={formData.employeeName}
//             onChange={handleInputChange}
//             required
//           />
//            <input
//             type="text"
//             name="employeeName"
//             className="form-input"
//             placeholder="Employee Second Name"
//             value={formData.employeeSecondName}
//             onChange={handleInputChange}
//             required
//           />
//           <textarea>
         
//             name="projectNature"
//             className="form-input"
//             placeholder="Nature of the project"
//             value={formData.projectNature}
//             onChange={handleInputChange}
//             required
//             </textarea>

//           <input
//             type="tel"
//             name="contactNumber"
//             className="form-input"
//             placeholder="Contact Number"
//             value={formData.contactNumber}
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             className="form-input"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleInputChange}
//             required
//           />
      
//       <label htmlFor="category">Select Department</label>
// <select
//   id="category"
//   name="category"
//   value={category}
//   onChange={(e) => {
//     setCategory(e.target.value);
//     setSelectedSkills([]); // Reset selected skills when category changes
//   }}
//   required
// >
//   <option value="">--Select--</option>
//   <option value="technology">Technology</option>
//   <option value="sales">Sales</option>
//   <option value="marketing">Marketing</option>
//   <option value="finance">Finance</option>
//   <option value="hr">Human Resources</option>
//   <option value="operations">Operations</option>
//   <option value="audit">Audit</option>
//   <option value="strategy">Strategy</option>
//   <option value="rnd">Research and Development</option>
//   <option value="customerService">Customer Service</option>
//   <option value="legal">Legal</option>
//   <option value="executiveLeadership">Executive Leadership</option>
//   <option value="procurement">Procurement</option>
//   <option value="publicRelations">Public Relations</option>
// </select>

// {category && (
//   <div className="form-group">
//     <label htmlFor="skills">Required Skills</label>
//     <Select
//       id="skills"
//       isMulti
//       options={
//         category === 'technology' ? technologyOptions :
//         category === 'sales' ? salesOptions :
//         category === 'marketing' ? marketingOptions :
//         category === 'finance' ? financeOptions :
//         category === 'hr' ? hrOptions :
//         category === 'operations' ? operationsOptions :
//         category === 'audit' ? auditOptions :
//         category === 'strategy' ? strategyOptions :
//         category === 'rnd' ? rndOptions :
//         category === 'customerService' ? customerServiceOptions :
//         category === 'legal' ? legalOptions :
//         category === 'executiveLeadership' ? executiveLeadershipOptions :
//         category === 'procurement' ? procurementOptions :
//         category === 'publicRelations' ? publicRelationsOptions :
//         []
//       }
//       value={selectedSkills}
//       onChange={handleSkillsChange}
//       isClearable
//       closeMenuOnSelect={false}
//       placeholder="Select skills"
//     />
//   </div>
// )}

       
//           <select
//             name="duration"
//             className="form-input"
//             value={formData.duration}
//             onChange={handleInputChange}
//             required
//           >
            // <option value="">Desired Duration / Availability</option>
            // <option value="1">1 Month</option>
            // <option value="3">3 Months</option>
            // <option value="6">6 Months</option>
            // <option value="9">9 Months</option>
            // <option value="12">12 Months</option>
//           </select>

      
//           <select
//             name="experienceCertificate"
//             className="form-select"
//             value={formData.experienceCertificate}
//             onChange={handleInputChange}
//             required
//           >
            // <option value="">Grant Experience Certificate:</option>
            // <option value="yes">Yes</option>
            // <option value="no">No</option>
//           </select>

//           <select
//             name="paidInternship"
//             className="form-select"
//             value={formData.paidInternship}
//             onChange={handleInputChange}
//             required
//           >
            // <option value="">Paid Internship:</option>
            // <option value="yes">Yes</option>
            // <option value="no">No</option>
//           </select>

//           <textarea
//             name="additionalComments"
//             className="form-textarea"
//             placeholder="Additional Comments (if any)"
//             value={formData.additionalComments}
//             onChange={handleInputChange}
//           ></textarea>
       

//         <button type="submit" className="form-submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OrganizationForm;


















































// const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  //   console.log("Updated Data:", updatedData);

  // };

  // const handleInputChange = (fieldName, value) => {
  //   setFormData((prevData) => {
  //     const updatedData = { ...prevData, [fieldName]: value };
  
  //     // Recalculate endDate if startDate or availability changes
  //     if (updatedData.startDate && updatedData.availability) {
  //       updatedData.endDate = calculateEndDate(updatedData.startDate, updatedData.availability);
  //     }
  //     console.log("Updated Data:", updatedData);

  //     return updatedData;
  //   });
  // };
  



import React, { useState , useEffect } from "react";
import Select from "react-select";
import { useNavigate } from 'react-router-dom';
import { components } from "react-select";
import "./OrganizationForm.css";

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    designation: "",
    firstName: "",
    lastName: "",
    projectNature: "",
    contactNumber: "",
    email: "",
    department: "",
    skills: [],
    customSkills:"",
    customDepartment:"",
    grantExperienceCertificate: "",
    paidInternship: "",
    additionalComments: "",
    availability: "",
    immediateHiring: false,
    startDate: "",
    endDate: "",
  });

  const [emailError, setEmailError] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isCustomDuration, setIsCustomDuration] = useState(false);

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

  const options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];


  const durationOptions = [
    { value: "1", label: "1 Month" },
    { value: "3", label: "3 Months" },
    { value: "6", label: "6 Months" },
    { value: "9", label: "9 Months" },
    { value: "12", label: "12 Months" },
    { value: "others", label: "Others" },
  ];

  const departmentOptions = [
    { value: "It", label: "IT and Technology" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "finance", label: "Finance" },
    { value: "hr", label: "HR" },
    { value: "operations", label: "Operations" },
    { value: "audit", label: "Audit" },
    { value: "Strategy and special projects", label: "Strategy and Special Projects" },
    { value: "rnd", label: "Research and Development" },
    { value: "customerService", label: "Customer Service" },
    { value: "legal", label: "Legal" },
    { value: "executiveLeadership", label: "Executive Leadership" },
    { value: "procurement", label: "Procurement" },
    { value: "publicRelations", label: "Public Relations" },
    { value: "others", label: "Others" },
  ];

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
    const { name, value, type, checked } = e.target;
  
    console.log({ name, type, checked, value });
    setFormData((prevData) => {
      const updatedData = {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
  
      return updatedData;
    });
  };
  
  
  const handlePaidInternshipChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      paidInternship: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleGrantCertificateChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      grantExperienceCertificate: selectedOption ? selectedOption.value : "",
    }));
  };

  const handleDurationChange = (selectedOption) => {
    if (selectedOption?.value === "others") {
      setIsCustomDuration(true);
      setFormData((prevData) => ({
        ...prevData,
        availability: "", 
      }));
    } else {
      setIsCustomDuration(false);
      setFormData((prevData) => ({
        ...prevData,
        availability: selectedOption?.value || "",
      }));
    }
  };
  
  
  const handleDepartmentChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      department: selectedOption?.value || "", // Update the department field only
    }));
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
  
  
  
  const handleCustomSkillsChange = async (e) => {
    setFormData((prevData) => ({
      ...prevData,
      customSkills: e.target.value,
    }));
  };

  const handleSkillsChange = (selectedSkills) => {
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedSkills ? selectedSkills.map((skill) => skill.value) : [],
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Prepare data for submission using formData.skills
    const preparedData = {
      ...formData,
      skills: formData.skills || [], // Use formData.skills directly
    };
  
    console.log('Prepared Data for Submission:', preparedData);
  
    try {
      const response = await fetch('http://localhost:5000/organisation/submit', {
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
  


  const blockedDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com'];

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      email: value,
    }));

    // When email contains '@' and the domain is complete, check if it's a blocked domain
    if (value.includes('@')) {
      const domain = value.split('@')[1]; // Extract the domain part

      // If the domain is in the blocked list, show error message and clear the input
      if (blockedDomains.includes(domain)) {
        setEmailError('Please use an organizational email address (e.g., @company.com).');
        setFormData((prevData) => ({
          ...prevData,
          email: '', // Clear the email input field
        }));
      } else {
        setEmailError(''); // Clear error message if email is valid
      }
    }
  };


  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
        <div className="organization-destination">
      <div>
        <label>Organization Name: <span className="required">*</span></label>
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
          required
          placeholder="Enter Organization name "
        />
      </div>
      <div>
        <label>Designation: <span className="required">*</span></label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          placeholder="Enter Designation"
          required
        />
      </div>
    </div>
    <br></br>
    <div className="first-last-name">  
      <div>
        <label>Employee First Name: <span className="required">*</span></label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter first name"
          required
        />
      </div>
      <div>
        <label>Employee Last Name: <span className="required">*</span></label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter last name"
          required
        />
      </div>
      </div>
      
    <br></br>
      <div className="nature">
        <label>Nature of the Project: <span className="required">*</span></label>
        <textarea
          name="projectNature"
          value={formData.projectNature}
          onChange={handleChange}
          placeholder="Enter Nature of the project"
          required
        />
      </div>
      <br></br>
      <div className="contact-mail">
      <div className="contact-number">
        <label>Contact Number: <span className="required">*</span></label>
        <input
          type="tel"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Enter contact number"
          required
        />
      </div>
      <div>
        <label>Email: <span className="required">*</span></label>
        <input
          type="email"
          value={formData.email}
          onChange={handleEmailChange}
          placeholder="Enter organizational email"
          className={`email-input ${emailError ? 'error' : ''}`}
        /> <div> {emailError && (
          <div className="error-message">
            {emailError}
          </div>
        )}</div>
      </div>
      </div>
      <br></br>
        <div className="department-skills">
       <div>
       <label>
        Select Department: <span className="required">*</span>
      </label>
      <Select
        value={
          formData.department
            ? departmentOptions.find((option) => option.value === formData.department)
            : null
        }
        onChange={handleDepartmentChange}
        options={departmentOptions}
        placeholder="Select"
        isClearable
      />
      </div>

      
        
      {formData.department !== "others" && (
        <div>
          <label>Required Skills: <span className="required">*</span></label>
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
      {formData.department === "others" && (
        <div>
          <label> Department Name: <span className="required">*</span></label>
          <input
            type="text"
            name="customDepartment"
            value={formData.customDepartment}
            onChange={handleChange}
            placeholder="Enter department name"
            required
          />
        </div>
      )}

      {formData.department === "others" && (
        <div>
          <label>Required Skills: <span className="required">*</span></label>
          <textarea
            name="customSkills"
            value={formData.customSkills}
            onChange={handleCustomSkillsChange}
            placeholder="Enter required skills"
            required
          />
        </div>
      )}
    </div>
    <br></br>
      <div className="duration-dates">
      <div>
  <label>
    Desired Duration/Availability: <span className="required">*</span>
  </label>
  <Select
    value={
      formData.availability
        ? durationOptions.find(
            (option) => option.value === formData.availability
          )
        : null
    }
    onChange={handleDurationChange}
    options={durationOptions}
    placeholder="Desired Duration / Availability"
    isClearable
  />
  </div>
  {isCustomDuration && (
    <div>
      <label>Enter Custom Duration (In Months):</label>
      <input
        type="text"
        value={formData.availability}
        onChange={(e) =>
          setFormData((prevData) => ({
            ...prevData,
            availability: e.target.value,
          }))
        }
        placeholder="Enter your desired duration"
      />
    </div>
  )}



     <div>
    <label>Start Date: <span className="required">*</span></label>
    <input
      type="date"
      name="startDate"
      value={formData.startDate}
      onChange={(e) => handleInputChange("startDate", e.target.value)}
      style={{
        color: formData.endDate ? "black" : "gray", 
      }}
      required
    />
  </div>
  <div>
    <label>End Date: <span className="required">*</span></label>
    <input
      type="date" id="endDate"
      name="endDate"
      value={formData.endDate }
      style={{
        color: formData.endDate ? "black" : "gray", 
      }}
      readOnly
    />
  </div>
      </div>
      <br></br>
      <div className="grant-paid">
      <div>
        <label>
        Grant Experience Certificate: <span className="required">*</span>
      </label>
      <Select
        value={
          formData.grantExperienceCertificate
            ? options.find(
                (option) => option.value === formData.grantExperienceCertificate
              )
            : null
        }
        onChange={handleGrantCertificateChange} // Call the separate function
        options={options}
        placeholder="Grant Experience Certificate:"
        isClearable
      />
      </div>
      <div>
      <label>
        Paid Internship: <span className="required">*</span>
      </label>
      <Select
        value={
          formData.paidInternship
            ? options.find((option) => option.value === formData.paidInternship)
            : null
        }
        onChange={handlePaidInternshipChange}
        options={options}
        placeholder="Paid Internship:"
        isClearable
        required
      />
      </div>
      <div>
      <label>
            Immediate Hiring: <span className="required">*</span>
          </label>
          <input
            type="checkbox"
            name="immediateHiring"
            className="custom-checkbox"
            checked={formData.immediateHiring} 
            onChange={handleChange}
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
          placeholder="Enter additional comments(if any)"
        />
      </div>
      <button type="submit" className="form-submit">Submit</button>
    </form>
    </div>
  );
};

export default OrganizationForm;










// import React, { useState } from "react";
// import Select from "react-select";
// import { components } from "react-select";

// const OrganizationForm = () => {
//   const [formData, setFormData] = useState({
//     organizationName: "",
//     designation: "",
//     firstName: "",
//     secondName: "",
//     projectNature: "",
//     contactNumber: "",
//     email: "",
//     department: "",
//     skills: [],
//     customSkills: "",  // Added to capture custom skills
//     availability: "",
//     grantExperienceCertificate: "",
//     paidInternship: "",
//     additionalComments: "",
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

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSkillsChange = (selectedSkills) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       skills: selectedSkills ? selectedSkills.map((skill) => skill.value) : [],
//     }));
//   };

//   const handleCustomSkillsChange = (e) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       customSkills: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted", formData);
//     // Add your submit logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Other input fields */}
      
//       <div>
//         <label>Select a Department:</label>
//         <select
//           name="department"
//           value={formData.department}
//           onChange={handleChange}
//           required
//         >
//           <option value="">--Select--</option>
//           <option value="It">IT and Technology</option>
//           <option value="sales">Sales</option>
//           <option value="marketing">Marketing</option>
//           <option value="finance">Finance</option>
//           <option value="hr">HR</option>
//           <option value="operations">Operations</option>
//           <option value="audit">Audit</option>
//           <option value="Strategy and special projects">Strategy and Special Projects</option>
//           <option value="rnd">R&D</option>
//           <option value="customerService">Customer Service</option>
//           <option value="legal">Legal</option>
//           <option value="executiveLeadership">Executive Leadership</option>
//           <option value="procurement">Procurement</option>
//           <option value="publicRelations">Public Relations</option>
//           <option value="others">Others</option>
//         </select>
//       </div>

//       {formData.department === "others" && (
//         <div>
//           <label>Enter the Department Name:</label>
//           <input
//             type="text"
//             name="customDepartment"
//             value={formData.customDepartment}
//             onChange={handleChange}
//             placeholder="Enter department name"
//             required
//           />
//         </div>
//       )}

//       {formData.department !== "others" && (
//         <div>
//           <label>Skills:</label>
//           <Select
//             isMulti
//             name="skills"
//             options={skillsByDepartment[formData.department] || []}
//             value={formData.skills.map((skill) => ({
//               value: skill,
//               label: skill,
//             }))}
//             onChange={handleSkillsChange}
//           />
//         </div>
//       )}

//       {formData.department === "others" && (
//         <div>
//           <label>Custom Skills:</label>
//           <textarea
//             name="customSkills"
//             value={formData.customSkills}
//             onChange={handleCustomSkillsChange}
//             placeholder="Enter custom skills"
//             required
//           />
//         </div>
//       )}

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default OrganizationForm;
