import React from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <span className="font-white title title-section">Loading...</span>

      <div className="bottom-layer">
        <div className="bottom-layer bottom-layer--2"></div>
        <div className="bottom-layer bottom-layer--3"></div>
      </div>
    </div>
  )
}