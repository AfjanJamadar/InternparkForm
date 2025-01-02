// import React, { useEffect, useState } from 'react';
// import './AdminOrganisationData.css'; // Import the CSS file

// const AdminOrganisationData = () => {
//   const [entries, setEntries] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchEntries = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/entries');

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const contentType = response.headers.get('Content-Type');
//         if (contentType && contentType.includes('application/json')) {
//           const data = await response.json();
//           setEntries(data);
//         } else {
//           throw new Error('Response is not JSON');
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEntries();
//   }, []);

//   const nextEntry = () => {
//     if (currentIndex < entries.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevEntry = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   const formatDate = (date) => {
//     const d = new Date(date);
//     return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
//   };

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   const entry = entries[currentIndex];

//   return (
//     <div className="admin-page">
//       <h1 className="admin-title">Organization details</h1>
//       <div className="entry-card">
//         <h2 className="entry-title">{entry.organizationName}</h2>
//         {entry.designation && <p><strong>Designation:</strong> {entry.designation}</p>}
//         {entry.firstName && entry.lastName && (
//           <p><strong>Name:</strong> {entry.firstName} {entry.lastName}</p>
//         )}
//         {entry.projectNature && <p><strong>Project Nature:</strong> {entry.projectNature}</p>}
//         {entry.contactNumber && <p><strong>Contact Number:</strong> {entry.contactNumber}</p>}
//         {entry.email && <p><strong>Email:</strong> {entry.email}</p>}
//         {entry.department && <p><strong>Department:</strong> {entry.department}</p>}
//         {entry.skills.length > 0 && <p><strong>Skills:</strong> {entry.skills.join(', ')}</p>}
//         {entry.customSkills && <p><strong>Custom Skills:</strong> {entry.customSkills}</p>}
//         {entry.customDepartment && <p><strong>Custom Department:</strong> {entry.customDepartment}</p>}
//         {entry.grantExperienceCertificate && (
//           <p><strong>Grant Experience Certificate:</strong> {entry.grantExperienceCertificate}</p>
//         )}
//         {entry.paidInternship && <p><strong>Paid Internship:</strong> {entry.paidInternship}</p>}
//         {entry.additionalComments && (
//           <p><strong>Additional Comments:</strong> {entry.additionalComments}</p>
//         )}
//         {entry.availability && <p><strong>Availability:</strong> {entry.availability}</p>}
//         {entry.startDate && <p><strong>Start Date:</strong> {formatDate(entry.startDate)}</p>}
//         {entry.endDate && <p><strong>End Date:</strong> {formatDate(entry.endDate)}</p>}
//       </div>

//       {/* Navigation buttons */}
//       <div className="navigation-buttons">
//         <button onClick={prevEntry} disabled={currentIndex === 0} className="nav-button">
//           Previous
//         </button>
//         <button
//           onClick={nextEntry}
//           disabled={currentIndex === entries.length - 1}
//           className="nav-button"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminOrganisationData;



