// Card.js
import React from 'react'; 
import './FrontCard.css';
import { GrMail } from "react-icons/gr"; // Importing the mail icon from react-icons
import { SiInstagram } from "react-icons/si"; // Importing the Instagram icon from react-icons

/* Card for the Alumni Directory */
const BackCard = ({ bio }) => {
    return (
      <div className="card"> 
        <div>
          <div className="card-content"> 
            <p className="card-description">{bio}</p> {/* Bio details */}
          </div>
        </div>
      </div>
    );
};

// Exporting the FrontCard component for use in other parts of the application
export default BackCard;
