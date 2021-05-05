import React, { useState, useEffect } from 'react';
import './style.css';

const Progress = ({ done, reset }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`
      };
      setStyle(newStyle);
    }, 200);
  }, [reset]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {done}%
      </div>
    </div>
  );
};

export default Progress;
