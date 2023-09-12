import React from 'react'

const FormSuccessPopup = ({ onClose }) => {
    return (
      <div className="popup">
        <div className="popup-content">
          <h2>Form Submitted Successfully!</h2>
          <p>Your form has been successfully submitted.</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default FormSuccessPopup;