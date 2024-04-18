import React, { useState, useEffect } from 'react';

const LoadingBar = (props) => {
  

  const [progress, setProgress] = useState(0); // State to track progress

  useEffect(() => {
    if(props.btnStatus === true){

    
    const interval = setInterval(() => {
      // Increment progress by 10% every 100ms until it reaches 100%
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 3.5);
      } else {
        clearInterval(interval); // Stop the interval when progress reaches 100%
      }
    }, 100);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
}
  }, [progress]); // Re-run effect when progress changes

  // Reset progress to 0
  const resetProgress = () => {
    setProgress(0);
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '30px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          overflow: 'hidden',
          marginTop: '10px',
        }}
      >
        <div
          style={{
            height: '100%',
            backgroundColor: '#4caf50', // Change color as desired
            width: `${progress}%`, // Dynamic width based on progress
            transition: 'width 0.3s ease-in-out',
          }}
        ></div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button onClick={resetProgress}>Reset Progress</button>
      </div>
    </div>
  );
};

export default LoadingBar;
