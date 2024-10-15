import React, { useEffect } from 'react';
import { useState } from 'react';
function FancyHeader() {
  const headerStyle = {
    backgroundColor: '#4CAF50', // Green background
    color: 'white',              // White text
    padding: '20px',             // Padding around the text
    textAlign: 'center',         // Centered text
    fontSize: 'em',             // Larger font size
    // borderRadius: '10px',        // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Shadow effect
    transition: 'transform 0.3s ease',
  };

//   const handleMouseEnter = () => {
//     headerStyle.transform = 'scale(1.05)'; // Enlarge on hover
//   };

//   const handleMouseLeave = () => {
//     headerStyle.transform = 'scale(1)'; // Reset scale
//   };

  return (
    <div 
      style={headerStyle} 
    //   onMouseEnter={handleMouseEnter} 
    //   onMouseLeave={handleMouseLeave}
    >
      <h1>Welcome to My Fancy Header!</h1>
    </div>
  );
}
function FancyFooter() {
    const footerStyle = {
        backgroundColor: '#4CAF50',
        position : 'fixed',
        color: 'white',
        fontSize: '0.5em' ,
        bottom: '0',
        width : '100%', 
        textAlign: 'center'
    };
    const end_date = new Date('2024-12-31T23:59:59');
    const [curTime, setTime] = useState(new Date().toISOString());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toISOString());
        }
        ,1000);
    },[]);
    const time_left = end_date - new Date(curTime).getTime();
    const totalSeconds = Math.floor(time_left / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return(
        <div style = {footerStyle}>
            <h1>Registrations close in {days} days, {hours} hours, {minutes} minutes and {seconds} seconds </h1>
        </div>
    );
}




export {FancyHeader,FancyFooter} 

