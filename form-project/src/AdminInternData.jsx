// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// function AdminPage() {
//   const [interns, setInterns] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Number of interns per page

//   useEffect(() => {
//     axios
//       .get('http://localhost:5000/api/interns')
//       .then((response) => setInterns(response.data))
//       .catch((error) => console.error(error));
//   }, []);

//   // Pagination handlers
//   const handleNextPage = () => {
//     if (currentPage * itemsPerPage < interns.length) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage((prevPage) => prevPage - 1);
//     }
//   };

//   // Format date in dd-mm-yyyy format
//   const formatDate = (date) => {
//     const d = new Date(date);
//     const day = ("0" + d.getDate()).slice(-2); // Ensure two digits for the day
//     const month = ("0" + (d.getMonth() + 1)).slice(-2); // Ensure two digits for the month
//     const year = d.getFullYear();
    
//     return `${day}-${month}-${year}`; // Format the date as dd-mm-yyyy
//   };

//   // Filter interns to show only current page
//   const currentData = interns.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handleResumeDownload = (id) => {
//     window.open(`http://localhost:5000/api/interns/${id}/resume`, '_blank');
//   };

//   return (
//     <div className="admin-page">
//       <h1 className="admin-title">Intern Data</h1>
//       {currentData.map((intern) => (
//         <div key={intern._id} className="entry-card">
//           <h2 className="entry-title">
//             {intern.firstName} {intern.lastName}
//           </h2>

//           <div className="entry-content">
//             {Object.entries(intern)
//               .filter(
//                 ([key, value]) =>
//                   value !== null && // Exclude null values
//                   value !== undefined && // Exclude undefined values
//                   value !== "" && // Exclude empty strings
//                   key !== '__v' && // Exclude MongoDB version key
//                   key !== '_id' && // Exclude _id field
//                   key !== 'firstName' && // Exclude firstName field
//                   key !== 'lastName' && // Exclude lastName field
//                   key !== 'resume' // Exclude resume field
//               )
//               .map(([key, value]) => (
//                 <p key={key}>
//                   <strong>{key}:</strong>{' '}
//                   {key === 'linkedinLink' ? (
//                     <a href={value} target="_blank" rel="noopener noreferrer">
//                       View LinkedIn
//                     </a>
//                   ) : key === 'skills' ? (
//                     value.join(', ') // Join skills as comma-separated
//                   ) : key === 'startDate' || key === 'endDate' ? (
//                     formatDate(value) // Format startDate and endDate
//                   ) : key === 'availability' ? (
//                     `${value} months` // Append 'months' to availability
//                   ) : (
//                     value
//                   )}
//                 </p>
//               ))}
//           </div>
//           <button onClick={() => handleResumeDownload(intern._id)}>
//             View Resume
//           </button>
//         </div>
//       ))}

//       {/* Pagination Controls */}
//       <div className="navigation-buttons">
//         <button
//           onClick={handlePreviousPage}
//           disabled={currentPage === 1}
//           className="nav-button"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNextPage}
//           disabled={currentPage * itemsPerPage >= interns.length}
//           className="nav-button"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default AdminPage;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function AdminInternData() {
//   const [interns, setInterns] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredInterns, setFilteredInterns] = useState([]);
//   const [currentInternIndex, setCurrentInternIndex] = useState(0);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/interns')
//       .then((response) => {
//         setInterns(response.data);
//         setFilteredInterns(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   useEffect(() => {
//     if (searchTerm) {
//       setFilteredInterns(
//         interns.filter(
//           (intern) =>
//             intern.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             intern.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             intern.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             intern.availability.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             intern.startDate.toLowerCase().includes(searchTerm.toLowerCase())
//         )
//       );
//     } else {
//       setFilteredInterns(interns);
//     }
//   }, [searchTerm, interns]);

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:5000/api/interns/${id}`)
//       .then(() => {
//         const updatedInterns = interns.filter((intern) => intern._id !== id);
//         setInterns(updatedInterns);
//         setFilteredInterns(updatedInterns);
//         if (currentInternIndex >= updatedInterns.length) {
//           setCurrentInternIndex(updatedInterns.length - 1);
//         }
//       })
//       .catch((error) => console.error(error));
//   };

//   const handleResumeDownload = (id) => {
//     window.open(`http://localhost:5000/api/interns/${id}/resume`, '_blank');
//   };