import React, { useEffect, useState } from 'react';
import './AdminOrganisationData.css'; // Import the updated CSS file
import { Pie } from 'react-chartjs-2'; // Assuming you are using Chart.js for visualizations
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const AdminOrganisationData = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [dashboardActive, setDashboardActive] = useState(false); // Track dashboard visibility

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/entries');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const contentType = response.headers.get('Content-Type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          setEntries(data);
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEntries();
  }, []);

  const nextEntry = () => {
    if (currentIndex < entries.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevEntry = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const formatDate = (date) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleToggleDashboard = () => {
    setDashboardActive(!dashboardActive);
  };

  // Filter entries based on search term
  const filteredEntries = entries.filter((entry) => {
    return (
      entry.organizationName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (entry.firstName && entry.lastName && `${entry.firstName} ${entry.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())) ||
      entry.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formatDate(entry.startDate).includes(searchTerm) ||
      formatDate(entry.endDate).includes(searchTerm) ||
      entry.availability.toLowerCase().includes(searchTerm)
    );
  });

  // Dashboard data preparation
  const totalOrganizations = entries.length;
  const departmentCounts = {};
  const internshipCounts = { paid: 0, unpaid: 0 };
  const durationCounts = { short: 0, long: 0 };

  entries.forEach((entry) => {
    // Department count
    departmentCounts[entry.department] = (departmentCounts[entry.department] || 0) + 1;

    // Paid vs Unpaid internship count
    if (entry.paidInternship === 'Yes') {
      internshipCounts.paid++;
    } else {
      internshipCounts.unpaid++;
    }

    // Duration (availability) count
    const availability = entry.availability.toLowerCase();
    if (availability.includes('short')) {
      durationCounts.short++;
    } else {
      durationCounts.long++;
    }
  });

  // Chart data for visualizations
  const departmentChartData = {
    labels: Object.keys(departmentCounts),
    datasets: [
      {
        data: Object.values(departmentCounts),
        backgroundColor: ['#4caf50', '#f44336', '#2196f3', '#ffeb3b', '#9c27b0'], // Customize colors
      },
    ],
  };

  const internshipChartData = {
    labels: ['Paid Internship', 'Unpaid Internship'],
    datasets: [
      {
        data: [internshipCounts.paid, internshipCounts.unpaid],
        backgroundColor: ['#007bff', '#cccccc'],
      },
    ],
  };

  const durationChartData = {
    labels: ['Short Duration', 'Long Duration'],
    datasets: [
      {
        data: [durationCounts.short, durationCounts.long],
        backgroundColor: ['#ff9800', '#8bc34a'],
      },
    ],
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  const entry = filteredEntries[currentIndex];

  return (
    <div className="admin-page">
      <div className="header">
        <input
          type="text"
          className="search-box"
          placeholder="Search by name, department, date..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="hamburger-menu" onClick={handleToggleDashboard}>☰</button>
      </div>

      {/* Show Dashboard only */}
      {dashboardActive && (
        <div className="dashboard active">
          <h2>Dashboard</h2>
          <div className="statistics">
            <div className="statistics-item">
              <h3>Total Organizations</h3>
              <p>{totalOrganizations}</p>
            </div>
            <div className="statistics-item">
              <h3>Paid vs Unpaid Internships</h3>
              <p>{internshipCounts.paid} Paid / {internshipCounts.unpaid} Unpaid</p>
            </div>
            <div className="statistics-item">
              <h3>Short vs Long Duration</h3>
              <p>{durationCounts.short} Short / {durationCounts.long} Long</p>
            </div>
          </div>

          <div className="chart-container">
            <h3>Department Distribution</h3>
            <Pie data={departmentChartData} height={200} />
          </div>
          <div className="chart-container">
            <h3>Internship Type</h3>
            <Pie data={internshipChartData} height={200} />
          </div>
          <div className="chart-container">
            <h3>Internship Duration</h3>
            <Pie data={durationChartData} height={200} />
          </div>
        </div>
      )}

      {/* Show Organization Details */}
      {!dashboardActive && (
        <>
          <h1 className="admin-title">Organization details</h1>

          {filteredEntries.length === 0 ? (
            <div className="no-results">No results found</div>
          ) : (
            <div className="entry-card">
              <h2 className="entry-title">{entry.organizationName}</h2>
              {entry.designation && <p><strong>Designation:</strong> {entry.designation}</p>}
              {entry.firstName && entry.lastName && (
                <p><strong>Name:</strong> {entry.firstName} {entry.lastName}</p>
              )}
              {entry.projectNature && <p><strong>Project Nature:</strong> {entry.projectNature}</p>}
              {entry.contactNumber && <p><strong>Contact Number:</strong> {entry.contactNumber}</p>}
              {entry.email && <p><strong>Email:</strong> {entry.email}</p>}
              {entry.department && <p><strong>Department:</strong> {entry.department}</p>}
              {entry.skills.length > 0 && <p><strong>Skills:</strong> {entry.skills.join(', ')}</p>}
              {entry.customSkills && <p><strong>Custom Skills:</strong> {entry.customSkills}</p>}
              {entry.customDepartment && <p><strong>Custom Department:</strong> {entry.customDepartment}</p>}
              {entry.grantExperienceCertificate && (
                <p><strong>Grant Experience Certificate:</strong> {entry.grantExperienceCertificate}</p>
              )}
              {entry.paidInternship && <p><strong>Paid Internship:</strong> {entry.paidInternship}</p>}
              {entry.additionalComments && (
                <p><strong>Additional Comments:</strong> {entry.additionalComments}</p>
              )}
              {entry.availability && <p><strong>Availability:</strong> {entry.availability}</p>}
              {entry.startDate && <p><strong>Start Date:</strong> {formatDate(entry.startDate)}</p>}
              {entry.endDate && <p><strong>End Date:</strong> {formatDate(entry.endDate)}</p>}
              
              <button className="delete-button" onClick={() => deleteEntry(entry._id)}>
                Delete
              </button>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="navigation-buttons">
            <button onClick={prevEntry} disabled={currentIndex === 0} className="nav-button">
              Previous
            </button>
            <button
              onClick={nextEntry}
              disabled={currentIndex === filteredEntries.length - 1}
              className="nav-button"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminOrganisationData;
