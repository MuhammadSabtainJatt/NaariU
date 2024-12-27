import React from "react";
import PolicyImage from "../../Asset/images/Privacy-Policy-02.png"; // Replace with your image path
import "./privacy.css";

const PrivacyPolicyPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="privacy-header">
        <h1 className="privacy-heading">Privacy Policy</h1>
      </div>
      <hr />

      {/* Content Section */}
      <div className="privacy-content">
        {/* Image Section */}
        <div className="image-section">
          {/* <img src={PolicyImage} alt="Privacy Policy" className="policy-image" /> */}
        </div>

        {/* Privacy Policy List */}
        <div className="policy-list">
          <h2>Your Privacy Matters</h2>
          <ul>
            <li>We do not store your video calls or messages on our servers.</li>
            <li>Your data is encrypted end-to-end to ensure privacy and security.</li>
            <li>Access to your personal data is strictly limited to authorized personnel.</li>
            <li>We do not share your information with third-party advertisers.</li>
            <li>You have the right to delete your account and all related data at any time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
