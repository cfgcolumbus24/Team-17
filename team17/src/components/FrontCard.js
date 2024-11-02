// Card.js
import React from 'react'; 
import './FrontCard.css';
import { GrMail } from "react-icons/gr"; // Importing the mail icon from react-icons
import { SiInstagram } from "react-icons/si"; // Importing the Instagram icon from react-icons

/* Card for the Alumni Directory */
const FrontCard = ({ first_name, last_name, residency_name, image_url, residency_year, email, instagram_url }) => {
    return (
      <div className="card"> 
          <img 
            src={image_url} 
            alt={`${first_name} ${last_name}`}  
            className="card-image circular-image"  
          />
          <div className="card-content"> 
            <h3 className="card-title">{`${first_name} ${last_name}`}</h3> {/* Alumni Name */}
            <p className="card-description">{residency_name} - {residency_year}</p> {/* Residency details */}
            <div className="card-icons"> {/* Container for social media icons */}
              <a href={`mailto:${email}`} className="card-email"> {/* Mailto link for sending an email */}
                <GrMail /> {/* Email icon */}
              </a>
              <a href={instagram_url} target="_blank" rel="noopener noreferrer" className="card-instagram"> {/* Link to Instagram profile */}
                <SiInstagram /> {/* Instagram icon */}
              </a>
            </div>
          </div>
      </div>
    );
};

// Exporting the FrontCard component for use in other parts of the application
export default FrontCard;