//   const formatDate = (date) => {
//     const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
//     return new Date(date).toLocaleDateString('en-GB', options);
//   };

//   return (
//     <div className="admin-page">
//       <div className="search-container">
//         <input
//           className="search-box"
//           type="text"
//           placeholder="Search by name, department, availability, start date..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {filteredInterns.length === 0 ? (
//         <p className="no-results">No results found</p>
//       ) : (
//         <div>
//           <div className="entry-card">
//             <h2 className="entry-title">
//               {filteredInterns[currentInternIndex].firstName} {filteredInterns[currentInternIndex].lastName}
//             </h2>
//             <div className="entry-content">
//               {filteredInterns[currentInternIndex].contactNo && <p><strong>Contact No:</strong> {filteredInterns[currentInternIndex].contactNo}</p>}
//               {filteredInterns[currentInternIndex].email && <p><strong>Email:</strong> {filteredInterns[currentInternIndex].email}</p>}
//               {filteredInterns[currentInternIndex].department && <p><strong>Department:</strong> {filteredInterns[currentInternIndex].department}</p>}
//               {filteredInterns[currentInternIndex].availability && <p><strong>Availability:</strong> {filteredInterns[currentInternIndex].availability} months</p>}
//               {filteredInterns[currentInternIndex].startDate && <p><strong>Start Date:</strong> {formatDate(filteredInterns[currentInternIndex].startDate)}</p>}
//               {filteredInterns[currentInternIndex].endDate && <p><strong>End Date:</strong> {formatDate(filteredInterns[currentInternIndex].endDate)}</p>}
//               {filteredInterns[currentInternIndex].additionalComments && <p><strong>Additional Comments:</strong> {filteredInterns[currentInternIndex].additionalComments}</p>}
//               {filteredInterns[currentInternIndex].linkedinLink && (
//                 <p>
//                   <a href={filteredInterns[currentInternIndex].linkedinLink} target="_blank" rel="noopener noreferrer">
//                     LinkedIn Profile
//                   </a>
//                 </p>
//               )}
//               <button onClick={() => handleResumeDownload(filteredInterns[currentInternIndex]._id)}>
//                 View Resume
//               </button>
//             </div>
//             <button className="delete-button" onClick={() => handleDelete(filteredInterns[currentInternIndex]._id)}>
//               Delete
//             </button>
//           </div>
//           <div className="navigation-buttons">
//             <button className="nav-button" onClick={() => setCurrentInternIndex(currentInternIndex - 1)} disabled={currentInternIndex === 0}>Previous</button>
//             <button className="nav-button" onClick={() => setCurrentInternIndex(currentInternIndex + 1)} disabled={currentInternIndex === filteredInterns.length - 1}>Next</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default AdminInternData;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AdminInternData.css"

