// import React from 'react';
// import logoimg from './assets/logo-white.png';
// import "./Logo.css";

// function Logo() {
//   return (
//     <img
//       className="heading-logo"
//       src={logoimg}
//       alt="Logo Photo"
//     />
//   );
// };

// export default Logo;
import React from 'react';
import logoimg from './assets/logo-white.png';
import "./Logo.css";

function Logo() {
  return (
    <header className="logo-header">
      <div className="container">
        <div className="logo-wrapper">
          <a href="https://www.internpark.com" target="_self" rel="noopener noreferrer">
            <img 
              src={logoimg} 
              alt="Logo" 
              className="heading-logo" 
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Logo;