function AdminInternData() {
  const [interns, setInterns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInterns, setFilteredInterns] = useState([]);
  const [currentInternIndex, setCurrentInternIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);  // To toggle visibility of stats

  useEffect(() => {
    axios.get('http://localhost:5000/api/interns')
      .then((response) => {
        setInterns(response.data);
        setFilteredInterns(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredInterns(
        interns.filter(
          (intern) =>
            intern.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            intern.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            intern.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            intern.availability.toLowerCase().includes(searchTerm.toLowerCase()) ||
            intern.startDate.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredInterns(interns);
    }
  }, [searchTerm, interns]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/interns/${id}`)
      .then(() => {
        const updatedInterns = interns.filter((intern) => intern._id !== id);
        setInterns(updatedInterns);
        setFilteredInterns(updatedInterns);
        if (currentInternIndex >= updatedInterns.length) {
          setCurrentInternIndex(updatedInterns.length - 1);
        }
      })
      .catch((error) => console.error(error));
  };

  const handleResumeDownload = (id) => {
    window.open(`http://localhost:5000/api/interns/${id}/resume`, '_blank');
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  };

  // Calculate the data
  const totalInterns = interns.length;
  const departments = [...new Set(interns.map(intern => intern.department))];
  const departmentWise = departments.map(department => ({
    department,
    count: interns.filter(intern => intern.department === department).length
  }));
  const paidOrNot = {
    paid: interns.filter(intern => intern.isPaid).length,
    unpaid: interns.filter(intern => !intern.isPaid).length
  };
  const startDateStats = interns.map(intern => intern.startDate);

  const startDateFrequency = startDateStats.reduce((acc, date) => {
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});
  
  return (
    <div className="admin-page">
      <div className="header">
        <input
          className="search-box"
          type="text"
          placeholder="Search by name, department, availability, start date..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       
        <button className="stats-button" onClick={() => setShowStats(!showStats)}>
          &#9776; {/* Hamburger icon */}
        </button>
      </div>

      {showStats && (
  <div className="statistics-container">
    <button className="stat-button">
      Total Number of Interns: {totalInterns}
    </button>
    <button className="stat-button">
      Department-wise Distribution:
      <ul>
        {departmentWise.map((item) => (
          <li key={item.department}>{item.department}: {item.count}</li>
        ))}
      </ul>
    </button>
    <button className="stat-button">
      Paid or Not:
      <p>Paid: {paidOrNot.paid}</p>
      <p>Unpaid: {paidOrNot.unpaid}</p>
    </button>
    <button className="stat-button">
      Start Dates Frequency:
      <ul>
        {Object.entries(startDateFrequency).map(([date, count]) => (
          <li key={date}>
            {formatDate(date)}: {count}
          </li>
        ))}
      </ul>
    </button>
  </div>
)}



      {/* No intern data below this section if stats are shown */}
      {!showStats && (
        <div>
          {filteredInterns.length === 0 ? (
            <p className="no-results">No results found</p>
          ) : (
            <div>
                 <h1 className="intern-data-title">Intern Data</h1>
              <div className="entry-card">
                <h2 className="entry-title">
                  {filteredInterns[currentInternIndex].firstName} {filteredInterns[currentInternIndex].lastName}
                </h2>
                <div className="entry-content">
                  {filteredInterns[currentInternIndex].contactNo && <p><strong>Contact No:</strong> {filteredInterns[currentInternIndex].contactNo}</p>}
                  {filteredInterns[currentInternIndex].email && <p><strong>Email:</strong> {filteredInterns[currentInternIndex].email}</p>}
                  {filteredInterns[currentInternIndex].department && <p><strong>Department:</strong> {filteredInterns[currentInternIndex].department}</p>}
                  {filteredInterns[currentInternIndex].availability && <p><strong>Availability:</strong> {filteredInterns[currentInternIndex].availability} months</p>}
                  {filteredInterns[currentInternIndex].startDate && <p><strong>Start Date:</strong> {formatDate(filteredInterns[currentInternIndex].startDate)}</p>}
                  {filteredInterns[currentInternIndex].endDate && <p><strong>End Date:</strong> {formatDate(filteredInterns[currentInternIndex].endDate)}</p>}
                  {filteredInterns[currentInternIndex].additionalComments && <p><strong>Additional Comments:</strong> {filteredInterns[currentInternIndex].additionalComments}</p>}
                  {filteredInterns[currentInternIndex].linkedinLink && (
                    <p>
                      <a href={filteredInterns[currentInternIndex].linkedinLink} target="_blank" rel="noopener noreferrer">
                        LinkedIn Profile
                      </a>
                    </p>
                  )}
                  <button onClick={() => handleResumeDownload(filteredInterns[currentInternIndex]._id)} className="view-resume-btn">
                    View Resume
                  </button>
                </div>
                <button className="delete-button" onClick={() => handleDelete(filteredInterns[currentInternIndex]._id)}>
                  Delete
                </button>
              </div>
              <div className="navigation-buttons">
                <button className="nav-button" onClick={() => setCurrentInternIndex(currentInternIndex - 1)} disabled={currentInternIndex === 0}>Previous</button>
                <button className="nav-button" onClick={() => setCurrentInternIndex(currentInternIndex + 1)} disabled={currentInternIndex === filteredInterns.length - 1}>Next</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminInternData;
